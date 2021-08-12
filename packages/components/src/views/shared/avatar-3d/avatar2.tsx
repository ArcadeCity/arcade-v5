import React, { Suspense, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Canvas, useFrame } from '@react-three/fiber'
// import Galactic from './Galacticchic'
// import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Asset } from 'expo-asset'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef()

  // Set up state for the hovered and active state
  const [hovered] = useState(true)
  const [active] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh && mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh {...props} ref={mesh} scale={active ? [1.5, 1.5, 1.5] : [3, 3, 3]}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial
        attach='material'
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  )
}

export const Avatar = () => {
  console.log('FUCKIN AVATAR!')
  return (
    <View style={styles.container}>
      <Canvas
        onCreated={async ({ scene }) => {
          console.log('Canvas created')
          // const obj = await loadAsync(
          //   'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/2CylinderEngine/glTF-Embedded/2CylinderEngine.gltf'
          // )
          // const asset = Asset.fromModule(require('./claireidle.fbx'))
          const asset = Asset.fromModule(require('./girl/girlOBJ.obj'))
          await asset.downloadAsync()
          console.log('asset:', asset)
          const loader = new OBJLoader()
          loader.load(asset.uri, (obj) => {
            console.log('loaded?', obj)
            scene.add(obj)
          })
          // const obj = await loadAsync(require('./claireidle.fbx'))
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>{/* <Galactic /> */}</Suspense>
        <Box position={[0, 0, 0]} />
      </Canvas>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 200,
    height: 200,
    backgroundColor: 'transparent',
  },
})
