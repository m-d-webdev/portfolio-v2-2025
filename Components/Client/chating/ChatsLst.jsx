"use client"
import React, { useEffect, useState, useRef } from 'react'
import MyMessage from './MyMessage';
import MateMessage from './MateMessage';
import { useTranslation } from 'react-i18next';
import { GetTrans } from '@/lib/server-i18n';
import { useChat } from '@/Contexts/ChatProvider';
import Spinner from '../loaders/Spinner';
import { t } from 'i18next';
import { TreePalm } from 'lucide-react';

const ChatsLst = ({ id }) => {

    const { data, isMustaphaConnected } = useChat();
    const listTRef = useRef();
    const { i18n } = useTranslation();
    const dict = GetTrans(i18n.language);

    const [MateImage, setMateImage] = useState("https://i.pinimg.com/736x/07/fb/34/07fb3452c4640d881a16d08c2e314f3e.jpg")
    useEffect(() => {

        listTRef.current?.scrollTo({ top: listTRef.current?.scrollHeight, behavior: "smooth" })

    }, [data[id]?.messages]);

    return (
        <div className='  h-full max-h-full overflow-auto scrl_none  w-full flex flex-col   items-start justify-start '>

            <div  className="w-full sticky  flex items-center justify-end">
                <div className='flex gap-2 bg-background p-1 px-2 items-center justify-center'>{
                    isMustaphaConnected
                        ? <>
                            <h1 className='text-green-500 font-medium '>
                                {dict?.CHAT?.WELCOMING?.THANKFORWAITING}
                            </h1>
                            <TreePalm className='text-green-400' />
                        </>
                        : <>
                            <h1 className=' font-medium opacity-70'>
                                {dict?.CHAT?.WELCOMING?.WAITFORME}
                            </h1>
                            <Spinner className={"!w-[20px] !h-[20px] border-t-foreground "} />
                        </>
                }</div>

            </div>
            <div ref={listTRef} className='  h-full max-h-full overflow-auto scrl_none px-4 w-full flex flex-col  gap-3 items-start justify-start '>

                {
                    !data[id]?.messages &&
                    <div className="w-full flex-col  gap-2 items-center justify-center h-100 flex">
                        <img src="/media/image-removebg-preview (1).png" className='w-40' alt="" />
                        <h1 className='text-2xl font-semibold'>
                            {
                                dict?.CHAT?.WELCOMING?.title

                            }
                        </h1>
                        <ul >

                            {

                                dict?.CHAT?.WELCOMING?.paragraphs?.map(p => <li className='text-center  font-medium max-w-[600px] mt-2' key={p}>{p}</li>)
                            }
                        </ul>
                    </div>
                }


                {
                    data[id]?.messages?.map((m, i) =>
                        m.mine
                            ? <MyMessage key={i} message={m} />
                            : <MateMessage MateImage={MateImage} setMateImage={setMateImage} message={m} key={i} />
                    )
                }


            </div>
        </div>
    )
}

export default ChatsLst
