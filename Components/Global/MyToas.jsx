"use client";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import AMessage from './AtoasMessage';
import { Trash2 } from 'lucide-react';
import Trash from './Trash';
import { AnimatePresence } from 'framer-motion';
import ExpandToast from './ExpandToast';

const delay = 30
let AddToast
export const pa9 = {
    success: (
        message,
        title,
        otherPatams = {
            withSound: false,
            buttons: [
                {
                    label: null,
                    props: null
                }
            ],
            pop_it_directly: false
        }) => {
        if (otherPatams?.buttons?.length == 1 && otherPatams.buttons[0]?.label == null && !otherPatams.buttons[0]?.props) {
            otherPatams.buttons = []
        }
        AddToast(message, title, "success", otherPatams)
    },
    error: (message, title) => {
        AddToast(message, title, "error")
    },
    warning: (message, title) => {
        AddToast(message, title, "warning")
    },
}


const IderkaouiToast = () => {

    const [isHovring, setisHovring] = useState(false);
    const [toasts, setToasts] = useState([]);
    const [removedList, setremovedList] = useState([]);
    const [PickedList, setPickedList] = useState([]);

    // EXPAND TOAST =========
    const [isToastExapndVisible, setToastExapndVisible] = useState(false);
    const [expandData, setexpandData] = useState(null)
    AddToast = (message, title, type, otherPatams) => {
        setToasts(pv => [...pv.filter(m => !removedList.includes(m.createdAt)),
        {
            message,
            title,
            ...otherPatams,
            type,
            createdAt: Date.now()
        }
        ]);
    }
    let TimeOut;
    const handleCheckIfhovring = e => {
        clearTimeout(TimeOut)
        const zoneWidth = 500;
        const zoneHeight = toasts.length * 100;

        const leftBound = window.innerWidth - zoneWidth;
        const topBound = window.innerHeight - zoneHeight;

        const isInZone =
            e.clientX >= leftBound &&
            e.clientY >= topBound &&
            e.clientX <= window.innerWidth &&
            e.clientY <= window.innerHeight;
        if (isInZone) {
            clearTimeout(TimeOut)
            setisHovring(true)

        } else {
            TimeOut = setTimeout(() => {
                setisHovring(false)
            }, 400)
        }
    }
    useEffect(() => {
        document.addEventListener("mouseover", handleCheckIfhovring)
        return () => {
            clearTimeout(TimeOut)
            document.removeEventListener("mouseover", handleCheckIfhovring)
        }
    }, [toasts]);


    return (
        <div className=' h-fit gap-6  absolute  w-[500px] bottom-5 right-5 flex items-end  flex-col-reverse' >
            {
                toasts.map((t, i) => <AMessage
                    addToRemovedList={c => setremovedList(pv => [...pv, c])}
                    messageData={t}
                    removedList={removedList}
                    setexpandData={data => {
                        setToastExapndVisible(true);
                        setexpandData(data)
                    }}
                    i={i}
                    PickedList={PickedList}
                    addToPicked={c => setPickedList(pv => [...pv, c])}
                    delFromPicked={c => setPickedList(pv => pv.filter(m => m != c))}
                    isHovring={isHovring}
                    toasts={toasts}
                    key={t.createdAt} />)
            }
            {/* Trsh  */}
            <>

                <Trash />
                <AnimatePresence>
                    {
                        isToastExapndVisible &&
                        <ExpandToast onClose={() => setToastExapndVisible(false)} expandData={expandData} />
                    }
                </AnimatePresence>
            </>
        </div >
    )
}

export default IderkaouiToast
