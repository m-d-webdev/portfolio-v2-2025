"use client";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FramerMotion_Utils } from '@/lib/utils';
import { Menu } from 'lucide-react';

const MenuHeader = ({ links, currentPahtName }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            setMenuOpen(false)
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setMenuOpen(false)
    }, [currentPahtName])
    return (
        <div className="relative xl:hidden  p-2">
            <AnimatePresence>

                {
                    isMenuOpen &&

                    <motion.div
                        ref={PageRef}
                        className='w-[200px] pt-10 bg-background gap-2 flex flex-col items-start justify-start z-20 absolute p-4 rounded-md'
                        style={{
                            filter: "drop-shadow( 0 0 6px var( --filter-color))"
                        }}
                        initial={FramerMotion_Utils.down.init}
                        animate={FramerMotion_Utils.down.anim}
                        exit={FramerMotion_Utils.down.exit}
                    >
                        {
                            links.map(
                                l => <Link
                                    className={`py-1 flex w-full hover:translate-x-1.5 xl:hidden items-center gap-2 font-semibold tracking-tighter ${(`/${currentPahtName}` == l.href || (currentPahtName == "/" && l.href == "/")) ? "text-blue-500" : "opacity-50"} hover:opacity-100 duration-150 `}
                                    href={l.href} key={l.key}>{l.key}
                                    {
                                        // React.isValidElement(l.icon) ? l.icon : null
                                    }
                                </Link>
                            )
                        }
                    </motion.div >
                }
            </AnimatePresence>

            <Menu className='cursor-pointer' onClick={() => setMenuOpen(true)} />
        </div>
    )
}

export default MenuHeader
