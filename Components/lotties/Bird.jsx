import React from 'react'
import DelvpooerAnimatio from "./animations/Link Dein E-Guide Papagei.json"
import Lottie from 'react-lottie'
const Bird = ({ Speed = 1 }) => {
    return (
        <Lottie
            options={{
                animationData: DelvpooerAnimatio,
                loop: true,
                autoplay: true,
            }}
            // width={600}
            height={150}
            width={150}
        />
    )
}

export default Bird
