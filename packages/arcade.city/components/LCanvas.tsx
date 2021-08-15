import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { Html, Loader } from '@react-three/drei'
import Model from './Model'

const LCanvas = ({ children }: any) => {
  return (
    <div
      style={{
        position: 'absolute',
        flex: 1,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 12], fov: 50, near: 7, far: 15 }}
      >
        <fog attach='fog' args={['black', 0, 20]} />
        <pointLight position={[0, 10, -10]} intensity={1} />
        {/* <Box /> */}
        <Suspense fallback={<Html center className='loader'></Html>}>
          <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default LCanvas
