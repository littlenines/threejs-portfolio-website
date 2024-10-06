import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import PortalCube from '../assets/3D/portal_cube.glb'


export function CubeNormal({...props}) {
  const { nodes, materials } = useGLTF(PortalCube)

  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.003;
      cubeRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={cubeRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube_0.geometry} material={materials.Main} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.Border}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_0.geometry}
          material={materials.Heart}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials.Contour}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials.Lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_0.geometry}
          material={materials.Border}
        />
      </group>
    </group>
  )
}

export default CubeNormal;