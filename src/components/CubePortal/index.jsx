import { memo, useRef, lazy, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Float, useGLTF, BakeShadows } from '@react-three/drei';
const CubePortalModel = lazy(() => import("../../models/cubePortal"));
import PortalCubeGLTF from '../../assets/3D/portal_cube.glb'

const ModelCube = memo(() => {
  const cubeConfigs = [
    { props: { scale: [0.07, 0.07, 0.07], position: [0.5, 1, 1], rotation: [0.4, 4.3, 1.02] }, float: { speed: 2, floatIntensity: 0.2, floatingRange: [0, 0] } },
    { props: { scale: [0.06, 0.06, 0.06], position: [-1.2, -0.5, 1] }, float: { speed: 2, floatIntensity: 1, floatingRange: [0, 0] } },
    { props: { scale: [0.07, 0.07, 0.07], position: [0.7, -1, 1], rotation: [0.4, 4.3, 1.02] }, float: { speed: 1, floatIntensity: 2, floatingRange: [0, 0.1] } },
    { props: { scale: [0.05, 0.05, 0.05], position: [0, 0, 1] }, float: { speed: 1, floatIntensity: 1, floatingRange: [0, 0] } },
    { props: { scale: [0.04, 0.04, 0.04], position: [-0.9, -1.5, 1], rotation: [0.5, 2.3, 1.5] }, float: { speed: 1, floatIntensity: 1, floatingRange: [0, 0] } },
    { props: { scale: [0.06, 0.06, 0.06], position: [0.3, -1.8, 1], rotation: [0.6, 2.8, 1.5] }, float: { speed: 1, floatIntensity: 1, floatingRange: [0, 0] } },
  ];

  const { nodes, materials } = useGLTF(PortalCubeGLTF, true, true);
  const memoizedNodes = useMemo(() => nodes, [nodes]);
  const memoizedMaterials = useMemo(() => materials, [materials]);

  // Initialize refs for each cube
  const cubeRefs = cubeConfigs.map(() => useRef());

  // Frame update logic for cube rotation
  useFrame((_state, delta) => {
    cubeRefs.forEach(ref => {
      if (ref.current) {
        ref.current.rotation.y += delta;
        ref.current.rotation.x += delta;
      }
    });
  });

  return ( // TODO: Instancing
    <>
      {cubeConfigs.map((config, index) => (
        <Float key={index}
               speed={config.float.speed}
               floatIntensity={config.float.floatIntensity}
               floatingRange={config.float.floatingRange}
        >
          <Suspense fallback={null}>
            <CubePortalModel {...config.props}
                             cubeRef={cubeRefs[index]}
                             nodes={memoizedNodes}
                             materials={memoizedMaterials}
            />
          </Suspense>
        </Float>
      ))}
    </>
  );
});

const CubePortal = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) return null;

    return (
        <Canvas dpr={[0.6, 0.7]} gl={{ antialias: true, powerPreference: "low-power" }} camera={{ near: 0.1, far: 10 }} style={{ position: 'absolute' }} className="canvas_cube">
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 12, 0]} color={0xB275FB} intensity={0.7} />
            <directionalLight position={[7, 12, 0]} color={0x4AC0FF} intensity={0.6} />
            <ModelCube />
            <BakeShadows />
            <Preload all />
        </Canvas>
    )
}

export default memo(CubePortal)