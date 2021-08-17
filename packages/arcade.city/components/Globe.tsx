import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from './glsl/vertex.glsl'
import fragmentShader from './glsl/fragment.glsl'
import atmosphereVertexShader from './glsl/atmosphereVertex.glsl'
import atmosphereFragmentShader from './glsl/atmosphereFragment.glsl'

export const Globe = () => {
  const group: any = useRef()
  const globe = useTexture('/earthglow.png')

  const uniforms = {
    globeTexture: {
      value: globe,
    },
  }

  // const globe = useTexture('/globe.png')
  useFrame(({ clock, mouse }) => {
    group.current.rotation.y += 0.001
    //  = lerp(
    //   group.current.rotation.y,
    //   Math.PI / 5,
    //   0.005
    // )
  })

  return (
    <>
      <group
        ref={group}
        scale={[2, 2, 2]}
        position={[-0.15, 0, 0]}
        rotation={[-0.2, -0.7, 0]}
      >
        <mesh>
          <sphereGeometry args={[5, 50, 50]} />
          <shaderMaterial
            attach='material'
            uniforms={uniforms}
            // @ts-ignore
            fragmentShader={fragmentShader}
            // @ts-ignore
            vertexShader={vertexShader}
          />
        </mesh>
      </group>
      <group scale={[2, 2, 2]} position={[-0.15, 0, 0]}>
        <mesh scale={[1.03, 1.03, 1.03]}>
          <sphereGeometry args={[5, 50, 50]} />
          <shaderMaterial
            attach='material'
            // @ts-ignore
            fragmentShader={atmosphereFragmentShader}
            // @ts-ignore
            vertexShader={atmosphereVertexShader}
            // blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  )
}

// const fragmentShader = `
//     varying vec3 Normal;
//     varying vec3 Position;

//     uniform vec3 Ka;
//     uniform vec3 Kd;
//     uniform vec3 Ks;
//     uniform vec4 LightPosition;
//     uniform vec3 LightIntensity;
//     uniform float Shininess;

//     vec3 phong() {
//       vec3 n = normalize(Normal);
//       vec3 s = normalize(vec3(LightPosition) - Position);
//       vec3 v = normalize(vec3(-Position));
//       vec3 r = reflect(-s, n);

//       vec3 ambient = Ka;
//       vec3 diffuse = Kd * max(dot(s, n), 0.0);
//       vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

//       return LightIntensity * (ambient + diffuse + specular);
//     }

//     void main() {
//       vec3 blue = vec3(0.0, 0.0, 1.0);
//       gl_FragColor = vec4(blue*phong(), 1.0);
//   }`
// const vertexShader = `
//     varying vec3 Normal;
//     varying vec3 Position;

//     void main() {
//       Normal = normalize(normalMatrix * normal);
//       Position = vec3(modelViewMatrix * vec4(position, 1.0));
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `
// const uniforms = {
//   // phong material uniforms
//   Ka: { value: new THREE.Vector3(1, 1, 1) },
//   Kd: { value: new THREE.Vector3(1, 1, 1) },
//   Ks: { value: new THREE.Vector3(1, 1, 1) },
//   LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
//   LightPosition: { value: new THREE.Vector4(0.0, 2000.0, 0.0, 1.0) },
//   Shininess: { value: 200.0 },
// }
