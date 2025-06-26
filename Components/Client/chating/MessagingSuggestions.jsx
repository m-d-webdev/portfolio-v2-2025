"use client"
import Slider from '@/Components/Global/SliderElems';
import { GetTrans } from '@/lib/server-i18n';
import { ArrowUp, MoveUp } from 'lucide-react';
import React from 'react'
import { useTranslation } from 'react-i18next'
const ASuggestion = ({ text, onClick }) => {
    return <div className='group select-none flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100 duration-100 text-nowrap  bg-accent rounded-xl p-1 px-2 gap-2' onClick={onClick}>
        {text}
        <ArrowUp className='w-0 duration-150 opacity-50 hover:opacity-100 group-hover:w-6 ' />
    </div>
}
const MessagingSuggestions = ({ messages = [], setMessages }) => {
    const { t, i18n } = useTranslation();
    const dict = GetTrans(i18n.language)
    const { after_explanation, closing, during, start } = dict?.CHAT?.SUGGESTIONS || { after_explanation: [], closing: [], during: [], start: [] }
    const messagesLength = messages?.length
    const handleAddMessageFromMe = (m) => {
        setMessages(m);
    }
    return (
        <div className=" overflow-hidden max-w-full w-full">

            <Slider className={" "} >
                {
                    [
                        ...(messagesLength == 0
                            ? start
                            : messagesLength <= 2
                                ? during
                                : messagesLength >= 14
                                    ? closing
                                    : after_explanation
                        )
                    ].map((s, i) => <ASuggestion key={i} onClick={() => handleAddMessageFromMe(s)} text={s} />)
                }
            </Slider>
        </div>
    )
}

export default MessagingSuggestions
