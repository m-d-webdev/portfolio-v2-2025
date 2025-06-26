"use client";
import React, { useRef, useState } from 'react'

const VerticalListCursorHover = ({ children, className = "", parentClassName = "" }) => {
  const [left, setLeft] = useState(0);
  const [iSHovrinbg, setHovring] = useState(false);
  const ContainerRef = useRef()
  const SliderRef = useRef()
  const handleMouseMove = e => {
    const { left: ElemLeft } = ContainerRef.current?.getBoundingClientRect();
    const halfWith = SliderRef.current?.innerWith / 2 || 25
    setLeft(e.clientX - ElemLeft - halfWith)
  }
  return (
    <div
      onMouseEnter={() => setHovring(true)}
      onMouseLeave={() => setHovring(false)}
      onMouseMove={handleMouseMove}
      ref={ContainerRef}
      className={`${parentClassName} overflow-hidden flex relative pb-[2px]  items-center justify-center gap-2`}>
      {children}
      {
        iSHovrinbg &&
        <span
          style={{
            left
          }}
          ref={SliderRef}
          className={`${className} opacity-60  absolute bottom-0 p-[1px] bg-foreground w-[50px]`}></span>
      }
    </div >
  )
}

export default VerticalListCursorHover
