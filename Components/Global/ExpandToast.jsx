"use client";
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, CircleAlert, CircleCheck } from 'lucide-react';
import { Button } from '../ui/button';


export let MyButton = ({ children, className, ...props }) => {
    return <button
        // style={{
        // background: "#2A7B9B",
        // background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)',
        // background: "#abffcb",
        // background: " linear-gradient(90deg, rgba(171, 255, 203, 1) 0%, rgba(0, 252, 135, 1) 50%, rgba(0, 173, 87, 1) 100%)"
        //     background: " #198042",
        //     background: " linear-gradient(90deg, rgba(25, 128, 66, 1) 0%, rgba(0, 252, 135, 1) 50%, rgba(89, 255, 153, 1) 100%)",
        // }}
        className={`${className} p-2 px-3  border  cursor-pointer shadow  rounded-[10px] font-bold tracking-tighter`} {...props}>
        {children}
    </button>
}


const ExpandToast = ({ expandData, onClose }) => {

    const { title, message, type, buttons, pop_it_directly } = expandData.messageData;

    const { top, left, width, height } = expandData.position
    const PageRef = useRef();

    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='fixed  duration-150 flex !z-[9999] items-center justify-center  w-full h-full top-0 left-0 bg-[#00000062]'>
            <motion.div
                initial={
                    pop_it_directly
                        ? {
                            top: window.innerHeight / 2,
                            left: window.innerWidth / 2,
                            // width: width - 100,
                            // height: height - 100
                            scale: .7
                        }
                        : {
                            top,
                            left,
                            width: width - 100,
                            height
                        }
                }

                exit={{
                    scale: 0,
                    transform: `translate(-50% ,-40%)`,
                    opacity: 0,
                }}

                animate={{
                    top: window.innerHeight / 2,
                    left: window.innerWidth / 2,
                    transform: `translate(-50% ,-50%)`,
                    width: 600,
                    height: "auto",
                    scale:1
                }}

                ref={PageRef} className="p-2 border  max-h-[90vh] pb-4 overflow-auto  gap-4 flex items-center flex-col justify-start fixed bg-background scrl_none rounded-[10px]">

                {
                    type == "success"
                        ? <div className='p-4  rounded-full bg-[#cfffea88]'><Check className='w-14 h-14   bg-[#00ff91] p-2 rounded-full text-white stroke-3' /></div>
                        : null
                }
                {
                    title && <h1 className='text-center tracking-tighter  text-xl font-semibold'>{title}</h1>
                }
                {
                    message && <div className=' border p-2 rounded-[7px] bg-secondary/50  w-full'>
                        <div className='text-center whitespace-pre-line    font-medium'>{message}</div>
                    </div>
                }
                {
                    buttons && Array.isArray(buttons) && buttons.length > 0 &&
                    <div className="flex mt-4 gap-1 items-center justify-center flex-wrap">
                        {
                            buttons.map((button, i) => {


                                if (React.isValidElement(button)) return button;

                                const props = (button.props && button.props instanceof Object)
                                    ? button.props
                                    : ({
                                        className:
                                            button.className ??
                                            'border p-2 px-3  rounded box-shadow ',
                                        onClick: button.onClick
                                            ? button.onClick
                                            : () => onClose(),
                                    });
                                return <button key={i} {...props}>{button.label ?? "Click Me"}</button>
                            })
                        }
                    </div>
                }
                {
                    !(buttons && Array.isArray(buttons) && buttons.length > 0) &&
                    <div className="flex mt-4 gap-1 items-center justify-center">
                        <MyButton onClick={onClose} className={" w-[120px]"}>
                            Ok
                        </MyButton>
                    </div >
                }
            </motion.div >
        </div >
    )
}

export default ExpandToast
