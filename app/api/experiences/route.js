import dbConnect from "@/lib/mongoose"
import Expriences from "@/models/Experiences";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const expriences = await Expriences.find();;
        console.log({expriences});
        
        return NextResponse.json({ data: expriences })

    } catch (error) {
        return NextResponse.json({ ok: false, error: error.message })
    }
}

export const POST = async () => {
    try {

        await dbConnect();

        const projects = await Expriences.create({
            title: {
                en: "en",
                ar: "ar"
            }
        });
        console.log("--------------------");

        console.log(projects);
        console.log("--------------------");

        return Response.json({ projects })

    } catch (error) {
        return Response.json({ ok: false, error: error.message })
    }
}
