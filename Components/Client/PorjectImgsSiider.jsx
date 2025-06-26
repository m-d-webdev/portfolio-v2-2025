"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import ViewImgs from './ViewImgs';
import { AnimatePresence } from 'framer-motion';

const PorjectImgsSlider = ({ data, lang }) => {
    const { t } = useTranslation();
    const [imgSliderOpen, setimgSliderOpen] = useState(false);
    return (
        <div className="flex    relative  group border-border !w-[20%] flex-col gap-4  max-h-[600px] scrl_none rounded-xl  overflow-y-auto overflow-x-hidden bg-[var(--gray3)] p-3  ">
            <div className='sticky z-10  items-center duration-200 justify-center left-0 -top-2 flex   w-full'>
                <Button onClick={() => setimgSliderOpen(true)} className={' hidden group-hover:flex top-0'}>
                    {t("BUTTONS.open_all")}
                </Button>
            </div>
            {
                data.map((m, i3) =>
                    <div key={i3} className="group/inner  border  w-full relative  border-border drop-shadow-md  bg-background   md:min-h-[180px]   rounded-md overflow-hidden cursor-pointer">
                        {
                            m.type == "image"
                                ? <Image src={m.src} alt='iderkaoui mustapha projects' width={200} height={180} className="w-full min-h-full  border  h-[180px] object-cover rounded-md" />
                                : <video src={m.src} className="w-full  min-h-full h-[180px] border   object-cover rounded-md" />
                        }
                        <span className="absolute bg-gradient-to-t group-hover/inner:h-auto  p-1 px-4 group-hover/inner:opacity-100 from-foreground to-transparent h-0 opacity-0 duration-200 bottom-0 left-0 w-full text-center text-background font-medium pt-5">{m.caption[lang]} </span>
                    </div>

                )
            }
            <AnimatePresence>
                {
                    imgSliderOpen &&
                    <ViewImgs onClose={() => setimgSliderOpen(false)} imgs={data.map(m => m.src)} />
                }
            </AnimatePresence>

        </div>
    )
}

export default PorjectImgsSlider
