import ContactMeForm from "@/Components/Client/ContactMeForm";
import ButtonCopy from "@/Components/Global/ButtonCopy";
import SendMail from "@/Components/lotties/SendMail";
import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { Copy, Linkedin, Mail, MessageSquareText, Phone, PhoneOff } from "lucide-react";
import Link from "next/link";


export const metadata = {
  title: "iderkaoui mustapha",
  description: "full-stack developer | iderkaoui mustapha"
};
const { MYPHONE_NUMBER, LINKDINLINK } = process.env
const page = async ({ params }) => {
  const { lang } = await params
  const dict = GetTrans(lang)
  return (
    <div className="flex w-full   mr-auto justify-center ">
      <div className="w-full px-4 xl:px-8 max-w-[1500px] items-center flex justify-between  flex-col xl:flex-row">
        <div className="w-full mb:10 md:mb-0 xl:w-auto">
          <h1 className="xl:text-[40px] text-[28px] font-bold tracking-tighter md:w-[700px]">{dict?.ABOUT_ME?.TITLE}</h1>
          <h2 className="opacity-70 md:max-w-[600px] mt-3 ml-2">{dict?.ABOUT_ME?.IM_BASED}</h2>

          <div className="flex xl:mt-8  relative items-center flex-col w-full max-w-[800px]  mt-10">
            <span className="w-full text-center font-semibold tracking-tighter text-2xl">{dict?.HOME?.name}</span>

            <svg className={`absolute xl:block hidden opacity-60 ${lang == "ar" ? "scale-x-[-1]" : ""} top-6`} width="489" height="335" viewBox="0 0 489 335" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 97V76C99.1667 77.5 295.5 64.6 295.5 1C299.1 99.8 425.333 127.5 488 129V145.5" stroke="black" stroke-opacity="0.48" />
              <path d="M296 2C266.978 205.618 164.574 294.983 117 314.214V335" stroke="#858585" />
            </svg>


            <div className="flex w-full px-7 mt-16 flex-col">
              <Mail className="text-red-500" />
              <a className="flex items-center font-bold tracking-tighter gap-3 ">
                iderkaoui.mustapha.dev@gmail.com
                <ButtonCopy text={"iderkaoui.mustapha.dev@gmail.com"} />
              </a>
            </div>

            <div className="flex px-7 w-full  justify-end items-end xl:mt-4 mt-12 flex-col">
              <div className="flex flex-col">
                <svg aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00c7be"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>

                <a className="flex flex-col items-center font-bold tracking-tighter gap-3 ">
                  +{MYPHONE_NUMBER}
                  <div className="flex gap-2">
                    <a href={`https://wa.me/${MYPHONE_NUMBER.replace(/ /g, "")}`} target="_blank">
                      <Button className={"bg-green-500 w-[140px] font-semibold text-white "}>
                        {dict?.COMMON.OPEN_CHAT}
                      </Button>
                    </a>
                    <ButtonCopy text={`+${MYPHONE_NUMBER}`} />
                  </div>
                </a>
              </div>
            </div>
            <div className={`flex w-full  mt-[100px] flex-col  ${lang == "ar" ? "pr-[120px]" : "pl-[120px]"} `}>
              <Linkedin className="text-blue-500" />
              <div className="flex items-center gap-3">

                <a href={LINKDINLINK} target="_blank" className="flex items-center font-bold tracking-tighter gap-3 ">
                  iderkaoui mustapha
                </a>
                <ButtonCopy text={LINKDINLINK} />
              </div>
            </div>
          </div>

        </div>
        <div className="h-full w-full  relative mt-10 pt-30 xl:mt-0  xl:w-auto items-end  justify-between flex flex-col  ">
          <div className="absolute ltr:left-0 z-[1] top-0 ">
            <SendMail />
          </div>
          <ContactMeForm />

          <Link className={"px-8 flex w-full  justify-center items-center bg-background  gap-2 font-semibold border rounded-md p-3 "} href={"/contact-me/chat"}>
            {
              dict?.BUTTONS?.live_chat
            }
            <MessageSquareText className="opacity-70 W-5" />
          </Link>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default page
