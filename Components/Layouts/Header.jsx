"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button';
import { motion, AnimatePresence, useInstantTransition } from 'framer-motion'
import { FramerMotion_Utils } from '@/lib/utils';
import { getLocaleFromPathname, locales } from '@/lib/server-i18n';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ContactIcon, Github, Languages, Moon, Sparkles, Sun } from 'lucide-react';
import { ExperienceIcon, HomeIcon, ProjectsIcon } from '../ui/icons';
import VerticalListCursorHover from '../Global/VerticalListCursorHover';


export const Bulb = () => {
    return (

        <svg aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            className='stroke-foreground'
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"

        >
            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
            <path d="M9.7 17l4.6 0" />
        </svg>

    )
}
const ButtonLang = () => {
    const { i18n } = useTranslation();
    const [MenuOpen, setMenuOpen] = useState(false)
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            setMenuOpen(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [MenuOpen]);
    let Pathname = usePathname();
    let pathname = Pathname.split("/");
    pathname = pathname[2] ?? ""
    const [lang, setLang] = useState(getLocaleFromPathname(Pathname))
    useEffect(() => {
        getLocaleFromPathname(Pathname)
    }, [Pathname])

    return (
        <div className='relative  duration-150  flex-col z-10 flex items-center justify-center'>

            <Button
                onClick={() => setMenuOpen(true)}
                size={"sm"}
                className={"px-4 flex gap-1 "}
            >
                <Languages />
                <span className='px-2'>

                    {lang}
                </span>
            </Button>

            <AnimatePresence >
                {
                    MenuOpen &&
                    <motion.div
                        ref={PageRef}
                        initial={FramerMotion_Utils.down.init}
                        exit={FramerMotion_Utils.down.exit}
                        animate={FramerMotion_Utils.down.anim}

                        className="absolute flex  !z-10  w-[150px] flex-col not-last: gap-1 top-6  p-4 rounded-xl bg-primary-foreground drop-shadow-xl">
                        {
                            locales.map(l =>
                                <Link
                                    className='w-full  font-medium text-foreground hover:text-background text-center rounded-md duration-200 hover:bg-primary p-1  hover:opacity-100  hover:font-medium opacity-70'
                                    key={l}
                                    href={`/${l}/${pathname}`}
                                >
                                    {l == "en"
                                        ? "English"
                                        :
                                        l == "fr"
                                            ? "Français"
                                            : "العربية "
                                    }
                                    {

                                    }
                                </Link>
                            )
                        }
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    )
}


const ButtonLightDarkMode = () => {
    let defaultTheme;
    const { i18n } = useTranslation()
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        defaultTheme = localStorage?.getItem('theme');
        if (!defaultTheme && window?.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark")
        }
        else if (defaultTheme) {
            setTheme(defaultTheme)
        }
    }, [])



    useEffect(() => {
        if (typeof localStorage != "undefined") {
            if (theme == null) return;
            defaultTheme = localStorage?.setItem('theme', theme == "dark" ? "dark" : "light");
        }
        document.documentElement.className = theme == "dark" ? "dark" : ""
    }, [theme])
    return <div
        onClick={() => setTheme(pv => pv == "dark" ? "light" : "dark")}
        className="p-1   flex w-[90px] relative  items-center gap-4 bg-accent rounded-4xl">
        <Button
            size={"/icon"}
            variant={"asd"}
            className={`rounded-full !py-1 !px-1  flex items-center justify-center 
                  duration-400 cursor-pointer bg-background
                ${theme == "dark" ? `${i18n.language == "ar" ? "translate-x-[-48px]" : "translate-x-[48px]"} rotate-[360deg]` : "translate-x-[0px]"}
                `}
        >
            {

                theme == "dark"
                    ? < Moon className='!w-5 !h-5' />
                    : <Sun className='!w-5  !h-5' />
            }
        </Button>
    </div >
}

const Header = () => {

    const { t } = useTranslation();

    const links = [
        {
            key: t("LINKS.HOME"),
            href: "/",
        },
        {
            key: t("LINKS.EXPERINCE"),
            href: "/my-experiences",
        },
        {
            key: t("LINKS.WORKS"),
            href: "/my-projects",
        },
        {
            key: t("LINKS.CONTACT"),
            href: "/contact-me",
        },
        {
            key: t("BUTTONS.live_chat"),
            href: "/contact-me/chat",
            icon: <Sparkles className='w-4 h-4' />
        },
    ];


    const pathName = usePathname();
    let currentPahtName = pathName.split("/")[2] ?? "/";
    if (pathName.split("/")[3] == "chat") { currentPahtName = "contact-me/chat" }
    return (
        <div className='w-full  px-3 flex  justify-evenly items-center pt-2   '>
            <div className="flex  items-center justify-center gap-8">
                <Link href={"/"}>
                    <Bulb />
                </Link>
                <VerticalListCursorHover parentClassName='gap-4'>
                    {
                        links.map(
                            l => <Link
                                className={` flex items-center gap-2 font-semibold tracking-tighter ${(`/${currentPahtName}` == l.href || (currentPahtName == "/" && l.href == "/")) ? "text-blue-500" : "opacity-50"} hover:opacity-100 duration-150 `}
                                href={l.href} key={l.key}>{l.key}
                                {
                                    React.isValidElement(l.icon) ? l.icon : null
                                }
                            </Link>
                        )
                    }
                </VerticalListCursorHover>
                {/* <div className="flex relative border border-black items-center justify-center gap-4"> */}

                {/* <span className='bg-foreground absolute p-[2px] w-[20px]'></span> */}
                {/* </div> */}
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className="flex mx-8  npm gap-5 items-center">
                <ButtonLang />
                <ButtonLightDarkMode />
                <a target='_blank' href='https://github.com/m-d-webdev'
                >
                    <Github className='cursor-pointer  duration-150' />
                </a>
            </div>
        </div >
    )
}

export default Header
