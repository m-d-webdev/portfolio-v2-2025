import BTN_OPENCHAT from "@/Components/Client/chating/BTN_OPENCHAT";
import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

export const metaData = {
    title: "Online chat with iderkaoui mustapha ",
    description: "Chat online with mustapha iderkaoui"
}

const HomeChatPage = async ({ params }) => {
    const { lang } = await params;
    const dict = GetTrans(lang);
    return (
        <div className="w-full md:px-10 px-4 h-[80vh] flex  items-end justify-evenly">

            <div className="flex items-start justify-start flex-col h-[80%] xl:mr-20 ">
                <h1 className="text-4xl font-bold tracking-tighter">{dict?.CHAT?.TITLE}</h1>
                <p className="max-w-[600px] text-lg mt-5 opacity-80 ">{dict?.CHAT?.SUBTITLE}</p>
                <BTN_OPENCHAT />
            </div>
            <Image width={400} height={400} alt="chat image" src={"/media/ChatImage2.png"} />
        </div>
    )
}

export default HomeChatPage
