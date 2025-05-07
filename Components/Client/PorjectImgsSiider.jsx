"use client";
import Image from 'next/image';
import React from 'react'

const PorjectImgsSlider = ({ data, lang }) => {
    return (
        <div className="flex  border border-border !w-[20%] flex-col gap-4  max-h-[600px] scrl_none rounded-xl  overflow-y-auto overflow-x-hidden bg-[var(--gray3)] p-3  ">
            {
                data.map((m, i3) =>
                    <div key={i3} className="group border  w-full relative  border-border drop-shadow-md  bg-background   md:min-h-[180px]   rounded-md overflow-hidden cursor-pointer">
                        {
                            m.type == "image"
                                ? <Image src={m.src} alt='iderkaoui mustapha projects' width={200} height={180} className="w-full min-h-full  border  h-[180px] object-cover rounded-md" />
                                : <video src={m.src} className="w-full  min-h-full h-[180px] border   object-cover rounded-md" />
                        }
                        <span className="absolute bg-gradient-to-t group-hover:h-[60px] group-hover:opacity-100 from-foreground to-transparent h-0 opacity-0 duration-200 bottom-0 left-0 w-full text-center text-background font-medium pt-5">{m.caption[lang]} </span>
                    </div>

                )
            }


        </div>
    )
}

export default PorjectImgsSlider
