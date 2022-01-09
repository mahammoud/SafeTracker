import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TransLogo from '../../assets/logo/translogo.png';
import UserContext from '../../context/User/UserContext';
import './LoginPopup.css';

const LoginPopup = ({ setLogin }) => {

    const history = useNavigate();

    const userContext = useContext(UserContext);

    const host = 'http://localhost:8080'

    const { loginUser, setLoggedIn } = userContext;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/login`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('safe-tracker-token', json.authToken);
            history('/dashboard');
            setLoggedIn(true);
        } else {
            console.log('wrong credentials');
            setLoggedIn(false);
            history('/');
        }
    }


    return (
        <div className='popup__login__main display__flex'>
            <div className='popup__body display__flex'>
                <div className='popup__body__left display__flex flex__flow__down flex__space__between display__flex__start'>
                    <h1>We help your city to become more developed.</h1>
                    <img src={TransLogo} alt='safetrackerlogo' width={'50px'}></img>
                </div>
                <div className='popup__body__right'>
                    <form className='login__form display__flex flex__flow__down display__flex__start flex__space__between' onSubmit={(e) => handleSubmit(e)}>
                        <h1>Log In</h1>
                        <div className='fields display__flex flex__flow__down display__flex__start'>
                            <input className='login__input__field' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}></input>
                            <input className='login__input__field' placeholder='Enter your Password' type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
