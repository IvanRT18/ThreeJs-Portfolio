import React, { useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'

const MyGlobe = () => {
    const globeEl = useRef()

    useEffect(() => {
        if (globeEl.current) {
            // Configuramos la vista inicial para que se centre en Estados Unidos
            // lat, lng y altitude pueden ajustarse según tus necesidades
            globeEl.current.pointOfView({ lat: 22.3003, lng: -100.3106, altitude: 1.5 }, 0)
        }
    }, [])

    return (
        <Globe
            ref={globeEl}
            height={326}
            width={326}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[
                {
                    lat: 22.3003,
                    lng: -100.3106,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                },
            ]}
        />
    )
}

export default MyGlobe
