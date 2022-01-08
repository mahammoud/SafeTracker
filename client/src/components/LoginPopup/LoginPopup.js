import React from 'react'
import TransLogo from '../../assets/logo/translogo.png';
import './LoginPopup.css';

const LoginPopup = ({ setLogin }) => {
    return (
        <div className='popup__login__main display__flex'>
            <div className='popup__body display__flex'>
                <div className='popup__body__left display__flex flex__flow__down flex__space__between display__flex__start'>
                    <h1>We help your city to become more developed.</h1>
                    <img src={TransLogo} alt='safetrackerlogo' width={'50px'}></img>
                </div>
                <div className='popup__body__right'>
                    <form className='login__form display__flex flex__flow__down display__flex__start flex__space__between'>
                        <h1>Log In</h1>
                        <div className='fields display__flex flex__flow__down display__flex__start'>
                            <input className='login__input__field' placeholder='Enter your Email'></input>
                            <input className='login__input__field' placeholder='Enter your Password'></input>
                            <button type='submit' className='login__button'>Log In</button>
                        </div>
                    </form>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#f1dac4' width="25" height="25" className='close__login__button' onClick={() => setLogin(false)}><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
            </div>
        </div>
    )
}

export default LoginPopup
