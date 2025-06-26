"use client";
import { Button } from '@/Components/ui/button';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Spinner from '../loaders/Spinner';
import Cookies from 'js-cookie';
import { useChat } from '@/Contexts/ChatProvider';
// import { Router } from "next/router"
const BTN_OPENCHAT = () => {
    const Router = useRouter();
    const [isLoading, setLoading] = useState(false)
    const { t, i18n } = useTranslation();
    const { isChatStarted, setChatStarted } = useChat();
    if (isChatStarted) {

    }
    useEffect(() => {
        const Key = Cookies.get("ChatId") || Date.now();
        if (!Cookies.get("ChatId")) {
            Cookies.set("ChatId", Key);
        }
        if (Cookies.get("isChatStarted")) {
            Router.push(`/contact-me/chat/${Key}`)
        }
    }, []);
    const handleMove = async () => {
        const Key = Cookies.get("ChatId") || Date.now();
        if (!Cookies.get("ChatId")) {
            Cookies.set("ChatId", Key);
        }
        if (!isChatStarted) {
            Cookies.set("isChatStarted", true)
            setChatStarted(true);
        }
        try {
            setLoading(true)
            const res = await fetch("/api/bringToChat", {
                method: "POST"
            }).then(() => {
                Router.push(`/contact-me/chat/${Key}`)
                setLoading(false)

            });

        } catch (error) {

            setLoading(false)

        }

    }
    return (
        <>
            <Button onClick={handleMove} className="w-[200px] gap-3 !py-6 text-xl mt-12  rounded-[7px]  border  text-center font-semibold tracking-tighter flex items-center justify-center" href={`chat/${Date.now()}`}>

                {
                    isLoading
                        ? <Spinner className={"border-t-foreground"} />
                        :
                        <>
                            {
                                t("BUTTONS.start_chat")
                            }
                            {
                                i18n.language == "ar"
                                    ? <MoveLeft />
                                    : <MoveRight />
                            }
                            {

                            }
                        </>
                }
            </Button>
        </>
    )
}

export default BTN_OPENCHAT
