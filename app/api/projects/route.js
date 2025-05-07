import dbConnect from "@/lib/mongoose"
import Projects from "@/models/Projects";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {

        await dbConnect();
        const projects = await Projects.find({});
        return NextResponse.json({ data: projects })

    } catch (error) {
        return NextResponse.json({ ok: false, error: error.message })
    }
}

export const POST = async () => {
    try {

        await dbConnect();

        const projects = await Projects.create({
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
