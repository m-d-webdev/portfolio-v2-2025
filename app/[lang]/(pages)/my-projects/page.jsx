
import "@/Components/Client/loaders/loaderCss.css"
import PorjectImgsSlider from "@/Components/Client/PorjectImgsSiider";
import ProjectYear from "@/Components/Client/ProjectYear";
import Slider from "@/Components/Global/SliderElems";
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
        <div className="w-full bg-[var(--main-bg-color)] min-h-full gap-40 px-4  xl:px-12  flex flex-col ">
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
                        (p, i) => <div
                            style={{
                                // filter: "drop-shadow(0px 10px 8px var(--filter-color))"
                            }}
                            key={i} className={` flex  border items-start hover:bg-[var(--bg-wh)]  p-4 py-10  rounded-lg   relative justify-between  px-3`}>
                            <div className="flex max-w-[78%]   items-center">
                                {/* <ProjectYear lang={lang} year={"2024"} /> */}
                                <div className={`${lang == "ar" ? "pr-6 border-r-2  mr-5 " : "pl-6 border-l  "} flex  border-border  flex-col max-w-[90%]   gap-2`}>

                                    <div className="relative  w-fit">
                                        <h1 className="text-4xl  font-bold tracking-tighter">
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
                                                    p.subtitles?.map((s, i2) => <h2 className="text-lg font-medium tracking-tight" key={i2}>{s[lang]}</h2>)
                                                }
                                            </div>
                                        }
                                        {
                                            p.problem[lang] &&

                                            <div className="flex gap-2 flex-col items-start">
                                                <h2 className="font-medium text-nowrap text-red-700 text-lg opacity-70">{disct?.PROJECTS?.PROBELM}</h2>
                                                <p className="pl-4">{p.problem[lang]}</p>
                                            </div>
                                        }
                                        {
                                            p.solution[lang] &&

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
                            </div>
                            {
                                p.media && p.media.length > 0 &&
                                <PorjectImgsSlider data={p.media} lang={lang} />
                            }
                        </div>
                    )
            }
            {/* <div className="w-full flex items-center justify-center">

                <Button variant={"default"} className={"text-xl"} size={"lg"}>
                    {
                        disct?.COMMON?.LOADMORE
                    }
                </Button>
            </div> */}
        </div>
    )
}

export default page
//   {
//   "sa": {
//     "_id": {
//       "$oid": "your-object-id-here"
//     },
//     "title": {
//       "en": "Younite - Social Media Platform",
//       "fr": "Younite - Plateforme de Réseau Social",
//       "ar": "Younite - منصة تواصل اجتماعي"
//     },
//     "subtitles": [
//       {
//         "en": "A full-stack platform combining social sharing, blogging, news, and messaging.",
//         "fr": "Une plateforme full-stack combinant partage social, blog, actualités et messagerie.",
//         "ar": "منصة متكاملة تجمع بين المشاركة الاجتماعية، التدوين، الأخبار والمراسلة."
//       },
//       {
//         "en": "Built with React, Node.js, and MongoDB, Younite is a dynamic full-stack social media platform where users can post content, view reels, read blogs and news, and leave quick comments or detailed replies. It includes a real-time chat system (text only), a dedicated space for content sharing, and smooth comment-reply navigation. Designed with a clean UI, it offers a complete social interaction experience similar to Facebook or Instagram, with additional sections for blogging and curated news.",
//         "fr": "Développé avec React, Node.js et MongoDB, Younite est une plateforme sociale full-stack dynamique permettant aux utilisateurs de publier du contenu, consulter des reels, lire des blogs et des actualités, et laisser des commentaires rapides ou des réponses détaillées. Elle intègre un système de messagerie en temps réel (texte uniquement), un espace dédié au partage de contenu, et une navigation fluide entre les commentaires et leurs réponses. Conçue avec une interface épurée, elle offre une expérience sociale complète similaire à Facebook ou Instagram, avec en plus des sections dédiées au blogging et aux actualités.",
//         "ar": "تم تطوير 'Younite' باستخدام React وNode.js وMongoDB، وهي منصة تواصل اجتماعي متكاملة تتيح للمستخدمين نشر المحتوى، مشاهدة المقاطع القصيرة، قراءة المدونات والأخبار، وترك تعليقات سريعة أو ردود مفصلة. تحتوي المنصة على نظام دردشة فورية (نص فقط)، ومساحة مخصصة لمشاركة المحتوى بين المستخدمين، بالإضافة إلى تنقل سلس بين التعليقات والردود. بفضل واجهتها النظيفة، توفر تجربة تواصل اجتماعي شاملة تشبه فيسبوك أو إنستغرام، مع أقسام إضافية للمدونات والأخبار المختارة."
//       }
//     ],
//     "takeaways":[
//           {
//             "en": "Built a full-stack social media platform using React, Node, and MongoDB, with real-time features via Socket.IO.",
//             "fr": "Création d'une plateforme sociale full-stack avec React, Node et MongoDB, avec des fonctionnalités en temps réel via Socket.IO.",
//             "ar": "بناء منصة تواصل اجتماعي كاملة باستخدام React وNode وMongoDB، مع ميزات فورية باستخدام Socket.IO."
//           },
//           {
//             "en": "Integrated blogs, news, posts, and reels in a seamless user interface, enhancing content diversity and engagement.",
//             "fr": "Intégration de blogs, actualités, publications et reels dans une interface fluide, pour une meilleure diversité de contenu.",
//             "ar": "دمج المدونات والأخبار والمنشورات والمقاطع القصيرة في واجهة مستخدم سلسة، لتعزيز تنوع المحتوى والتفاعل."
//           },
//           {
//             "en": "Implemented quick comments, threaded replies, and moment popups to enrich user interaction across all content types.",
//             "fr": "Mise en place de commentaires rapides, de réponses en fil de discussion et de popups contextuels pour enrichir l'interaction.",
//             "ar": "تنفيذ تعليقات سريعة وردود متسلسلة ونوافذ لحظية لتعزيز التفاعل عبر جميع أنواع المحتوى."
//           },
//           {
//             "en": "Used Firebase for authentication and real-time messaging, securing user access and chat features.",
//             "fr": "Utilisation de Firebase pour l'authentification et la messagerie en temps réel, assurant sécurité et communication.",
//             "ar": "استخدام Firebase للمصادقة والرسائل الفورية، مما يضمن أمان الوصول والتواصل."
//           },
//           {
//             "en": "Improved codebase modularity with reusable components, Redux Toolkit for state management, and clear logic flows.",
//             "fr": "Amélioration de la modularité du code avec des composants réutilisables, Redux Toolkit pour la gestion d'état.",
//             "ar": "تحسين بنية الكود باستخدام مكونات قابلة لإعادة الاستخدام وRedux Toolkit لإدارة الحالة."
//           }
//         ],
//    "technologies": [
//       "react",
//       "nodejs",
//       "express",
//       "mongoose",
//       "mongodb",
//       "socketio",
//       "firebase",
//       "redux"
//     ]
// ,
//     "links": [
//       {
//         "label": {
//           "en": "View live project",
//           "fr": "Voir le projet en ligne",
//           "ar": "عرض المشروع الحي"
//         },
//         "url": "https://younite-sigma.vercel.app"
//       },
//       {
//         "label": {
//           "en": "View source code",
//           "fr": "Voir le code source",
//           "ar": "عرض كود المصدر"
//         },
//         "url": "https://github.com/m-d-webdev/Younite.git"
//       },
//       {
//         "label": {
//           "en": "Watch Video Demo",
//           "fr": "Voir la démonstration vidéo",
//           "ar": "مشاهدة العرض المرئي"
//         },
//         "url": "/media/younite/video.mp4"
//       }
//     ],
//     "media": [
//   {
//     "caption": {
//       "en": "Homepage – User feed with all posts",
//       "fr": "Page d'accueil – Fil d’actualité avec toutes les publications",
//       "ar": "الصفحة الرئيسية – عرض المشاركات الكاملة للمستخدم"
//     },
//     "src": "/media/younite/img1.png",
//     "type": "image"
//   },
//
// ]

//   }
// }
