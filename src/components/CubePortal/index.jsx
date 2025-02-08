import { memo, Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import {Preload, BakeShadows } from '@react-three/drei';
const CubePortalModel = lazy(() => import('./CubePortalModel'))
import useIsMobile from "../../hooks/useIsMobile";

const CubePortal = () => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <Canvas dpr={[0.6, 0.7]}
            frameloop="demand"
            gl={{ powerPreference: "low-power" }} 
            camera={{ near: 0.1, far: 10 }} 
            style={{ position: 'absolute' }} 
            className="canvas_cube">
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 12, 0]} color={0xB275FB} intensity={0.7} />
      <directionalLight position={[7, 12, 0]} color={0x4AC0FF} intensity={0.6} />
      <Suspense fallback={null}>
        <CubePortalModel />
        <Preload all />
      </Suspense>
      <BakeShadows />
    </Canvas>
  )
}

export default memo(CubePortal)