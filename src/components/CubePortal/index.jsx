import { memo, useRef } from "react";
import { Canvas, useFrame  } from "@react-three/fiber";
import { Preload, OrbitControls, Float, useGLTF } from '@react-three/drei';
import CubePortalModel from "../../models/cubePortal";
import PortalCubeGLTF from '../../assets/3D/portal_cube.glb'

const headPropsTop = {
    scale: [0.14, 0.14, 0.14],
    position: [2.5, 1.8, 1],
    rotation: [0.4, 4.3, 1.02],
};

const headPropsBottom = {
    scale: [0.12, 0.12, 0.12],
    position: [-2.5, -1, 1],
};

const ModelCube = () => {
    const { nodes, materials } = useGLTF(PortalCubeGLTF, true, true)

    const cubeRefPrimary = useRef();
    const cubeRefSecondary = useRef();

    let frameCount = 0;

    useFrame(() => {
        frameCount += 1;
        if (frameCount % 2 === 0) {  // Skip every other frame
            cubeRefPrimary.current.rotation.y += 0.002;
            cubeRefPrimary.current.rotation.x += 0.001;
            cubeRefSecondary.current.rotation.y += 0.002;
            cubeRefSecondary.current.rotation.x += 0.001;
        }
    });

    return (
        <>
            <CubePortalModel {...headPropsTop} cubeRef={cubeRefPrimary} nodes={nodes} materials={materials} />
            <CubePortalModel {...headPropsBottom} cubeRef={cubeRefSecondary} nodes={nodes} materials={materials} />
        </>
    )
}

const CubePortal = () => {
    return (
        <Canvas resize gl={{ preserveDrawingBuffer: true }} camera={{ near: 0.1, far: 1000 }} style={{position: 'absolute'}} className="canvas_cube">
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 12, 0]} color={0xB275FB} intensity={0.7} />
            <directionalLight position={[7, 12, 0]} color={0x4AC0FF} intensity={0.6} />
            <OrbitControls target={[0, 0, 4]} enablePan={false} enableZoom={false} />
            <Float speed={2} floatIntensity={2}>
                <ModelCube />
            </Float>
            <Preload all />
        </Canvas>
    )
}

export default memo(CubePortal)