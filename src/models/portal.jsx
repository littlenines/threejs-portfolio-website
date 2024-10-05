import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Portal from '../assets/3D/portal.glb'

const PortalModel = ({...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(Portal)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['core_personality_sphere_base_skeleton|core02_pincher_idle'] 
    if (action) {
      action.play();
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
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

export default PortalModel