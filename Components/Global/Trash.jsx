"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import TrashLottie from '../lotties/Trash';
export let setMouseDownOnAToast;
const Trash = () => {
    const [isVisible, setVisible] = useState(false);
    setMouseDownOnAToast = (isTrue = true) => {
        setVisible(isTrue);
    }
    return (
        <>
            <AnimatePresence>
                {
                    isVisible &&
                    <motion.div
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        exit={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}

                        className={`fixed z-[9998]  bottom-5 left-1/2 -translate-x-1/2  items-center justify-center flex`}>
                        <div className="p-[10px] rounded-full bg-[#ffcdcd47]">
                            <div className="p-[8px] rounded-full bg-[#ffcdcd73]">
                                <div className="p-8 rounded-full bg-[#ffbbbb88]">
                                    <Trash2 className='w-20 h-20 stroke-[1.5] text-[#ff0000]' />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>

    )
}

export default Trash
