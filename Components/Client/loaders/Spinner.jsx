"use client";

import "./loaderCss.css"
import React from 'react'

const Spinner = ({ className }) => {
    return (
        <div className={`${className} w-[25px] h-[25px]  loader3  border-t-[2px] border-t-background  `}></div>
    )
}

export default Spinner
