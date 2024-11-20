import { memo } from 'react'

const CompanionPortal = ({companionRef, nodes, materials, ...props}) => {
  return (
    <group ref={companionRef} {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial}/>
    </group>
  )
}

export default memo(CompanionPortal);