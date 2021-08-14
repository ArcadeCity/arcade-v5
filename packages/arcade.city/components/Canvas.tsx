import React, { Suspense } from 'react'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
// import Model from './Model'

export const Canvas = () => {
  return (
    <FiberCanvas
      shadows
      camera={{ position: [0, 0, 12], fov: 50, near: 7, far: 15 }}
    >
      <fog attach='fog' args={['black', 0, 20]} />
      <pointLight position={[0, 10, -10]} intensity={1} />
      <Suspense
        fallback={
          <Html center className='loader'>
            LOADING
          </Html>
        }
      >
        {/* <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} /> */}
      </Suspense>
    </FiberCanvas>
  )
}
