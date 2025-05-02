import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { FileUser, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "iderkaoui mustapha",
  description: "full-stack developer | iderkaoui mustapha"
};


export default async function Home({ params }) {
  const { lang } = await params;
  const dict = GetTrans(lang);

  return (
    <div className="  w-full   h-full flex items-center justify-center">
      <div className="w-full   h-full max-w-[1200px]">
        <div className="flex flex-col items-center pt-10  w-full">
          <h1 className="text-7xl font-secondary  text-center font-extrabold tracking-[-5px]">{dict?.HOME?.name}</h1>
          <h2 className="mt-8 text-center text-2xl  font-bold tracking-tighter opacity-60">{dict?.HOME?.title}</h2>
          <h1 className="text-2xl max-w-[1000px] text-center font-medium mt-10 tracking-[-1px]">{dict?.HOME?.highlight}</h1>
          <ul className="mt-14 max-w-[800px]  ">
            <li><p className="text-center tracking-tight ">{dict?.HOME?.about_1}</p></li>
            <li><p className="text-center mt-6 tracking-tight ">{dict?.HOME?.about_2}</p></li>
            <li><p className="text-center mt-10 font-medium text-lg tracking-tight ">{dict?.HOME?.location}</p></li>
          </ul>
        </div>
        <div className="w-full  p-4 pl-10 justify-end mt-20 gap-4 flex items-center">
          <Button>

            <a
              className="flex gap-1"
              href={"/"}
            >
              {
                dict?.BUTTONS?.download_cv
              }
              <FileUser />
            </a>
          </Button>
          <Button

          >

            <Link
              className="flex gap-1"
              href={"/contact-me"}
            >
              {
                dict?.BUTTONS?.get_in_touch
              }
              <Phone />
            </Link>
          </Button>
          <Button
            variant={"default"}
          >

            <Link
              className="flex gap-1"
              href={"/my-projects"}
              variant={"default"}>
              {
                dict?.BUTTONS?.expore_projects
              }
              <svg className={""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4"></path> <path d="M20 21l2 -2l-2 -2"></path> <path d="M17 17l-2 2l2 2"></path> </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
