import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainImage from '../../assets/images/MapMain.png'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing__page__master'>
            <Navbar />
            <div className='landing__page__main display__flex'>
                <div className='landing__page__left'>
                    <img src={MainImage} alt='main landing page' className='landing__image__main'></img>
                </div>
                <div className='landing__page__right'>
                    <h1>Welcome to the SafeTracker..</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut posuere lacus, ac iaculis enim. In tristique, odio ut rhoncus consectetur, lorem leo congue erat, sit amet pharetra eros nunc ac sem. Curabitur volutpat nulla metus, bibendum tincidunt velit tempor nec.
                        Nunc ac viverra neque, tincidunt rhoncus diam. Aliquam consequat, lacus in congue lobortis, mi leo gravida nisl, eget imperdiet magna dolor pellentesque diam. Nulla eu ligula eget metus auctor tincidunt.</p>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <button className='primary__button display__flex register__button'>
                            <p>Register Yourself</p>
                            <div className='horz__space__10'></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)"><path d="M0 6h16M10 0l6 6-6 6" /></g></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
