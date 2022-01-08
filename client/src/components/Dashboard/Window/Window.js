import React, { useState, useEffect } from 'react'
import Map from '../../Map/Map'
import './Window.css'

const Window = ({ option }) => {
    return (
        <div className='window__main'>
            {
                (option === 1) ? <PotholeSection option={option} /> : (
                    (option === 2) ? <SetupSection /> : <SettingSection />
                )
            }
        </div>
    )
}

const PotholeSection = ({ option }) => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    const potholes = [
        {
            lat: '30.6825695',
            lng: '76.8539225',
            id: 'WEQR10002010'
        },
        {
            lat: '30.6836497',
            lng: '76.8539245',
            id: 'WEQR10002011'
        },
        {
            lat: '30.6825595',
            lng: '76.8559225',
            id: 'WEQR10002012'
        },
        {
            lat: '30.6875595',
            lng: '76.8599225',
            id: 'WEQR10002013'
        },
    ]


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
            console.log({ lat: latitude, lng: longitude });
        })
    }, [coordinates, option])

    return (
        <div className='pothole__section__main'>
            <h2>Potholes spotted by you</h2>
            <Map coordinates={coordinates} />
            <div className='potholes display__flex flex__flow__down'></div>
            {
                potholes.map((hole, i) => {
                    return (
                        <div className='hole__bar display__flex display__flex__start flex__space__between' key={i}>
                            <h4>ID : {hole.id}</h4>
                            <p>LOC : {hole.lat}/{hole.lng}</p>
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.87795 16C1.87795 17.1 2.75599 18 3.82915 18H11.634C12.7071 18 13.5852 17.1 13.5852 16V6C13.5852 4.9 12.7071 4 11.634 4H3.82915C2.75599 4 1.87795 4.9 1.87795 6V16ZM4.9706 8.17C5.35109 7.78 5.96571 7.78 6.3462 8.17L7.73155 9.59L9.11691 8.17C9.49739 7.78 10.112 7.78 10.4925 8.17C10.873 8.56 10.873 9.19 10.4925 9.58L9.10715 11L10.4925 12.42C10.873 12.81 10.873 13.44 10.4925 13.83C10.112 14.22 9.49739 14.22 9.11691 13.83L7.73155 12.41L6.3462 13.83C5.96571 14.22 5.35109 14.22 4.9706 13.83C4.59012 13.44 4.59012 12.81 4.9706 12.42L6.35596 11L4.9706 9.58C4.59012 9.2 4.59012 8.56 4.9706 8.17ZM11.1462 1L10.4535 0.29C10.2779 0.11 10.0242 0 9.77056 0H5.69255C5.43889 0 5.18523 0.11 5.00962 0.29L4.31695 1H1.87795C1.34136 1 0.902344 1.45 0.902344 2C0.902344 2.55 1.34136 3 1.87795 3H13.5852C14.1217 3 14.5608 2.55 14.5608 2C14.5608 1.45 14.1217 1 13.5852 1H11.1462Z" fill="#F1DAC4" />
                            </svg>

                        </div>
                    )
                })
            }
        </div>
    )
}

const SetupSection = () => {
    return (
        <div className='pothole__section__main'>
            <h2>Setup section</h2>
            <div className='step__comp'>
                <h2>Step 1:</h2>
                <p>After you obtain your raspberry pi and your pi camera, it's time to set them up!
                    To do this, click on the following link(To be added once abbass finishes the app) which will download the application on your device.</p>
                <a href='www.google.co.in'>Download Link</a>
            </div>
            <div className='step__comp'>
                <h2>Step 2:</h2>
                <p>Next, you need to configure the application to launch on startup. Simply just copy the following commands in your terminal:</p>
                <div className='code__block'>
                    sudo nano /etc/rc.local
                </div>
                <div className='code__block'>
                    sudo python /home/pi/object_detection/program.py
                </div>
                <p>&(make sure to extract the zip file to the correct directory)</p>
            </div>
            <div className='step__comp'>
                <h2>Step 3:</h2>
                <p>Reboot the system, and once the raspberry pi starts up, the application will be up and running!</p>
            </div>
            <div className='step__comp'>
                <h2>Step 4:</h2>
                <p>Open your mobile's hotspot data and share your mobile data with the raspberry pi, and by that your little tracker will be up and running!</p>
            </div>
            <div className='code__block'>
                <h3>We will soon be releasing pre-configured Raspberry Devices:</h3>
                <p>That will require no saperate mobile connection</p>
                <p>Will be in proper shape ready to mount on any vehicle</p>
            </div>
        </div>
    )
}

const SettingSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='settings__section__main'>
            <h2>Setting section</h2>
            <div className='vert__space__20'></div>
            <div className='deregister__section display__flex flex__flow__down display__flex__start'>
                <h3>Deregister your device</h3>
                <p>You can register again anytime using Secret code in your (Setup your Raspberry Pi) Section</p>
                <div className='vert__space__20'></div>
                <button className='primary__button'>Deregister</button>
            </div>
            <div className='edit__section'>
                <h3>Edit Profile</h3>
                <p>After editing your email or password you need to re login into your raspberry pi device</p>
                <form onSubmit={(e) => handleSubmit(e)} className='display__flex flex__flow__down display__flex__start'>
                    <input placeholder='Enter your Name' type={'text'}></input>
                    <input placeholder='Enter your Email' type={'email'}></input>
                    <input placeholder='Enter your Password' type={'text'}></input>
                    <button className='primary__button edit__button'>Edit</button>
                </form>
            </div>
            <div className='delete__account__section'>
                <p>After editing your email or password you need to re login into your raspberry pi device</p>
                <button className='primary__button edit__button'>Delete Account</button>
            </div>
        </div>
    )
}

export default Window
