import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

const Basketball = (props) => {
    const { nodes, materials } = useGLTF('/models/basketball.glb')
    const ballRef = useRef()
    const [isBouncing, setIsBouncing] = useState(false)

    // Rota continuamente el balón en el eje X mientras no se esté animando el rebote
    useFrame((state, delta) => {
        if (!isBouncing && ballRef.current) {
            ballRef.current.rotation.x += delta
        }
    })

    const handleClick = () => {
        // Evitamos iniciar una nueva animación si ya se está ejecutando una
        if (isBouncing) return
        setIsBouncing(true)

        const tl = gsap.timeline({
            onComplete: () => {
                setIsBouncing(false)
            }
        })

        // Animamos la posición: elevamos el balón y luego lo regresamos
        tl.to(ballRef.current.position, {
            y: 2,
            duration: 0.3,
            ease: 'power2.out'
        }).to(ballRef.current.position, {
            y: 0,
            duration: 0.3,
            ease: 'bounce.out'
        })
    }

    return (
        <group {...props} dispose={null} ref={ballRef} onClick={handleClick}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Basketball_0.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Basketball_1.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/basketball.glb')

export default Basketball
