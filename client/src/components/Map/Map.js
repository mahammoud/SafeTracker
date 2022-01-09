import React from 'react'
import GoogleMapReact from 'google-map-react';
import './Map.css'

const Map = ({ coordinates, potholes }) => {
    return (
        <div className='map__container'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAFr1Kzn25Ncu1puYoQEMeHa4xt1eM7CO0' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
            >
                {
                    potholes?.map((hole, i) => {
                        return (
                            <div className='map__dot' lat={Number(hole.lat)} lng={Number(hole.lng)} key={i}>
                            </div>
                        )
                    })
                }
            </GoogleMapReact>
        </div>
    )
}

export default Map
