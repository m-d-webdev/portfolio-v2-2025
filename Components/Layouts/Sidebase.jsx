"use client"
import { BriefcaseBusiness, GraduationCap, Home, MessageCircleDashed } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
import { CoderIcon, ConsoleIcon, ContactIcon, EducationIcon, ExperienceIcon, HomeIcon, ProjectsIcon, TestimonialIcon } from '../ui/icons';
import { Button } from '../ui/button';
import { pa9 } from '../Global/MyToas';
import { MyButton } from '../Global/ExpandToast';
const getScaleFromValue = (val) => {

    const maxRange = 400;
    const clamped = Math.min(Math.abs(val), maxRange);
    return 40 - (clamped / maxRange) * 40;

};
const ALink = ({ l, MousePosi, active }) => {
    const { i18n } = useTranslation()
    const thisElemRef = useRef();
    const thisElemPosi = useMemo(() => {
        if (MousePosi == 0) return 0
        if (thisElemRef.current) {
            const rect = thisElemRef.current.getBoundingClientRect();
            const distance = Math.abs(MousePosi - (rect.x + 20));
            return getScaleFromValue(distance);
        }
        return 0;
    }, [MousePosi]);

    return <Link
        ref={thisElemRef}
        style={
            MousePosi > 0
                ? {
                    opacity: (thisElemPosi / 10) + .1,
                    width: `${thisElemPosi * 2}px`,
                    height: `${thisElemPosi * 2}px`,
                    transform: `translateY(-${(thisElemPosi * 1.5 - (thisElemPosi))}px)`
                }
                : {}
        }
        key={l.key}
        className={`${active
            ? "text-blue-500 " : ""
            }     border-border  !z-10 relative min-w-[30px] min-h-[30px]  w-[50px]    bg-background border-2 bg-filter-color group h-[50px] flex items-center justify-center    rounded-full p-3  duration-200    `}

        href={l.href}
    >
        {l.icon}
        <span
            className={`group-hover:bottom-[105%] bottom-[90%] opacity-0 group-hover:opacity-100 text-nowrap absolute text-sm font-semibold bg-foreground  duration-300 text-background  p-1 px-2 rounded-md `}>
            {l.key}
        </span>
    </Link >
}
const Sidebase = () => {
    const { t } = useTranslation();
    const links = [
        {
            key: t("LINKS.HOME"),
            href: "/",
            icon: <HomeIcon className={"  group-hover:text-blue-500  duration-200 opacity-70 stroke-2  w-[80%] h-[80%]"} />
        },
        {
            key: t("LINKS.EXPERINCE"),
            href: "/my-experiences",
            icon: <ExperienceIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        },
        {
            key: t("LINKS.WORKS"),
            href: "/my-projects",
            icon: <ProjectsIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        },
        // {
        //     key: t("LINKS.ME"),
        //     href: "me",
        //     icon: <CoderIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        //     // icon: <svg className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[70%] h-[70%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path> <path d="M19 22v.01"></path> <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483">8/path> 10/s8>
        // },
        {
            key: t("LINKS.CONTACT"),
            href: "/contact-me",
            icon: <ContactIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
            // icon: <svg className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[70%] h-[70%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path> <path d="M3 7l9 6l9 -6"></path> <path d="M19 16l-2 3h4l-2 3">8/path> 10/s8>
        },
        // {
        //     key: t("LINKS.EDUCATION"),
        //     href: "education",
        //     icon: <EducationIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        // },
        // {
        //     key: t("LINKS.COMMENTS"),
        //     href: "comments",
        //     icon: <TestimonialIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        // },
        // {
        //     key: t("LINKS.GAME"),
        //     href: "game",
        //     icon: <ConsoleIcon className={" group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[80%] h-[80%]"} />
        // },
    ];
    const [MousePosi, setMousePosi] = useState(null);
    const HnadelMouseMove = e => {
        setMousePosi(e.clientX);
    }

    const pathName = usePathname();
    const currentPahtName = pathName.split("/")[2] ?? "/";
    const isItChatPage = pathName.split("/")?.length == 5 && pathName.split("/")[3] === "chat";


    return (
        <div className={`${isItChatPage
            ? ' flex fixed  left-4   top-0 h-lvh !z-50 justify-center items-center'
            : ' flex fixed w-full bottom-5 !z-50 justify-center items-center'
            }`} >

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                onMouseMove={HnadelMouseMove}
                onMouseLeave={() => setMousePosi(0)}
                style={{
                    filter: "drop-shadow(0px 10px 10px var(--filter-color))"
                }}
                className={` ${isItChatPage ?
                    "flex  bg-[var(--bg-wh)] flex-col gap-2 rounded-4xl p-2"
                    : "bg-[var(--bg-wh)]  max-h-[60px]    rounded-4xl  w-auto   p-2  gap-3 flex flex-row justify-center items-center"}`}>
                {
                    links.map(
                        l => <ALink active={currentPahtName == l.href} MousePosi={MousePosi} l={l} key={l.key} />
                    )
                }


            </motion.div >

        </div >
    )
}

export default Sidebase
