import React, { useState } from 'react'
import './RegisterPage.css'
import TransLogo from '../../assets/logo/translogo.png';
import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    let ScrollLink = Scroll.Link;

    const history = useNavigate();

    const host = 'http://localhost:8080'


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ email, password, confirmPassword })
        })

        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('safe-tracker-token', json.authToken);
            history('/dashboard');
            console.log('success signing up');
        } else {
            console.log('something went wrong');
        }
        console.log('submit');
    }
    return (
        <div className='register__page__main display__flex'>
            <div className='register__page__left display__flex flex__flow__down display__flex__start flex__space__between'>
                <h2>SafeTracker</h2>
                <div className='conditions__register'>
                    <h1>What you need for Registering as a Tracker ?</h1>
                    <div className='vert__space__20'></div>
                    <ul className='list__conditions'>
                        <li className='list__items'>
                            <div className='list__item__div'>
                                <h2>Raspberry Pi</h2>
                            </div>
                        </li>
                        <li className='list__items'>
                            <div className='list__item__div'>
                                <h2>A 1080p Camera</h2>
                            </div>
                        </li>
                        <li className='list__items'>
                            <div className='list__item__div'>
                                <h2>Basic Linux Knowledge</h2>
                                <p>
                                    A basic linux knowlege includes how to operate terminal and basic navigation
                                </p>
                                <p>Free Tutorial</p>
                                <a href='https://www.youtube.com/watch?v=G23ef2D-qrY'>https://www.youtube.com/watch?v=G23ef2D-qrY</a>
                            </div>
                        </li>
                    </ul>
                    <div className='vert__space__20'></div>
                    <ScrollLink to="register__form"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                        <button className='to__down display__flex'>&#x2193;</button>
                    </ScrollLink>
                </div>
                <img src={TransLogo} alt='transparentlogo' width={'50px'}></img>
            </div>
            <div className='register__page__right display__flex' id="register__form">
                <form onSubmit={(e) => handleSubmit(e)} className='register__form'>
                    <h1>Register!!</h1>
                    <div className='vert__space__20'></div>
                    <input className='login__input__field' placeholder='Enter your Email' type={'email'} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className='login__input__field' placeholder='Enter your Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input className='login__input__field' placeholder='Confirm Password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <button className='login__button'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
