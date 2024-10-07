import React, {memo} from 'react'

export function CubePortal({cubeRef, nodes, materials, ...props}) {
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

export default memo(CubePortal);