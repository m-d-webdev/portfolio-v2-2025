"use client";

import { useEffect, useRef, useState } from "react";
import Bird from "../lotties/Bird";
import { motion, AnimatePresence } from "framer-motion";


// const BirdRandomTrip = () => {
//     return (
//         <div className="fixed top-0 left-0 z-[999]">
//             <Bird />
//         </div>
//     )
// }
const BirdRandomTrip = () => {
    const BeeRef = useRef();
    const [Options, setOptions] = useState({
        top: ["30%", "10%"],
        left: ["-10%", "40%"],
        scaleX: [-1, -1]
    });


    let lastTop = Options.top[1];
    let lastLeft = Options.left[1];

    const GenerateRandomPosi = (t, l) => {
        const NewTopVal = t ? t : Math.random() * 150 - 30;
        const NewLeftVal = l ? l : Math.random() * 150 - 30;
        setOptions({
            left: [lastLeft, `${NewLeftVal}%`],
            top: [lastTop, `${NewTopVal}%`],
            scaleX: [parseFloat(NewLeftVal) < parseFloat(lastLeft) ? 1 : -1]
        });
        lastLeft = NewLeftVal;
        lastTop = NewTopVal;
       

    }


    let InterVal;
    useEffect(() => {
        InterVal = setInterval(() => { GenerateRandomPosi() }, 12000);
        // InterVal = setInterval(() => { GenerateRandomPosi() }, 12000);

        return () => clearInterval(InterVal)
    }, []);


    const [BeeMessageVisible, setBeeMessageVisible] = useState(true)

    useEffect(
        () => {
            let TimeOUt;
            if (BeeMessageVisible) {
                TimeOUt = setTimeout(() => {
                    setBeeMessageVisible(false)
                }, 3000)
            }

            return () => {
                clearTimeout(TimeOUt)
            }
        }, [BeeMessageVisible])


    return (
        <>

            <motion.div
                // onClick={HandelClickTheBee}
                animate={Options}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                }}
                style={{
                    zIndex: "999"
                }}
                className='z-10  fixed w-fit '>
                <Bird  ref={BeeRef} />


            </motion.div>

        </>
    )
}

export default BirdRandomTrip
