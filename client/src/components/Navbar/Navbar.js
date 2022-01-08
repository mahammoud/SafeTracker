import React, { useState } from 'react'
import LogoMain from '../../assets/logo/Logo1.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import LoginPopup from '../LoginPopup/LoginPopup'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <div className='navbar__main display__flex flex__space__between'>
            <div className='navbar__left display__flex'>
                <Link to='/' className='display__flex' style={{ textDecoration: 'none', color: '#f1dac4' }}>
                    <img src={LogoMain} alt='safetracker' width={'50px'}></img>
                    <div className='horz__space__10'></div>
                    <h2 >SafeTracker</h2>
                </Link>
            </div>
            <div className='navbar__mid display__flex'>
                <Link to='/potholesnm' style={{ textDecoration: 'none' }} className='nav__links'>
                    <p>Potholes near you</p>
                </Link>
                <Link to='/analyze' style={{ textDecoration: 'none' }} className='nav__links'>
                    <p>Analyze the road</p>
                </Link>
            </div>
            <div className='navbar__right display__flex'>
                <button className='login__button__nav desk' onClick={() => setLogin(true)}>Log In</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#f1dac4' width="25" height="25" onClick={() => setNav(true)} className='burger'><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" /><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" /></g></g></svg>
            </div>
            <div className={(nav) ? 'display__flex mobile__nav translated' : ' display__flex mobile__nav'}>
                <Link to='/potholesnm' style={{ textDecoration: 'none' }} className='nav__links'>
                    <p>Potholes near you</p>
                </Link>
                <Link to='/analyze' style={{ textDecoration: 'none' }} className='nav__links'>
                    <p>Analyze the road</p>
                </Link>
                <button className='login__button__nav' onClick={() => { setLogin(true); setNav(false) }}>Log In</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#f1dac4' width="25" height="25" className='close__nav__button' onClick={() => setNav(false)}><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
            </div>
            {
                (login) ? (
                    <LoginPopup setLogin={setLogin} />
                ) : ''
            }
        </div>
    )
}

export default Navbar
