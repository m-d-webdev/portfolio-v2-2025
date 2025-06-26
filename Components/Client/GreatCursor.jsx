"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./loaders/loaderCss.css"
import { motion } from "framer-motion"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["500"]
});

const Chararat = ({ x, y, i }) => {
  const [] = useState()
  return <motion.span
    // initial={{
    //   opacity: 0,
    //   x: 0,
    //   y: 0,
    //   transition: {
    //     delay: i * .4
    //   }
    // }}
    animate={{
      opacity: [0, 1, 0],
      x: [0, 10, 50],
      // transform:"rotate(100deg)"
    }}

    transition={{
      duration: 1,
      ease: "easeIn",
      delay: i * .4,
      repeat: Infinity,
      repeatType: "loop",
    }}
    style={{
      // left: x,
      // top: y - (i * 4),
      zIndex: 9999,

    }
    }
    className={`bg-[#FFA500]     !min-w-[20px] h-[2px] !rounded-full`}>

  </motion.span>
}

const GreatCursor = ({ children, lang }) => {
  const [rotateVal, setrotateVal] = useState(0)

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const prevPos = useRef({ x: 0, y: 0 });



  const HanleMouseMoveWindow = e => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });

    const { clientX: x, clientY: y } = e;
    const dx = x - prevPos.current.x;
    const dy = y - prevPos.current.y;

    if (dx !== 0 || dy !== 0) {
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = angleRad * (180 / Math.PI) + 180;
      setrotateVal(angleDeg)
    }
    prevPos.current = { x, y };
  };

  const [isMouseDown, setMouseDown] = useState(false);
  const [isMouseDowning, setisMouseDowning] = useState(false);

  useEffect(() => {
    const TImeOut = setTimeout(() => {
      setMouseDown(false);
    }, 600);
    return () => {
      clearTimeout(TImeOut);
    }
  }, [isMouseDown])

  return (
    <>
      <body
        // style={{ cursor: 'none' }}
        onMouseMove={HanleMouseMoveWindow}
        onMouseDown={() => setMouseDown(!isMouseDown)}
        className={` ${lang == 'ar' ? vazirmatn.className : geistSans.className} h-lvh selection:bg-foreground  selection:text-background`}      >
        {children}
        {/* <div style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: 'none',
          transform: `translate(-50%, -50%) rotate(${rotateVal}deg)`,
          zIndex: 9999,
          transition: "transform .1s"
        }}
          className="fixed flex  flex-col   items-center justify-center bg-[#FFA500]  w-[14px] h-[14px] rounded-full">

          {
            Array(10).fill().map((c, i) => <Chararat x={pos.x} y={pos.y} key={i} i={i} />)
          }
          {
            isMouseDowning &&
            <motion.div
              animate={{ scale: [0, 2, 0] }}
              transition={{
                duration: .4,
                ease: "easeInOut",
                // delay: i * .4,
                // repeat: Infinity,
                // repeatType: "loop",
              }}
              className="bg-[#FFA500] !min-h-full rounded-full absolute !min-w-full">

            </motion.div>
          }
        </div> */}
      </body>
    </>
  )
}

export default GreatCursor
