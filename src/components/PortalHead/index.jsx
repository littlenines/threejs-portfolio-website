import { memo, useRef } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import PortalHeadModel from "./PortalHeadModel";
import { useInView } from "motion/react";
import { useMouseGrab } from "../../hooks/useMouseGrab";

const PortalHead = () => {
  const canvasRef = useRef();
  const isInView = useInView(canvasRef)
  const mouseGrabEvent = useMouseGrab();

  return (
    <Canvas onMouseDown={mouseGrabEvent} onMouseUp={mouseGrabEvent} ref={canvasRef} dpr={[0.7, 0.9]} camera={{ near: 0.1, far: 10 }} gl={{ powerPreference: "low-power" }} className="head_canvas">
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <pointLight position={[-0.25, 0, 4.1]}
                  color={0xB275FB}
                  intensity={0.4}
                  distance={1}
                  decay={1}/>
      <pointLight position={[-0.1, 0, 4.1]}
                  color={0x4AC0FF}
                  intensity={0.4}
                  distance={1}
                  decay={1}/>
      <OrbitControls target={[0, 0, 3.7]} enablePan={false} enableZoom={false} />
      <PortalHeadModel inView={isInView}/>
    </Canvas>
  )
}

export default memo(PortalHead)