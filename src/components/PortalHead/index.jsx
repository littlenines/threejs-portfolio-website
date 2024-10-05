/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber"
import { Preload, OrbitControls } from '@react-three/drei';
import PortalModel from "../../models/portal"

const PortalHead = () => {
  const [headProps] = useState({
    scale: [1, 1, 1],
    position: [0,0,3.7],
    rotation: [0.4, 4.3, 0],
  });
  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} className="canvas">
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight
        position={[-0.25, 0, 4.1]}
        color={0xB275FB} 
        intensity={0.5}
        distance={1}
        decay={1}
      />
      <pointLight
        position={[-0.1, 0, 4.1]} 
        color={0x4AC0FF} 
        intensity={0.5}
        distance={1}
        decay={1}
      />
      <OrbitControls target={[0,0,3.7]} enablePan={false} enableZoom={false}/>
      <PortalModel {...headProps} />
      <Preload all />
    </Canvas>
  )
}

export default PortalHead