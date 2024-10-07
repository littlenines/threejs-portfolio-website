import React, {memo} from 'react'

const WheatleyPortal = ({nodes, materials, modelRef, ...props}) => {
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.03221844}>
          <group
            name="b27408aa988a4a629927c64cfc7579a7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="core_personality_sphere_base"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="core_personality_sphere_base_skeleton"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.personality_sphere}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.personality_sphere_glass}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.personality_sphere_light}
                      skeleton={nodes.Object_11.skeleton}
                    >
                      <meshStandardMaterial
                        color="#B275FB"
                        emissive='#00ffff'
                        emissiveIntensity={0.2}
                      />
                    </skinnedMesh>
                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default memo(WheatleyPortal)