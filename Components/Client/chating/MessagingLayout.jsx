"use client";
import React, { useState } from 'react'
import ChatsLst from './ChatsLst'
import MessagingInput from './MessagingInput'
import ChatProvider, { useChat } from '@/Contexts/ChatProvider';

const MessagingLayout = ({ lang, id }) => {


    return (
        <ChatProvider userName={id}>

            <div className='h-full  w-full max-w-[1200px] flex flex-col items-center justify-between'>
                <ChatsLst id={id} />
                <MessagingInput id={id} />
            </div>
        </ChatProvider>
    )
}

export default MessagingLayout
