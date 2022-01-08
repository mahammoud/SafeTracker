import React, { useEffect, useState } from 'react'
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import './styles.css'
const PotholesNearMePage = () => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
        console.log(coordinates);
    }, [coordinates])
    return (
        <div className='near__me'>
            <Navbar />
            <div className='near__me__main display__flex flex__flow__down'>
                <h2>Dots represent potholes</h2>
                <Map coordinates={coordinates} />
            </div>
        </div>
    )
}

export default PotholesNearMePage