import { GetTrans } from "@/lib/server-i18n";


export const generateMetadata = async ({ params }) => {
    const { lang } = await params;
    const dict = GetTrans(lang)
    return {
        title: dict?.SEO?.EXPERINCE?.TITLE,
        description: dict?.SEO?.EXPERINCE?.DESCRIPTION
    }
}
const WEBSITELINK = process.env.WEBSITELINK

const page = async ({ params }) => {
    const { lang } = params;
    const t = GetTrans(lang);
    const res = await fetch(`${WEBSITELINK}/api/experiences`, {
        cache: "force-cache"
    })
    const { data: Data } = await res.json();

    return (
        <div className="w-full flex-col   flex items-center" >
            {
                Data &&
                Data
                    .sort((a, b) => parseInt(a.order) - parseInt(b.order))
                    .map((e, i) =>
                        <div key={i} className={`mb-10 p-4 ${lang == "ar" ? "border-r-2 pr-10" : "border-l-2 pl-10"} flex w-full max-w-[1100px] pb-10  flex-col gap-4 relative   `}>
                            <h1 className="text-3xl font-semibold tracking-tighter">{e.title[lang]}
                                {
                                    e.order == 1 &&
                                    <span > <a target="_blank" href="https://www.developpeur-informatique.ma/" className="text-blue-800 pl-1">Développeur-informatique.ma</a></span>
                                }
                            </h1>
                            {
                                e.subtitles && e.subtitles?.length > 0 &&
                                <div className="flex flex-col pl-1 gap-2">
                                    {
                                        e.subtitles?.map((s, i2) => <h2 key={i2} className="text-xl font-medium mt-4 max-w-[1000px]">{s[lang]}</h2>)
                                    }
                                </div>
                            }
                            {
                                e.takeaways &&
                                <ul className={`flex-col  ${lang == "ar" ? "pr-10" : "pl-10"}  list-decimal  mt-5  flex gap-3`}>
                                    {
                                        e.takeaways?.map((s, i2) =>
                                            <li
                                                className="text-"
                                                key={i2}
                                            >
                                                <h3 className="font-medium text-lg">{s.title[lang]}</h3>
                                                <p className="mt-2 ml-4">{s.content[lang]}</p>
                                            </li>
                                        )
                                    }
                                </ul>
                            }
                            {
                                e.conclusion &&
                                <div className="mt-5">
                                    <h3 className="font-medium text-xl">{t.EXPERINCE.CONCLUSION.subtitle}</h3>
                                    <p className="mt-2 ml-4">{e.conclusion[lang]}</p>
                                </div>
                            }
                        </div>
                    )
            }

        </div >

    )
}

export default page
