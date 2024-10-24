import { memo, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { Preload, OrbitControls } from '@react-three/drei';
import WheatleyPortalModel from "../../models/wheatleyPortal"
import { useGLTF, useAnimations, BakeShadows } from '@react-three/drei'
import WheatleyGLTF from '../../assets/3D/portal.glb'

const headProps = {
  scale: [31, 31, 31],
  position: [0, 0, 3.7],
  rotation: [-1.19, 3.1, -1.2],
};

const Model = memo(() => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(WheatleyGLTF, true, true);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["core_personality_sphere_base_skeleton|core02_pincher_idle"];
    if (action) {
      action.play();
    }
  }, [actions]);

  return <WheatleyPortalModel nodes={nodes} materials={materials} modelRef={group} {...headProps} />;
});

const PortalHead = () => {
  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} className="head_canvas">
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-0.25, 0, 4.1]}
                  color={0xB275FB}
                  intensity={0.4}
                  distance={1}
                  decay={1}
      />
      <pointLight position={[-0.1, 0, 4.1]}
                  color={0x4AC0FF}
                  intensity={0.4}
                  distance={1}
                  decay={1}
      />
      <OrbitControls target={[0, 0, 3.7]} enablePan={false} enableZoom={false} />
      <Suspense fallback={null}>
        <Model />
        <BakeShadows />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default memo(PortalHead)