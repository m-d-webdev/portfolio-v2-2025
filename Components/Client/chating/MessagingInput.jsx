"use client";
import { Input } from '@/Components/ui/input';
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MessagingSuggestions from './MessagingSuggestions';
import { Button } from '@/Components/ui/button';
import { useChat } from '@/Contexts/ChatProvider';


const MessagingInput = ({ id }) => {

    const { data, setData: setMessages, io } = useChat();
    const messages = data[id]?.messages ?? [];
    const { t } = useTranslation();
    const [myMessage, setmyMessage] = useState("");
    const btnRef = useRef();
    const inpRef = useRef();
    const handleKeyDown = e => {

        if (/^[ -~]$/.test(e.key)) { inpRef.current?.focus() };

        if (e.key == "Enter") {
            // handleAddMessageFromMe();
            btnRef.current?.click();
        }


    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);

        }
    }, []);


    const handleAddMessageFromMe = () => {
        if (myMessage == "") return;
        const message = {
            createdAt: Date.now(),
            content: myMessage,
            mine: false,
            from: id
        };

        io && io.emit("MessageToMutapha", message);


        setMessages(pv => ({
            ...pv,
            [id]:
                pv[id]
                    ? {
                        fullName: pv[id].fullName,
                        messages: [
                            ...pv[id].messages,
                            message
                        ]
                    }
                    : {
                        fullName: "Rocrutor --",
                        messages: [message]
                    }


        }
        ));
        setmyMessage("")
    };
    const handleAddSuggestionMessageFromMe = (m) => {

        const message = {
            createdAt: Date.now(),
            content: m,
            mine: false,
            from: id
        };

        io && io.emit("MessageToMutapha", message);


        setMessages(pv => ({
            ...pv,
            [id]:
                pv[id]
                    ? {
                        fullName: pv[id].fullName,
                        messages: [
                            ...pv[id].messages,
                            message
                        ]
                    }
                    : {
                        fullName: "Rocrutor --",
                        messages: [message]
                    }


        }
        ));
        setmyMessage("")
    };




    return (
        <div className='p-2 flex flex-col items-center justify-center w-10/12 '>
            <MessagingSuggestions messages={messages} setMessages={(m) => handleAddSuggestionMessageFromMe(m)} />
            <div className="w-full flex mt-2 items-center justify-center gap-3">
                <input
                    ref={inpRef}
                    value={myMessage}
                    onChange={e => setmyMessage(e.target.value)}
                    placeholder={t("CHAT.INPUT_LABEL")}
                    className='text-base p-2 px-4 rounded-[20px] outline-none tracking-tight font-semibold w-10/12 border '
                />

                <button
                    ref={btnRef}
                    onClick={handleAddMessageFromMe}
                    disabled={myMessage.length == 0}
                    className='cursor-pointer disabled:opacity-60'
                >
                    <svg aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default MessagingInput
