import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { useRouter } from 'next/router'
import { Html, Loader } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import Model from './Model'

const LCanvas = () => {
  const router = useRouter()
  console.log(router)
  const location = router.pathname
  // const intensity = router.pathname === '/' ? 1 : 5
  const props = useSpring({
    intensity: location === '/' ? 1 : 15,
  })
  console.log(props.intensity)
  return (
    <>
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
          <a.pointLight position={[0, 10, -10]} intensity={props.intensity} />
          {/* <Box /> */}
          <Suspense fallback={<Html center className='loader'></Html>}>
            <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
          </Suspense>
        </Canvas>
      </div>
      {/* <Loader /> */}
    </>
  )
}

export default LCanvas
