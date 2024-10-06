/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, Float } from '@react-three/drei';
import CubeNormal from "../../models/cubeNormal";

const CubePortal = () => {
    const [headProps1] = useState({
        scale: [0.14, 0.14, 0.14],
        position: [2.5, 1.8, 1],
        rotation: [0.4, 4.3, 1.02],
    });
    const [headProps2] = useState({
        scale: [0.12, 0.12, 0.12],
        position: [-2.5, -1, 1],
    });

    return (
        <Canvas resize gl={{ preserveDrawingBuffer: true }} camera={{ near: 0.1, far: 1000 }} className="canvas_cube">
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 12, 0]} color={0xB275FB} intensity={0.7} />
            <directionalLight position={[7, 12, 0]} color={0x4AC0FF} intensity={0.6} />
            <OrbitControls target={[0, 0, 4]} enablePan={false} enableZoom={false} />
            <Float speed={2} floatIntensity={2}>
                <CubeNormal {...headProps1} />
                <CubeNormal {...headProps2} />
            </Float>
            <Preload all />
        </Canvas>
    )
}

export default CubePortal