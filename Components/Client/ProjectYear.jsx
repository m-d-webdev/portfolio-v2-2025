"use client";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
const A_character = ({ l, i }) => {
    const [isWatingForItsTurn, setCurNumber] = useState(false);
    useEffect(() => {
        let InterMelan = setTimeout(() => {
            setCurNumber(true)



        }, i * 1200);
        return () => {
            clearTimeout(InterMelan);
        }
    }, [])
    return <>

        <div className="flex flex-col justify-center items-center relative overflow-hidden">
            {
                isWatingForItsTurn
                    ? <>
                        {
                            ...Array(10).fill().map(
                                (asd, num) => {
                                    return <motion.span
                                        initial={{ y: 100, opacity: 1 }}
                                        animate={

                                            {
                                                y: -100,
                                                opacity: 1,
                                                transition: {
                                                    delay: num * .1,
                                                    duration: 1.2,
                                                    type: "spring",
                                                    // bounce: true,
                                                    // bounceStiffness: 20,
                                                    // damping: true,
                                                }
                                            }}
                                        className={` absolute text-6xl opacity-70 font-bold`
                                        } >
                                        {num}
                                    </motion.span >

                                }
                            )
                        }
                        <motion.span
                            initial={{ y: 100, opacity: 1 }}
                            animate={

                                {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 10 * .1,
                                        duration: 1.2,
                                        type: "spring",
                                        // bounce: true,
                                        // bounceStiffness: 20,
                                        // damping: true,
                                    }
                                }}
                            className={`text-6xl opacity-70 font-bold`
                            } >
                            {l}
                        </motion.span >
                    </>

                    :
                    <span

                        className={`text-6xl opacity-70 font-bold`
                        } >
                        0
                    </span >
            }
        </div>


    </>
}

const ProjectYear = ({ year, lang }) => {
    return (
        <div className={`  h-full   w-[65px]     overflow-hidden  flex items-center justify-center `}>

            <div className={`relative    ${lang == "ar" ? "rotate-90 flex-row-reverse" : "-rotate-90"}       flex items-center justify-center`}>
                {
                    year.split("").map((l, i) => <A_character l={l} i={i} key={i} />)
                }
                <span span className="absolute bg-gradient-to-t from-background to-transparent h-[50px] bottom-0 left-0  w-full"></span>

            </div>

        </div >
    )
}

export default ProjectYear
