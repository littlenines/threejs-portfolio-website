import { memo, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, Preload, Float, useGLTF, BakeShadows } from '@react-three/drei';
import PortalCubeGLTF from '../../assets/3D/portal_cube.glb'
import useIsMobile from "../../utils/useIsMobile";

const ModelCube = memo(() => {
  
  const { nodes, materials } = useGLTF(PortalCubeGLTF, true);

  const cubeConfigs = [
    { scale: [0.007, 0.007, 0.007], position: [0.5, 1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 2, intensity: 0.2, range: [0, 0] } },
    { scale: [0.006, 0.006, 0.006], position: [-1.2, -0.5, 1], float: { speed: 2, intensity: 1, range: [0, 0] } },
    { scale: [0.007, 0.007, 0.007], position: [0.7, -1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 1, intensity: 2, range: [0, 0.1] } },
    { scale: [0.005, 0.005, 0.005], position: [0, 0, 1], float: { speed: 1, intensity: 1, range: [0, 0] } },
    { scale: [0.004, 0.004, 0.004], position: [-0.9, -1.5, 1], rotation: [0.5, 2.3, 1.5], float: { speed: 1, intensity: 1, range: [0, 0] } },
    { scale: [0.006, 0.006, 0.006], position: [0.3, -1.8, 1], rotation: [0.6, 2.8, 1.5], float: { speed: 1, intensity: 1, range: [0, 0] } },
  ];


  const instanceConfigs = [
    { geometry: nodes.Object_7.geometry, material: materials.materialsmodelspropsmetal_box },
  ];

  const cubeRefs = useRef([]);

  useFrame((_state, delta) => {
    cubeRefs.current.forEach(ref => {
      if (ref) {
        ref.rotation.y += delta * 0.4;
        ref.rotation.x += delta * 0.4;
      }
    });
  });

  const cubes = useMemo(() => (
    cubeConfigs.map((config, idx) => (
      <Float key={idx}
             autoInvalidate
             speed={config.float.speed} 
             floatIntensity={config.float.intensity} 
             floatingRange={config.float.range}>
        <Instance ref={el => cubeRefs.current[idx] = el}
                  position={config.position}
                  scale={config.scale}
                  rotation={config.rotation}
        />
      </Float>
    ))
  ), [cubeConfigs]);

  return (
    <>
      {instanceConfigs.map((instance, index) => (
        <Instances key={index}
                   limit={cubeConfigs.length}
                   geometry={instance.geometry}
                   material={instance.material}
        >
          {cubes}
        </Instances>
      ))}
    </>
  );
});

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
      <ModelCube />
      <BakeShadows />
      <Preload all />
    </Canvas>
  )
}

export default memo(CubePortal)