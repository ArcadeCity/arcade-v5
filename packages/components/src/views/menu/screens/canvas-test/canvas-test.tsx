// @ts-nocheck
import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

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

export const CanvasTest = () => {
  return (
    <View style={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 200,
    maxHeight: 300,
    backgroundColor: 'black',
  },
})
