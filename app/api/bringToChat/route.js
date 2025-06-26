import mailer from "@/lib/nodemailer";
import { NextResponse } from "next/server"
const MY_PROFF_EMAIL = "iderkaoui.mustapha.dev@gmail.com"

export const POST = async (req) => {
    try {
        await Promise.all(
            Array(3).fill().map(async a => {
                const res = await mailer.sendMail({
                    to: MY_PROFF_EMAIL,
                    from: "",
                    text: `Alert ! , chat waiting for you , `,
                    subject: `New persone, want to chat with you , come here fast !  `
                });

            })
        )

        return new NextResponse({ ok: true }, {
            status: 200
        })
    } catch (error) {
        return new NextResponse(error, {
            status: 500
        })
    }
}