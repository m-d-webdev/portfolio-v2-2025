"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Copy } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'

const ButtonCopy = ({ text }) => {
    const { t } = useTranslation()
    const [isCopied, setCopied] = useState(false)
    const handleCopierText = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    }


    useEffect(() => {

        const timeOu = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => {
            clearTimeout(timeOu)
        }
    }, [isCopied]);
    return (
        <div className='relative flex items-center justify-center'>
            <Button disabled={!text} onClick={handleCopierText} size={"icon"} className={"cursor-pointer opacity-70"}>
                <Copy className="w-4 h-4" />
            </Button>
            {
                isCopied &&
                <>
                    <motion.span
                        className=' select-none -rotate-6 text-nowrap  font-bold opacity-70 cursor-pointer absolute'
                        onClick={handleCopierText}
                        animate={{
                            top: [5, Math.random() * 40 - 20],
                            left: [5, Math.random() * 40 - 20],
                            // opacity: [1, 0],
                            transition: {
                                duration: .4,
                            }
                        }}

                    >
                        {t('COMMON.COPIED')}
                    </motion.span>
                    {
                        Array(10).fill().map((a, i) =>
                            <motion.span
                                key={i}
                                className='text-[#3fffbf] select-none cursor-pointer absolute'
                                onClick={handleCopierText}
                                animate={{
                                    top: [10, Math.random() * 100 - 40],
                                    left: [10, Math.random() * 100 - 40],
                                    opacity: [1, 0],
                                    transition: {
                                        duration: .9
                                    }
                                }}

                            >
                                *
                            </motion.span>
                        )}
                </>

            }
        </div >
    )
}

export default ButtonCopy
