import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import Window from './Window/Window'
import './Dashboard.css'
const Dashboard = () => {
    const [option, setOption] = useState(1);
    return (
        <div className='dashboard__main display__flex'>
            <SideBar option={option} setOption={setOption} />
            <Window option={option} />
        </div>
    )
}

export default Dashboard
