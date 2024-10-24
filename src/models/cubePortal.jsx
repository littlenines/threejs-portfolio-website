import React, { memo } from "react";

export function CubePortal({ cubeRef, nodes, materials, ...props }) {
  return (
    <group ref={cubeRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_0.geometry}
        material={materials.Main}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Lights}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_0.geometry}
        material={materials.Border}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_0.geometry}
        material={materials.Heart}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials.Contour}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default memo(CubePortal);
