import React, { useEffect } from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken = 'pk.eyJ1IjoiZWluZmFjaCIsImEiOiJja3Nhamdwbm0wOHI5MndzMmthc3kyZWU4In0.5fsBKOGmiHzWFFNEoLCbgQ'

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [72.9080, 19.0790], 
          zoom: 3,
        });
      });

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`