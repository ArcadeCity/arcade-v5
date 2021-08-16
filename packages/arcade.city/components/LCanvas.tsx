import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { Html, Stars } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import { Globe } from './Globe'

const LCanvas = () => {
  const router = useRouter()
  const location = router.pathname
  const props = useSpring({
    intensity: location === '/' ? 0.6 : 0.3,
    config: { duration: 1000 },
  })
  return (
    <>
      <div
        style={{
          position: 'absolute',
          flex: 1,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <Canvas shadows camera={{ position: [0, 25, 50], fov: 50 }}>
          <fog attach='fog' args={['black', 0, 20]} />
          <a.pointLight position={[5, 13, 15]} intensity={props.intensity} />
          {/* <directionalLight position={[15, 15, 15]} /> */}
          {/* <ambientLight /> */}
          <Suspense fallback={<Html center className='loader'></Html>}>
            {/* <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} /> */}
            <Globe />
          </Suspense>
          <Stars
            radius={100}
            depth={50}
            count={1500}
            factor={3}
            saturation={0}
          />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      {/* <Loader /> */}
    </>
  )
}

export default LCanvas
