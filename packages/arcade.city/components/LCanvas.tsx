import { Canvas } from '@react-three/fiber'
import Box from './Box'

const LCanvas = ({ children }: any) => {
  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <Box />
    </Canvas>
  )
}

export default LCanvas
