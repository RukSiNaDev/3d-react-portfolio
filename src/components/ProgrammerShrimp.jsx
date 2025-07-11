/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: CR4YCR4Y (https://sketchfab.com/CR4YCR4Y)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/programmer-cr4y-d64e933c6ea04cb6887007223dadf9b9
Title: Programmer CR4Y
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ProgrammerShrimp = (props) => {
  const { nodes, materials } = useGLTF('./models/programmer_shrimp.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Crayfish_Eye}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Crayfish_Flesh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Crayfish_Shell}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Sock_Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Sock_Pink}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Sock_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Keyboard_Glow_Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Keyboard_Glow_Pink}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Keyboard_Glow_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.L4PT0P_auv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Laptop_Gloss_Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Laptop_Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Laptop_Shell}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/programmer_shrimp.glb')

export default ProgrammerShrimp;
