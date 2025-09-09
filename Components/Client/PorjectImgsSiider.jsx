"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import ViewImgs from './ViewImgs';
import { AnimatePresence } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

const PorjectImgsSlider = ({ data, lang }) => {
    const { t } = useTranslation();
    const [imgSliderOpen, setimgSliderOpen] = useState(false);
    return (
        <div className="flex flex-col xl:!w-[30%] w-full max-w-[600]   ">
            <div className="flex   0 relative  group border-border  flex-col w-full  gap-4  xl:max-h-[600px] max-h-[700px] scrl_none rounded-xl  overflow-y-auto overflow-x-hidden bg-[var(--gray3)]   ">

                {
                    data.map((m, i3) =>
                        <div key={i3} className="group/inner  border  w-full relative  border-border drop-shadow-md  bg-background   xl:min-h-[250px] min-h-[280px]  rounded-md overflow-hidden cursor-pointer">
                            {
                                m.type == "image"
                                    ? <img src={m.src} alt='iderkaoui mustapha projects'  className="w-full   border    object-cover rounded-md !h-auto" />
                                    : <video src={m.src} className="w-full  min-h-full xl:h-[180px] h-[280px] border   object-cover rounded-md" />
                            }
                            <span className="absolute bg-gradient-to-t group-hover/inner:h-auto  p-1 px-4 group-hover/inner:opacity-100 from-foreground to-transparent h-0 opacity-0 duration-200 bottom-0 left-0 w-full text-center text-background font-medium pt-5">{m.caption[lang]} </span>
                        </div>

                    )
                }
            </div>

            <AnimatePresence>
                {
                    imgSliderOpen &&
                    <ViewImgs onClose={() => setimgSliderOpen(false)} imgs={data.map(m => m.src)} />
                }
            </AnimatePresence>

            <Button onClick={() => setimgSliderOpen(true)} className={' w-full   mt-1 text-background hover:text-foreground bg-foreground top-0'}>
                <SquareArrowOutUpRight />
                {t("BUTTONS.open_all")}
            </Button>
        </div>
    )
}

export default PorjectImgsSlider
