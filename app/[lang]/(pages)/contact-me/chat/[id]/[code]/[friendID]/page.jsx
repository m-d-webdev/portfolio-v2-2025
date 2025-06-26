import ChatsLst from "@/Components/Client/chating/ChatsLst";
import MessagingInputForMustapha from "@/Components/Client/chating/MessagingInputForMustapha";

const page = async ({ params }) => {
    const { friendID } = await params;
    return (
        <div className="w-full h-[91vh] flex-col flex gap-3 ">

            <ChatsLst id={friendID} />
            <MessagingInputForMustapha id={friendID} />
        </div>
    )
}

export default page
