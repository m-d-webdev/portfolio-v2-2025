"use client"
import { BriefcaseBusiness, GraduationCap, Home, MessageCircleDashed } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
const getScaleFromValue = (val) => {
    if (val === 0) return 2;
    if (val > 0 && val <= 50) {
        return 2 - (val / 50) * 0.5;
    }
    if (val > 50 && val <= 150) {
        return 1.5 - ((val - 50) / 100) * 0.25;
    }
    if (val > 150 && val <= 200) {
        return 1.25 - ((val - 150) / 50) * 0.25;
    }
    return 0;
};
const ALink = ({ l, MousePosi, active }) => {
    const { i18n } = useTranslation()
    const thisElemRef = useRef();
    const thisElemPosi = useMemo(() => {
        if (MousePosi == 0) return 0
        if (thisElemRef.current) {
            const rect = thisElemRef.current.getBoundingClientRect();
            const distance = Math.abs(MousePosi - (rect.y + 35));
            return getScaleFromValue(distance);
        }
        return 0;
    }, [MousePosi]);



    return <Link
        ref={thisElemRef}
        style={
            MousePosi > 0
                ? {
                    opacity: (thisElemPosi / 2) + .4,
                    width: `${thisElemPosi >= 1 ? thisElemPosi * 50 : 50}px`,
                    height: `${thisElemPosi >= 1 ? thisElemPosi * 50 : 50}px`,
                    // transform: i18n.language == "ar" ? `translateX(-${thisElemPosi * 7}px)` : `translateX(${thisElemPosi * 8}px)`
                }
                : {
                    opacity: .5,
                }
        }
        key={l.key}
        className={`${active
            ? "text-blue-500 " : ""
            }     border-border  !z-10 relative  max-w-[90px] max-h-[90px] w-[50px]  bg-[var(--gray2)] border-2 bg-filter-color group h-[50px] flex items-center justify-center    rounded-full p-3  duration-150    `}

        href={l.href}
    >
        {l.icon}
        <p
            style={{
                opacity: MousePosi > 0 ? thisElemPosi / 2 : 0
            }}
            className={`${i18n.language == "ar" ? "right-[105%]" : "left-[105%]"} text-nowrap absolute text-sm font-semibold bg-foreground  duration-200 text-background  p-1 px-2 rounded-md `}>
            {l.key}
        </p>
    </Link >
}
const Sidebase = () => {
    const { t } = useTranslation();
    const links = [
        {
            key: t("LINKS.HOME"),
            href: "/",
            icon: <Home className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70 stroke-1  w-[60%] h-[60%]"} />
        },
        {
            key: t("LINKS.EXPERINCE"),
            href: "my-experiences",
            icon: <BriefcaseBusiness className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} />
        },
        {
            key: t("LINKS.WORKS"),
            href: "my-projects",
            icon: <svg className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4"></path> <path d="M20 21l2 -2l-2 -2"></path> <path d="M17 17l-2 2l2 2"></path> </svg>
        },
        {
            key: t("LINKS.ME"),
            href: "me",
            icon: <svg className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path> <path d="M19 22v.01"></path> <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path> </svg>
        },
        {
            key: t("LINKS.CONTACT"),
            href: "contact-me",
            icon: <svg className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path> <path d="M3 7l9 6l9 -6"></path> <path d="M19 16l-2 3h4l-2 3"></path> </svg>
        },
        {
            key: t("LINKS.EDUCATION"),
            href: "education",
            icon: <GraduationCap className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} />
        },
        {
            key: t("LINKS.COMMENTS"),
            href: "comments",
            icon: <MessageCircleDashed className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} />
        },
        {
            key: t("LINKS.GAME"),
            href: "game",
            icon: <svg className={"min-w-5 min-h-5 group-hover:stroke-2 group-hover:text-blue-500  duration-200 opacity-70  stroke-1 w-[60%] h-[60%]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.5}> <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75"></path> <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z"></path> <path d="M12 7l0 6"></path> </svg>
        },
    ];
    const [MousePosi, setMousePosi] = useState(null);
    const HnadelMouseMove = e => {
        setMousePosi(e.clientY);
    }

    const pathName = usePathname();
    const currentPahtName = pathName.split("/")[2] ?? "/";

    return (
        <div className="h-full   pl-8 flex min-w-[6%] justify-center items-center">

            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                onMouseMove={HnadelMouseMove}
                onMouseLeave={() => setMousePosi(0)}
                className='bg-background  duration-400 max-w-[70px] border-4 border-secondary rounded-4xl     p-2 py-5 gap-3 flex flex-col justify-center items-center '>
                {
                    links.map(
                        l => <ALink active={currentPahtName == l.href} MousePosi={MousePosi} l={l} key={l.key} />
                    )
                }
            </motion.div>

        </div>
    )
}

export default Sidebase
