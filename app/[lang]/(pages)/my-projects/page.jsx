
import "@/Components/Client/loaders/loaderCss.css"
import PorjectImgsSlider from "@/Components/Client/PorjectImgsSiider";
import ProjectYear from "@/Components/Client/ProjectYear";
import Slider from "@/Components/Global/SliderElems";
import ProjectsMan from "@/Components/lotties/ProjectsMan";
import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { TechIcones } from "@/lib/utils";
import { ExternalLink, Figma, Github, Link2, TvMinimalPlay } from "lucide-react";

export const generateMetadata = async ({ params }) => {
    const { lang } = await params
    const dict = GetTrans(lang);
    return {
        title: dict?.SEO?.PROJECTS?.TITLE,
        description: dict?.SEO?.PROJECTS?.DESCRIPTION,
        openGraph: {
            title: dict?.SEO?.PROJECTS?.TITLE,
            description: dict?.SEO?.PROJECTS?.DESCRIPTION,
            images: ['/media/iderkaoui-mustapha.jpg']
        }
    }
}
const WEBSITELINK = process.env.WEBSITELINK

const page = async ({ params }) => {
    const { lang } = await params;

    const res = await fetch(`${WEBSITELINK}/api/projects`,
        {
            method: "GET",
            cache: "force-cache"
        });

    const projects = await res.json();
    const disct = GetTrans(lang)
    const correctIndex = [
        "https://younite-sigma.vercel.app",
        "https://mstph-quick-cart.netlify.app/",
        "https://chatemate.vercel.app/",
        "https://moroccan-paths.netlify.app/",
        "https://kratrit-c0e6d.web.app/",
    ];
    return (
        <>
            <div className="w-full flex items-center  justify-center ">
                <div className="flex px-20  pb-15 gap-8  items-start  max-w-[1200] w-full">
                    <h1 className="xl:text-[30px] text-[22px] max-w-[450] mt-10 font-semibold tracking-tighter ">{disct?.PROJECTS?.INTRO}</h1>
                    <ProjectsMan />
                </div>
            </div>
            <div className="w-full bg-accent/50 py-10 gap-20 px-2  xl:px-6 flex flex-col items-center">
                {projects &&
                    projects?.data
                        ?.sort((a, b) => {
                            const linkA = a.links?.filter(t => ["live demo", "view live project", "live"].includes(t.label['en']?.toLowerCase()));
                            const linkB = b.links?.filter(t => ["live demo", "view live project", "live"].includes(t.label['en']?.toLowerCase()));
                            if (!linkA) return -1;
                            if (!linkB) return -1;

                            return (correctIndex.findIndex((l) => linkA[0].url == l) - correctIndex.findIndex((l) => linkB[0].url == l))
                        })
                        ?.map(
                            (p, i) =>
                                <div
                                    style={{
                                        // filter: "drop-shadow(0px 10px 8px var(--filter-color))"
                                    }}
                                    key={i} className={`max-w-[1500] bg-background flex flex-col xl:flex-row w-full  border xl:items-start items-center   xl:p-4 xl:py-10  rounded-lg   relative justify-between  xl:px-3`}>
                                    <div className="flex xl:max-w-[70%]  max-w-full  items-center">
                                        {/* <ProjectYear lang={lang} year={"2024"} /> */}
                                        <div className={`${lang == "ar" ? "xl:pr-6 border-r-2  mr-5 " : "xl:pl-6 border-l  "} flex  border-border  flex-col xl:max-w-[90%] w-full xl:w-auto  gap-2`}>

                                            <div className="relative  w-fit">
                                                <h1 className="xl:text-3xl  text-2xl font-bold  tracking-tighter">
                                                    {i + 1} .  {
                                                        p.title[lang]
                                                    }
                                                </h1>
                                                <span className="absolute bg-gradient-to-t from-background to-transparent h-[20px] bottom-0 left-0 w-full"></span>
                                                <span className="absolute w-[30%] opacity-60 -bottom-2 left-0 py-[2px] bg-card-foreground "></span>
                                            </div>
                                            <div className={`flex ${lang == "ar" ? "pr-3 " : "pl-3 "}  mt-4 flex-col gap-3 `}>
                                                {
                                                    p.subtitles && p.subtitles?.length > 0 &&
                                                    <div className="flex flex-col pl-1 gap-2">
                                                        {
                                                            p.subtitles?.map((s, i2) => <h2 className="xl:text-lg font-medium tracking-tight" key={i2}>{s[lang]}</h2>)
                                                        }
                                                    </div>
                                                }
                                                {
                                                    p.problem[lang] &&

                                                    <div className="flex gap-2 flex-col items-start">
                                                        <h2 className="font-medium text-nowrap text-red-700 xl:text-lg opacity-70">{disct?.PROJECTS?.PROBELM}</h2>
                                                        <p className="pl-4">{p.problem[lang]}</p>
                                                    </div>
                                                }
                                                {
                                                    p.solution[lang] &&

                                                    <div className="flex gap-2 flex-col items-start">
                                                        <h2 className="font-medium text-nowrap xl:text-lg text-green-600 opacity-70">{disct?.PROJECTS?.SOLUTION}</h2>
                                                        <p className="pl-4">{p.solution[lang]}</p>
                                                    </div>
                                                }
                                                {
                                                    p.takeaways && p.takeaways.length > 0 &&
                                                    <>
                                                        <h1 className="text-lg font-medium xl:ml-4 mt-4 opacity-70 tracking-tighter">{disct?.PROJECTS?.KEYAWAYS}</h1>
                                                        <ul className={` ${lang == "ar" ? "xl:pr-15 pr-8 " : "xl:pl-15 pl-8 "} flex  flex-col mt-1  gap-3}`}>
                                                            {p.takeaways.map((t, i3) => <li key={i3} className="list-decimal font-medium">{t[lang]}</li>)}
                                                        </ul>
                                                    </>
                                                }
                                                {
                                                    p.challanges && p.challanges.length > 0 &&
                                                    <>
                                                        <h1 className="text-lg font-medium ml-4 mt-4 opacity-70 tracking-tighter">{disct?.PROJECTS?.CHANLLANGES}</h1>
                                                        <ul className={` ${lang == "ar" ? "pr-15 " : "pl-15 "} flex  flex-col mt-1  gap-3}`}>
                                                            {p.challanges.map((t, i3) => <li key={i3} className="list-decimal font-medium">{t[lang]}</li>)}
                                                        </ul>
                                                    </>
                                                }
                                                {
                                                    p.technologies && p.technologies.length > 0 &&
                                                    <div className=" flex gap-4 flex-col xl:flex-row xl:items-center mt-10">
                                                        <h1 className=" font-medium text-nowrap  opacity-70 tracking-tighter">{disct?.PROJECTS?.TECHUSED}</h1>
                                                        <div className="max-w-[80%]  overflow-hidden">

                                                            <Slider  >
                                                                {p.technologies.map((t, i3) =>
                                                                    <div key={i3} className="p-2 select-none  !min-w-fit px-4 flex items-center gap-2  rounded-2xl border font-semibold">
                                                                        <img draggable={false} className="w-[35px] h-[25px]" alt={t} src={`/media${TechIcones[t.toLowerCase().replace(/\./g, "").replace(/ /g, "")]}`} />
                                                                        {t}
                                                                    </div>
                                                                )}
                                                            </Slider>
                                                        </div>
                                                    </div>
                                                }

                                                {
                                                    p.links && p.links.length > 0 &&
                                                    <div className=" flex gap-4 items-center mt-5 xl:mt-10">
                                                        <ul className="flex flex-row flex-wrap  xl:items-start  items-center justify-center xl:justify-start gap-5">
                                                            {p.links.map((t, i3) =>
                                                                <Button key={i3}
                                                                    variant={["live demo", "live", "view live project", 'view source code', "github", "open in github", "github repo"].includes(t.label['en']?.toLowerCase()) ? "default" : "outline"}
                                                                    className={``}>

                                                                    <a target="_blank" href={t.url} className="flex items-center gap-2" >
                                                                        {t.label[lang]}
                                                                        {
                                                                            ["live demo", "view live project", "live"].includes(t.label['en']?.toLowerCase())
                                                                                ? <ExternalLink />
                                                                                : (
                                                                                    ["github", "open in github", 'view source code', "github repo"].includes(t.label['en']?.toLowerCase())
                                                                                        ? <Github />
                                                                                        : ["watch video demo", "video demo", "video"].includes(t.label['en']?.toLowerCase())
                                                                                            ? <TvMinimalPlay />
                                                                                            : <Figma />
                                                                                )
                                                                        }
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </ul>
                                                    </div>
                                                }

                                            </div>

                                        </div>
                                    </div>
                                    {
                                        p.media && p.media.length > 0 &&
                                        <PorjectImgsSlider data={p.media} lang={lang} />
                                    }
                                </div>
                        )
                }
            </div>
        </>
    )
}

export default page
