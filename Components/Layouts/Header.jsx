"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button';
import { motion, AnimatePresence, useInstantTransition } from 'framer-motion'
import { FramerMotion_Utils } from '@/lib/utils';
import { getLocaleFromPathname, locales } from '@/lib/server-i18n';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Github, Moon, Sun } from 'lucide-react';

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
        <div className='relative flex-col flex items-center justify-center'>

            <Button
                onClick={() => setMenuOpen(true)}
                size={"sm"}
                className={"px-4"}
            >
                {lang}
            </Button>

            <AnimatePresence >
                {
                    MenuOpen &&
                    <motion.div
                        ref={PageRef}
                        initial={FramerMotion_Utils.down.init}
                        exit={FramerMotion_Utils.down.exit}
                        animate={FramerMotion_Utils.down.anim}

                        className="absolute flex   w-[150px] flex-col not-last: gap-1 top-6  p-4 rounded-xl bg-primary-foreground drop-shadow-xl">
                        {
                            locales.map(l =>
                                <Link
                                    className='w-full  font-medium text-foreground hover:text-background text-center rounded-xl hover:bg-primary p-1 duration-150 hover:opacity-100  hover:font-medium opacity-70'
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
        className="p-1 px-3  flex w-[95px] relative  items-center gap-4 bg-accent rounded-4xl">
        <Button
            size={"/icon"}
            variant={"asd"}
            className={`rounded-full !py-2 !px-2  flex items-center justify-center 
                  duration-400 cursor-pointer bg-background

                ${theme == "dark" ? `${i18n.language == "ar" ? "translate-x-[-40px]" : "translate-x-[40px]"} rotate-[360deg]` : "translate-x-[0px]"}
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
    return (
        <div className='w-full flex gap-20 justify-end items-center h-[10vh]  '>
            <div className="flex npm gap-8 items-center">
                <ButtonLang />
                <ButtonLightDarkMode />
                <a target='_blank' href='https://github.com/m-d-webdev'
                >
                    <Github className='cursor-pointer hover:opacity-70 duration-150' />
                </a>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Header
