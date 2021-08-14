import { useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import lerp from 'lerp'
// import Model from '../components/Model'
// import { Canvas } from '../components/Canvas'

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arcade City</title>
        <meta name='description' content='Peer-to-peer everything.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
          <pointLight position={[0, 10, -10]} intensity={7} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
        </Canvas>
      </div>

      <main className={styles.main}>
        Be right back.
        <a
          href='https://github.com/ArcadeCity/arcade'
          className={styles.sneak}
          target='_blank'
          rel='noreferrer'
        >
          Sneak peek
        </a>
      </main>
    </div>
  )
}

export default Home

function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('/graces-draco.glb')

  useFrame(({ clock, mouse }) => {
    group.current.rotation.y = lerp(
      group.current.rotation.y,
      mouse.x * (Math.PI / 5),
      0.005
    )
  })

  console.log('nodes:', nodes)

  if (!nodes) return <></>

  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Node_3.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.2, 0.224, 0.224]}
        >
          <meshStandardMaterial
            attach='material'
            roughness={0.9}
            metalness={0.5}
            color='#474747'
          />
        </mesh>
        <Lights />
      </group>
    </group>
  )
}

function Lights() {
  const groupL = useRef()
  const groupR = useRef()
  const front = useRef()

  useFrame(({ clock, mouse }) => {
    groupL.current.rotation.y = lerp(
      groupL.current.rotation.y,
      -mouse.x * (Math.PI / 2),
      0.1
    )
    groupR.current.rotation.y = lerp(
      groupR.current.rotation.y,
      mouse.x * (Math.PI / 2),
      0.1
    )
    front.current.position.x = lerp(front.current.position.x, mouse.x * 12, 0.4)
    front.current.position.y = lerp(
      front.current.position.y,
      7 + mouse.y * 4,
      0.4
    )
  })

  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
      </group>
      <spotLight
        castShadow
        ref={front}
        penumbra={1}
        angle={Math.PI / 3}
        position={[0, 0, 8]}
        distance={11}
        intensity={8}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  )
}
