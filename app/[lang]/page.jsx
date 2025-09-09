// import Developer from "@/Components/lotties/Developer";
import Developer from "@/Components/lotties/Developer";
import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { FileUser, Phone } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { lang } = await params
  const dict = GetTrans(lang);
  return {
    title: dict?.SEO.HOME.TITLE,
    description: dict?.SEO.HOME.DESCRIPTION,
    openGraph: {
      title: dict?.SEO.HOME.TITLE,
      description: dict?.SEO.HOME.DESCRIPTION,
      images: ['/media/iderkaoui-mustapha.jpg']
    }
  }
}

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = GetTrans(lang);

  return (
    <div className="  w-full     flex xl:items-center items-start xl:justify-center justify-start">
      <div className="w-full   xl:justify-center p-2 px-3 xl:p-0 flex flex-col items-center   max-w-[1200px]">
        <div className="flex flex-col items-center xl:pt-10 pt-4  w-full">
          <div className="relative">
            <h1 className="xl:text-7xl text-5xl MyName font-secondary  text-center font-extrabold tracking-[-5px]">{dict?.HOME?.name}</h1>
            <span className="absolute bg-gradient-to-t from-background to-transparent h-[40px] bottom-0 left-0 w-full"></span>
          </div>
          <h2 className="mt-8  text-center xl:text-2xl text-xl  font-bold tracking-tighter opacity-60">{dict?.HOME?.title}</h2>
          <h1 className="xl:text-2xl text-xl max-w-[1000px] text-center font-medium mt-10 tracking-[-1px]">{dict?.HOME?.highlight}</h1>
          <ul className="mt-14 max-w-[800px]  ">
            <li><p className="text-center tracking-tight ">{dict?.HOME?.about_1}</p></li>
            <li><p className="text-center mt-6 tracking-tight ">{dict?.HOME?.about_2}</p></li>
            <li><p className="text-center mt-10 font-medium text-lg tracking-tight ">{dict?.HOME?.location}</p></li>
          </ul>
        </div>

        <div className="w-full   p-4  justify-evenly mt-20 gap-4 flex flex-col md:flex-row items-center">
          <Developer />
          <div className="md:w-[500]  p-4 mt-15  grid grid-cols-2  gap-4  items-center">
            <Button
              size={"lg"}
              className={"w-full !py-5"}
            >

              <a
                className="flex gap-1"
                download={"Iderkaoui mustapha | full stack developer"}
                href={"https://younitebucket.s3.eu-north-1.amazonaws.com/mustapha_iderkaoui_cv.pdf"}
              >
                {
                  dict?.BUTTONS?.download_cv
                }
                <FileUser />
              </a>
            </Button>
            <Button
              size={"lg"}
              className={"w-full !py-5"}

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
              size={"lg"}
              variant={"default"}
              className={"col-span-2 !py-5"}
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
    </div>
  );
}
