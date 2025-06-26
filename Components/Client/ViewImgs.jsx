import React, { useEffect, useRef, useState } from 'react'
import Dialog from '../Global/Dialog'
import { motion } from 'framer-motion'
import { FramerMotion_Utils } from '@/lib/utils'
import Slider, { SetSliderTransformValue } from '../Global/SliderElems'
import { Button } from '../ui/button'
import { MoveLeft, MoveRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const OneImgContainer = ({ m, setThisIsActive, i, ActiveImage, setWidth }) => {

    const elemRef = useRef()

    return (
        <div ref={elemRef} onClick={() => setThisIsActive(i)} className={`2xl:w-[70lvw]  2xl:h-[85lvh] md:w-[90lvw]  md:h-[80lvh]`}>
            <img draggable={false} src={m} className='max-w-full object-cover mx-h-full rounded-xl' />
        </div>

    )
}


const ViewImgs = ({ imgs = [], onClose }) => {
    const [ActiveImage, setThisIsActive] = useState(0);
    useEffect(() => {
        SetSliderTransformValue(ActiveImage * (window.innerWidth * (window.innerWidth >= 768 ? .71 : .9)))
    }, [ActiveImage]);
    const { i18n } = useTranslation()
    return (
        <Dialog
            onClose={onClose}
            className={"flex  py-4  flex-col items-center justify-center gap-4"}
        >
            <div className="w-full px-8 flex items-center justify-end">
                <Button
                    onClick={onClose}
                >
                    {
                        i18n.language == "ar"
                            ? <MoveLeft />
                            : <MoveRight />
                    }

                </Button>
            </div>
            <motion.div
                initial={FramerMotion_Utils.ShowSlowlly.init}
                exit={FramerMotion_Utils.ShowSlowlly.exit}
                animate={FramerMotion_Utils.ShowSlowlly.anim}
                className="2xl:pl-[15%] select-none md:pl-[5%] max-w-screen scrl_none overflow-auto flex items-start justify-start gap-2 p-2   rounded-2xl"
            >

                <Slider >
                    {
                        imgs.map((m, i) => <OneImgContainer ActiveImage={ActiveImage} setThisIsActive={setThisIsActive} key={i} m={m} i={i} />)
                    }
                </Slider>
            </motion.div>

            <div className="flex relative  ">
                {
                    imgs.map((m, i) =>
                        <div
                            onClick={() => setThisIsActive(i)}
                            key={i} className='relative mr-4 group cursor-pointer flex flex-col items-center justify-center'>
                            <img src={m} className='opacity-0 group-hover:opacity-100 duration-200 bottom-2 rounded group-hover:block w-20 min-w-20 object-cover h-20 absolute group-hover:bottom-10' alt="" />
                            <div src={m} className='opacity-0 sduration-300 bottom-2 rounded group-hover:block w-20 min-w-20 object-cover h-20 bg-white absolute ' alt="" ></div>
                            <div className={`w-[20px] h-[20px] duration-200   ${ActiveImage == i ? "opacity-0 " : "opacity-40"} bg-white rounded-full  `}></div>
                        </div>
                    )
                }

                <div
                    style={{
                        transform: `translateX(${(ActiveImage * 36)}px)`
                    }}
                    className={`absolute w-[20px] h-[20px] duration-400  ease-in   bg-[#0bd064] rounded-full  `}></div>
            </div>
        </Dialog>
    )
}

export default ViewImgs
