import React, { useContext, useEffect, useState } from 'react'
import PotholeContext from '../../context/Potholes/PotholeContext';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import './styles.css'


const PotholesNearMePage = () => {

    const potholeContext = useContext(PotholeContext);
    const { GlobalPotholes, potholesGlobal } = potholeContext;

    const [coordinates, setCoordinates] = useState(null);
    const [potholes, setPotholes] = useState([]);

    useEffect(() => {
        GlobalPotholes();
        setPotholes(potholesGlobal);
    }, [coordinates]);

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
                <Map coordinates={coordinates} potholes={potholes} />
            </div>
        </div>
    )
}

export default PotholesNearMePage