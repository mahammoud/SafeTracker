import React from 'react'
import GoogleMapReact from 'google-map-react';
import './Map.css'

const potholes = [
    {
        lat: '30.6825695',
        lng: '76.8539225'
    },
    {
        lat: '30.6836497',
        lng: '76.8539245'
    },
    {
        lat: '30.6825595',
        lng: '76.8559225'
    },
    {
        lat: '30.6875595',
        lng: '76.8599225'
    },
]

const Map = ({ coordinates }) => {
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
                    potholes.map((hole, i) => {
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
