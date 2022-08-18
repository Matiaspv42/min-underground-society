import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
export default function Box(){
  const boxMesh = useRef()
    useFrame(({clock}) => {
      const time = clock.getElapsedTime()
      boxMesh.current.rotation.y = time*0.1
    })
    return(
        <mesh ref={boxMesh}
        rotation={[Math.PI / 4, Math.PI / 4,Math.PI / 4]}
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
    )
}