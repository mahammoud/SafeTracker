import React, { useState } from "react";
import PotholeContext from "./PotholeContext";

const PotholeState = (props) => {

    const [potholesGlobal, setPotholesGlobal] = useState([]);
    const [potholesUser, setPotholesUser] = useState([]);
    const host = 'http://localhost:8080'

    // Getting Global potholes

    const GlobalPotholes = async () => {
        const response = await fetch(`${host}/api/pothole`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('safe-tracker-token')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            setPotholesGlobal(json);
        } else {
            console.log('some error in fetching the data');
        }
    }

    // Getting User potholes

    const UserPotholes = async () => {
        const response = await fetch(`${host}/api/pothole`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('safe-tracker-token')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            setPotholesUser(json);
        } else {
            console.log('some error in fetching the data');
        }
    }

    return (
        <PotholeContext.Provider value={{ potholesGlobal, potholesUser, GlobalPotholes, UserPotholes }}>
            {props.children}
        </PotholeContext.Provider>
    )

}

export default PotholeState;