import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'

export const Globe = () => {
  const ref = useRef()
  const globe = useTexture('/earth.jpg')
  // const globe = useTexture('/globe.png')
  return (
    <group ref={ref} scale={[100, 100, 100]} position={[-500, -500, 1000]}>
      <mesh>
        <sphereGeometry args={[5, 50, 50]} />
        <meshStandardMaterial map={globe} roughness={1} fog={false} />
      </mesh>
    </group>
  )
}
