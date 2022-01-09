import React, { useState } from "react";
import DeviceContext from "./DeviceContext";

const DeviceState = (props) => {
    const [devices, setDevices] = useState([]);
    const host = 'http://localhost:8080'

    // Getting user devices

    const UserDevices = async () => {
        const response = await fetch(`${host}/api/devices`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('safe-tracker-token')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            console.log('success');
            setDevices(json);
        } else {
            console.log('some error in fetching the data');
        }
    }

    return (
        <DeviceContext.Provider value={{ UserDevices, devices, setDevices }}>
            {props.children}
        </DeviceContext.Provider>
    )

}

export default DeviceState