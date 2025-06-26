import ListFriends from '@/Components/Client/chating/IderkaouiSpace/ListFriends';
import ChatProvider from '@/Contexts/ChatProvider';
import React from 'react'

const CHATCODE = process.env?.CHATCODE;
const layout = async ({ children, params }) => {
    const { code, id } = await params;

    if (code != CHATCODE) return <div><h1>INVALIDE CODE</h1></div>;

    return (
        <div >
            <ListFriends chatId={id} />
            {children}
        </div>
    )
}

export default layout
