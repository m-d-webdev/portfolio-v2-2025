import { GetTrans } from "@/lib/server-i18n";

const page = ({ params }) => {
    const { lang } = params;
    const t = GetTrans(lang);

    return (
        <div className="w-full flex-col pb-30  flex items-center" >
            {
                t.EXPERINCE &&
                <>
                    <div className="flex w-full max-w-[1100px] pb-10 p-4 flex-col gap-4 pl-2 border-l-2 pl-10">
                        <h1 className="text-3xl font-semibold tracking-tighter">{t.EXPERINCE.title} <span><a  href="https://www.developpeur-informatique.ma/" className="text-blue-800 pl-1">Développeur-informatique.ma</a></span></h1>
                        <h2 className="text-xl font-medium mt-4 max-w-[1000px]">{t.EXPERINCE.introduction}</h2>
                        <ul className="flex-col pl-10 list-decimal  mt-5  flex gap-3">
                            {
                                t.EXPERINCE.sections?.map(s =>
                                    <li
                                        className="text-"
                                        key={s.subtitle}
                                    >
                                        <h3 className="font-medium text-lg">{s.subtitle}</h3>
                                        <p className="mt-2 ml-4">{s.content}</p>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="mt-5">
                            <h3 className="font-medium text-xl">{t.EXPERINCE.CONCLUSION.subtitle}</h3>
                            <p className="mt-2 ml-4">{t.EXPERINCE.CONCLUSION.content}</p>
                        </div>
                    </div>

                    <div className="flex mt-20 w-full max-w-[1100px] pb-10 p-4 flex-col gap-4 pl-2 border-l-2 pl-10">
                        <h1 className="text-3xl font-semibold tracking-tighter">{t.EXPER2.title}</h1>
                        <h2 className="text-xl font-medium mt-4 max-w-[1000px]">{t.EXPER2.introduction}</h2>
                        <h3 className="font-medium  mt-5  text-lg">{t.EXPER2.key_takeaways_title}</h3>
                        <ul className="flex-col pl-10 list-decimal   flex gap-3">
                            {
                                t.EXPER2.key_takeaways?.map(s =>
                                    <li
                                        className="text-"
                                        key={s}
                                    >
                                        <p className="mt-2 pl-1">{s}</p>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="mt-5">
                            <h3 className="font-medium text-xl">{t.EXPERINCE.CONCLUSION.subtitle}</h3>
                            <p className="mt-2 ml-4">{t.EXPERINCE.CONCLUSION.content}</p>
                        </div>
                    </div>

                    <div className="flex mt-20 w-full max-w-[1100px] pb-10 p-4 flex-col gap-4 pl-2 border-l-2 pl-10">
                        <h1 className="text-3xl font-semibold tracking-tighter">{t.EXPER3.title}</h1>
                        <h2 className="text-lg font-medium mt-4 max-w-[1000px]">{t.EXPER3.introduction}</h2>
                        <p className="text-lg font-medium  mt-2  ">{t.EXPER3.body}</p>

                    </div>
                </>
            }
        </div>
    )
}

export default page
