"use client";
import React from 'react'
import DelvpooerAnimatio from "./animations/Devlopper.json"
import Lottie from 'react-lottie'
const Developer = () => {
    return (
        <Lottie
            options={{
                animationData: DelvpooerAnimatio,
                loop: true,
                autoplay: true,
            }}
            // width={600}
            height={200}
        // width={300}
        />
    )
}

export default Developer
