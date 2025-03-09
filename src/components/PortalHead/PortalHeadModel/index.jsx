
import { memo, useEffect, useRef } from "react";
import { useGLTF, useAnimations, BakeShadows, Preload } from '@react-three/drei';
import WheatleyPortalModel from "@/models/wheatleyPortal"
import WheatleyGLTF from '@/assets/3D/portal.glb'

const headProps = {
  scale: [31, 31, 31],
  position: [0, 0, 3.7],
  rotation: [-1.19, 3.1, -1.2],
};

const PortalHeadModel = ({inView}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(WheatleyGLTF, true, true);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["core_personality_sphere_base_skeleton|core02_pincher_idle"];
    if (!action) return;

    if (inView) action.play();
    else action.stop();

    return () => action.stop();
  }, [inView]);

  return (
    <>
      <WheatleyPortalModel nodes={nodes} materials={materials} ref={group} {...headProps} />
      <Preload all />
      <BakeShadows />
    </>
  )
};

export default memo(PortalHeadModel)