import React, { useState } from 'react'
import './SideBar.css'
import Rasp from '../../../assets/images/raspberry-pi.svg';

const SideBar = ({ option, setOption }) => {
    return (
        <div className='sidebar__main display__flex flex__flow__down display__flex__start'>
            <div className='sidebar__header'>
                <h2>SafeTracker</h2>
                <div className='vert__space__20'></div>
                <h1>Hey User 👋</h1>
            </div>
            <div className='sidebar__options'>
                <div className={(option === 1) ? 'option display__flex flex__space__between selected__option' : 'option display__flex flex__space__between'} onClick={() => setOption(1)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="13.5" stroke="#F1DAC4" strokeWidth="3" />
                    </svg>
                    <p>Potholes</p>
                </div>
                <div className={(option === 2) ? 'option display__flex flex__space__between selected__option' : 'option display__flex flex__space__between'} onClick={() => setOption(2)}>
                    <img src={Rasp} alt='rasp' width={'30px'}></img>
                    <p>Setup Raspberry Pi</p>
                </div>
                <div className={(option === 3) ? 'option display__flex flex__space__between selected__option' : 'option display__flex flex__space__between'} onClick={() => setOption(3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='#f1dac4'><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /></svg>
                    <p>Settings</p>
                </div>
                <div className='option display__flex flex__space__between'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill='#f1dac4'><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" /></svg>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
