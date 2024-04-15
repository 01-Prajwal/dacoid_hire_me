import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import './nav.css'

const Navbar = () => {
  return (
    <div className="nav-wrap">

    <div className='navbar'>
        <div className="clock">
            <h2>9:41</h2>
        </div>
        <div className="toggle">
            <SignalCellularAltIcon/>
            <WifiIcon/>
            <BatteryFullIcon/>
    </div> 
        </div>
    </div>
  )
}

export default Navbar