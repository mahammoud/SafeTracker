import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const host = 'http://localhost:8080'

    // Login User

    const loginUser = async (email, password) => {
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
            console.log('success logging in');
            localStorage.setItem('safe-tracker-token', json.authToken);
        } else {
            console.log('wrong credentials');
        }
    }

    // Sign Up User

    const signUpUser = async (email, password, confirmPassword) => {
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
            console.log('success signing up');
            localStorage.setItem('safe-tracker-token', json.authToken);
        } else {
            console.log('something went wrong');
        }
    }

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, loginUser, signUpUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;