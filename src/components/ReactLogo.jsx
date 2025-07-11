/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-circle-540ff21ac0f54a038df6f634c7cce726
Title: React logo circle
*/

import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

  export const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('./models/react.glb')
  return (
   <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('./models/react.glb')

export default ReactLogo;
