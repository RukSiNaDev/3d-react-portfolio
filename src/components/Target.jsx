import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

export const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useEffect(() => {
    // รอให้ ref และ scene พร้อมก่อนค่อย animate
    if (!targetRef.current || !scene) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current.rotation, {
        y: targetRef.current.rotation.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert(); // cleanup เมื่อ component ถูก unmount
  }, [scene]);

  if (!scene) return null; // อย่าเพิ่ง render ถ้ายังโหลดไม่เสร็จ

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  );
};