"use client";

import DelvpooerAnimatio from "./animations/Web Development.json"
import Lottie from 'react-lottie'
const ProjectsMan = ({ Speed = 1 }) => {
    return (
        <Lottie
            options={{
                animationData: DelvpooerAnimatio,
                loop: true,
                autoplay: true,
            }}
            // width={600}
            height={300}
            width={300}
        />
    )
}

export default ProjectsMan
