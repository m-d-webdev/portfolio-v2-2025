"use client";
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import moment from 'moment';
import { CircleCheckBig, MoveUpLeft, X } from 'lucide-react';
import { setMouseDownOnAToast } from './Trash';
const NotifSound = "/media/level-up-3-199576.mp3"
const delay = 6;
const animationDurations = 0.5;

function playNotificationSound(
    src = null,
    volume = 1.0,
    preventOverlap = true,
) {

    console.log("Play ------------");

    const audio = new Audio(src ?? NotifSound);
    audio.volume = volume;

    if (preventOverlap) {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    audio.play().catch(err => {
        console.error("Failed to play notification sound:", err);
    });

    return audio;
}


const MessageReadMore = ({ text }) => {
    return <p className=' ml-2 opacity-70   text-sm font-semibold'>{text?.substring(0, 90)} {
        text?.length > 90 && <span className=''>...</span>
    }</p>
}


const AMessage = ({ messageData, i, setexpandData, PickedList, addToPicked, delFromPicked, isHovring, toasts, removedList, addToRemovedList }) => {
    const [itemHeight, setItemHeight] = useState(
        messageData.title
            ? (
                messageData.message?.length > 50
                    ? 110
                    : 80
            )
            :
            messageData.message?.length > 50
                ? 90
                : 75
    )

    const [outedGroupBottom, setoutedGroupBottom] = useState(null);
    const [GreateIndex, setGreateIndex] = useState(
        toasts
            .filter(m =>
                moment().diff(m.createdAt, "seconds", true) <= delay &&
                !removedList.includes(m.createdAt) &&
                !PickedList.includes(m.createdAt)
            )
            .findIndex((m) => m.createdAt === messageData.createdAt)
    );

    const [isMouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        if (
            messageData.withSound &&
            moment().diff(messageData.createdAt, "seconds", true) <= delay &&
            !removedList.includes(messageData.createdAt) &&
            !PickedList.includes(messageData.createdAt)
        ) {
            playNotificationSound()
        }

        if (messageData.pop_it_directly == true) {
            handleExpand();
        }

    }, [])

    // ------------------------------------------------------------

    useEffect(() => {
        const iteer1 = setInterval(() => {
            if (moment().diff(messageData.createdAt, "seconds", true) >= delay && !PickedList.includes(messageData.createdAt) && !removedList.includes(messageData.createdAt)) {
                addToRemovedList(messageData.createdAt)
            }
        }, delay * 100);





        setGreateIndex(
            toasts
                .filter(m => moment().diff(m.createdAt, "seconds", true) <= delay &&
                    !removedList.includes(m.createdAt) &&
                    !PickedList.includes(m.createdAt)
                )
                .findIndex((m) => m.createdAt === messageData.createdAt)
        );
        return () => {
            clearInterval(iteer1)
        }
    }, [removedList, PickedList]);
    // ------------------------------------------------------------

    const [TransformVal, setTransformVal] = useState({
        x: 0,
        y: 0
    });
    const [LastPosition, setLastPosition] = useState({
        x: 0,
        y: 0
    });
    const [MouseUpPositiom, setMouseUpPositiom] = useState({
        x: 0,
        y: 0
    }
    );

    const [isInDangerZone, setInDangerZone] = useState(false)

    const HandelMouseDown = e => {

        if (isMouseDown) {
            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const zoneWidth = 500;
            const leftBound = centerX - zoneWidth / 2;
            const rightBound = centerX + zoneWidth / 2;
            const isInZone = e.clientX >= leftBound && e.clientX <= rightBound;

            if (x <= window.innerWidth - 500 && outedGroupBottom == null) {
                addToPicked(messageData.createdAt)
                setoutedGroupBottom((GreateIndex * (!isNaN(itemHeight) ? itemHeight : 100)));
            }

            if (isInZone && (y >= window.innerHeight - 200)) {
                setInDangerZone(true)
            } else {
                setInDangerZone(false)
            }

            setTransformVal({
                x: LastPosition.x - x + MouseUpPositiom.x,
                y: LastPosition.y - y + MouseUpPositiom.y,
            })
        }
    };



    const handleRemove = () => {
        // PickedList.includes(messageData.createdAt)
        //     ? (() => {
        //         setTransformVal(pv => ({
        //             x: ((window.innerWidth - 500) / 2),
        //             y: 0,
        //         }));
        //         setTimeout(() => {
        //             addToRemovedList(messageData.createdAt)
        //             delFromPicked(messageData.createdAt)
        //         }, 400);
        //     })()
        //     : null


        addToRemovedList(messageData.createdAt)
        delFromPicked(messageData.createdAt)

    }

    const cardRef = useRef(null)

    const handleExpand = () => {

        setexpandData({
            messageData,
            position: cardRef.current?.getBoundingClientRect(),
        });

        addToRemovedList(messageData.createdAt)
        delFromPicked(messageData.createdAt)

    }

    return <>
        <AnimatePresence>
            {
                (
                    !removedList.includes(messageData.createdAt)
                    ||
                    PickedList.includes(messageData.createdAt)
                )
                &&
                <div
                    onDoubleClick={handleRemove}
                    onMouseMove={HandelMouseDown}
                    onMouseDown={e => {

                        setLastPosition({ x: e.clientX, y: e.clientY });
                        setMouseDown(true)
                        setMouseDownOnAToast(true)
                    }}
                    onMouseUp={() => {

                        if (isInDangerZone) {
                            handleRemove()
                        } else {

                            setMouseUpPositiom({
                                y: TransformVal.y,
                                x: TransformVal.x
                            });
                            setMouseDown(false)
                        }
                        setMouseDownOnAToast(false)

                    }}
                    onMouseLeave={() => {
                        if (isInDangerZone) {
                            handleRemove()
                        } else {

                            setMouseUpPositiom({
                                y: TransformVal.y,
                                x: TransformVal.x
                            }); setMouseDown(false)
                        }
                        setMouseDownOnAToast(false)
                    }}
                    style={{
                        height: `${itemHeight}px`,
                        transform: `translate(${-TransformVal.x}px ,${-TransformVal.y}px) `,

                        ...(!PickedList.includes(messageData.createdAt)
                            ? {
                                bottom: isHovring
                                    ? (
                                        (GreateIndex * itemHeight) + 20
                                    )
                                    : GreateIndex * 10 + 20,
                            }
                            : { bottom: outedGroupBottom + 20 }),

                        transition: `${isMouseDown ? "0s" : `${animationDurations}s  ease-in-out`}`
                    }}

                    className={`py-1 fixed z-[9999] group !mt-3   items-center    select-none max-w-[500px] w-[500px] flex `}>


                    <motion.div
                        initial={{
                            y: 100,
                            x: 0,
                            opacity: 0
                        }}
                        exit={{
                            y: 50,
                            x: 0,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: animationDurations + .4,
                                type: 'spring'

                            }
                        }}
                        style={{
                            filter: "drop-shadow(0 8px 4px var(--filter-color))"
                        }}
                        ref={cardRef}
                        className={`  ${isInDangerZone ? "bg-[#ff6e6e] " : " bg-background "} relative border-2 border-[#c3ffee] w-full  font-medium rounded-xl  h-full flex items-center px-2  justify-center`}>
                        <div
                            style={{
                                filter: "drop-shadow(5px 0px 20px #54ff9bc6)"
                            }}
                            className='p-[6px]   flex items-center   justify-center rounded-[12px]  bg-[var(--bg-wh)]'>
                            <CircleCheckBig className='w-7 h-7 stroke-2 text-[#00ffb3]' />

                        </div>

                        <div className="flex w-full mx-2 flex-col  overflow-auto">
                            {messageData.title && <h2 className='truncate font-semibold'>{messageData.title}</h2>}
                            <MessageReadMore
                                text={messageData.message}
                            />
                        </div>
                        <div className="h-full  flex justify-between flex-col items-center  py-2">

                            <button
                                className='   flex items-start justify-between flex-col   cursor-pointer  '
                                onClick={handleRemove}
                            >
                                <X
                                    className=' w-5 h-5 opacity-30' />
                            </button>
                            {
                                messageData.message?.length > 90 &&

                                <button onClick={handleExpand}>
                                    <svg
                                        className='duration-200  stroke-foreground cursor-pointer text-blue-500 w-6 h-6 opacity-0 translate-2 group-hover:opacity-100   group-hover:translate-0 '
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M7 15v-8h8" />
                                        <path d="M11 19v-8h8" />
                                    </svg>

                                </button>
                            }
                        </div>
                    </motion.div>
                </div >
            }

        </AnimatePresence >

    </>




}


export default AMessage
