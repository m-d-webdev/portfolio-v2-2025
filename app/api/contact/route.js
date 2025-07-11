import mailer from "@/lib/nodemailer";

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const MY_PROFF_EMAIL = "iderkaoui.mustapha.dev@gmail.com"
const NODEMAILER_EMAIL_ADDRESS = "mstph.iderkaoui@gmail.com"

const WEBSITE_LINK = process.env.WEBSITELINK || "http://localhost:3000"
export const POST = async (request) => {
    try {
        const body = await request.json();
        const { name, email, text, lang } = body;
        if (!name || !email) {
            return new NextResponse("Failed to get data from req", {
                status: 400,
                headers: { "Content-Type": "application/json" },

            })
        };

        const res = await mailer.sendMail({
            to: MY_PROFF_EMAIL,
            from: email,
            text: `${text} - ${email}`,
            subject: `Email from my portfolio `
        });



        const entries = [
            {
                key: "name",
                value: name
            },
            {
                key: "link",
                value: WEBSITE_LINK
            },
            {
                key: "link",
                value: WEBSITE_LINK
            },
            {
                key: "year",
                value: new Date().getFullYear()
            },
        ];

        const html = await TemplateHandler({
            entries,
            lang,
            templateName: "response-to-sender.html"
        });


        const res2 = mailer.sendMail({
            to: email,
            from: MY_PROFF_EMAIL,
            html: html,
            subject: {
                en: "Glad You Reached Out – Here If You Have Questions",
                fr: "Heureux de votre message – N'hésitez pas si vous avez des questions",
                ar: "سعيد بتواصلك – أنا هنا إذا كانت لديك أي أسئلة"
            }[lang ?? "fr"]
        });

        return NextResponse.json({ done: true, res2 })


    } catch (error) {
        console.log({ error });
        return new NextResponse({ done: false, error }, {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })

    }
}

const TemplateHandler = async ({ lang = "fr", entries = [], templateName = "" }) => {
    try {

        if (!templateName) throw new Error("Unknown template");
        console.log();
        console.log({ __dirname });
        console.log(process.cwd());
        console.log();



        const templatePath = path.join(process.cwd(), '/app/api/contact/templates', lang, templateName);
        let template = await fs.promises.readFile(templatePath, 'utf-8');

        entries.forEach(t => {
            template = template.replace(`{{${t.key}}}`, t.value);
        });

        return template;
    } catch (error) {
        console.log({ error });

        return false;
    }
};