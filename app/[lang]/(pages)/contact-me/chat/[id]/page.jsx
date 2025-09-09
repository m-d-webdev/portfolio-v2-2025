import MessagingLayout from "@/Components/Client/chating/MessagingLayout";

const page = async ({ params }) => {
    const { lang, id } = await params;
    return (
        <div className={`h-[88vh] w-full flex items-center justify-center  ${lang == "ar" ?"pr-25":"pl-25"}`}>
            <MessagingLayout id={id} lang={lang} />
        </div>
    )
}

export default page
