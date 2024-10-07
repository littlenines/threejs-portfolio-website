import { memo, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber"
import { Preload, OrbitControls } from '@react-three/drei';
import WheatleyPortalModel from "../../models/wheatleyPortal"
import { useGLTF, useAnimations } from '@react-three/drei'
import WheatleyGLTF from '../../assets/3D/portal.glb'

const Model = () => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(WheatleyGLTF, true, true)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['core_personality_sphere_base_skeleton|core02_pincher_idle']
    if (action) {
      action.play();
    }
  }, [actions]);

  return (
    <WheatleyPortalModel nodes={nodes} materials={materials} modelRef={group} {...headProps} />
  )
}

const headProps = {
  scale: [1, 1, 1],
  position: [0, 0, 3.7],
  rotation: [0.4, 4.3, 0],
};

const PortalHead = () => {
  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} className="head_canvas">
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-0.25, 0, 4.1]}
                  color={0xB275FB}
                  intensity={0.5}
                  distance={1}
                  decay={1}
      />
      <pointLight position={[-0.1, 0, 4.1]}
                  color={0x4AC0FF}
                  intensity={0.5}
                  distance={1}
                  decay={1}
      />
      <OrbitControls target={[0, 0, 3.7]} enablePan={false} enableZoom={false} />
      <Model />
      <Preload all />
    </Canvas>
  )
}

export default memo(PortalHead)