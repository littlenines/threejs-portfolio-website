import { memo, forwardRef } from 'react'

const CompanionPortal = forwardRef(({nodes, materials, ...props}, ref) => {
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial}/>
    </group>
  )
})

export default memo(CompanionPortal);