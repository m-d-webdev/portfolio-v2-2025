
import "@/Components/Client/loaders/loaderCss.css"
import PorjectImgsSlider from "@/Components/Client/PorjectImgsSiider";
import ProjectYear from "@/Components/Client/ProjectYear";
import { Button } from "@/Components/ui/button";
import { GetTrans } from "@/lib/server-i18n";
import { TechIcones } from "@/lib/utils";
import { ExternalLink, Figma, Github, TvMinimalPlay, Video } from "lucide-react";
import Image from "next/image";
export const metadata = {
    title: "iderkaoui mustapha",
    description: "full-stack developer | iderkaoui mustapha"
};


const page = async ({ params }) => {
    const { lang } = await params
    const res = await fetch("http://localhost:3000/api/projects",
        {
            method: "GET",
            cache: "force-cache"
        })

    const projects = await res.json();
    const disct = GetTrans(lang)

    return (
        <>
            {projects &&
                projects?.data?.map(
                    (p, i) => <div key={i} className={` py-10 flex items-start relative justify-between  px-3`}>
                        <ProjectYear lang={lang} year={"2024"} />
                        <div className={`${lang == "ar" ? "pr-6 border-r-2  mr-5 " : "pl-6 border-l  "} flex  border-border  flex-col max-w-[75%]   gap-2`}>

                            <div className="relative">
                                <h1 className="text-4xl  font-bold tracking-tighter">
                                    {
                                        p.title[lang]
                                    }
                                </h1>
                                <span className="absolute bg-gradient-to-t from-background to-transparent h-[20px] bottom-0 left-0 w-full"></span>
                            </div>
                            <div className={`flex ${lang == "ar" ? "pr-3 " : "pl-3 "}  mt-4 flex-col gap-3 `}>
                                {
                                    p.subtitles && p.subtitles?.length > 0 &&
                                    <div className="flex flex-col pl-1 gap-2">
                                        {
                                            p.subtitles?.map((s, i2) => <h2 className="text-lg font-medium tracking-tight" key={i2}>{s[lang]}</h2>)
                                        }
                                    </div>
                                }
                                {
                                    p.problem &&

                                    <div className="flex gap-2 flex-col items-start">
                                        <h2 className="font-medium text-nowrap text-red-700 text-lg opacity-70">{disct?.PROJECTS?.PROBELM}</h2>
                                        <p className="pl-4">{p.problem[lang]}</p>
                                    </div>
                                }
                                {
                                    p.solution &&

                                    <div className="flex gap-2 flex-col items-start">
                                        <h2 className="font-medium text-nowrap text-lg text-green-600 opacity-70">{disct?.PROJECTS?.SOLUTION}</h2>
                                        <p className="pl-4">{p.solution[lang]}</p>
                                    </div>
                                }
                                {
                                    p.takeaways && p.takeaways.length > 0 &&
                                    <>
                                        <h1 className="text-lg font-medium ml-4 mt-4 opacity-70 tracking-tighter">{disct?.PROJECTS?.KEYAWAYS}</h1>
                                        <ul className={` ${lang == "ar" ? "pr-15 " : "pl-15 "} flex  flex-col mt-1  gap-3}`}>
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
                                    <div className=" flex gap-4 items-center mt-10">
                                        <h1 className=" font-medium   opacity-70 tracking-tighter">{disct?.PROJECTS?.TECHUSED}</h1>
                                        <ul className="flex flex-row flex-wrap items-start  ml-6 gap-5">
                                            {p.technologies.map((t, i3) => <li key={i3} className="p-2 px-4 flex items-center gap-2  rounded-2xl border font-semibold">
                                                <img className="w-[35px] h-[25px]" alt={t} src={`/media${TechIcones[t.toLowerCase().replace(/\./g, "").replace(/ /g, "")]}`} />
                                                {t}
                                            </li>
                                            )}
                                        </ul>
                                    </div>
                                }

                                {
                                    p.links && p.links.length > 0 &&
                                    <div className=" flex gap-4 items-center mt-10">
                                        <ul className="flex flex-row flex-wrap items-start  gap-5">
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
                        {
                            p.media && p.media.length > 0 &&
                            <PorjectImgsSlider data={p.media} lang={lang} />
                        }

                    </div >
                )
            }

        </>
    )
}

export default page

// {
//   "sa": {
//     "_id": {
//       "$oid": ""
//     },
//     "title": {
//       "en": "",
//       "fr": "",
//       "ar": ""
//     },
//     "subtitles": [
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       }
//     ],
//     "problem": {
//       "en": "",
//       "fr": "",
//       "ar": ""
//     },
//     "solution": {
//       "en": "",
//       "fr": "",
//       "ar": ""
//     },
//     "takeaways": [
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       }
//     ],
//     "challanges": [
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       },
//       {
//         "en": "",
//         "fr": "",
//         "ar": ""
//       }
//     ],
//     "technologies": [],
//     "links": [
//       {
//         "label": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "url": ""
//       },
//       {
//         "label": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "url": ""
//       },
//       {
//         "label": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "url": ""
//       }
//     ],
//     "media": [
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       },
//       {
//         "caption": {
//           "en": "",
//           "fr": "",
//           "ar": ""
//         },
//         "src": "",
//         "type": "image"
//       }
//     ]
//   }
// }
