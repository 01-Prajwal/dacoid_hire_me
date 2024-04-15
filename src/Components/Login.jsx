import React from 'react'
import facebook from '../face.png'
import google from '../google.png'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div>
                    <div className="form">
        <div className="wrap-login">
        <div className="subtitle"> Welcome  Back</div>
        <div className="flex">
        <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            
            <label htmlFor="email" className="placeholder">
                Email
            </label>
        </div>
        <div className="input-container ic2">
            <input id="password" className="input" type="placeholder" placeholder=" " />
      
            <label htmlFor="password" className="placeholder">
                Password
            </label>
            <div className="checkbox">
            Forgot Password ?
        </div>
        </div>
        </div>
</div>
        <Link to='/goals'>

        <button type="text" className="submit">
            Sign   In
        </button>
        </Link>

    </div>
    <div className="misc">
        <span className='or'></span>
        <div className='text-or'>or</div>
        <span className='or'></span>
    </div>
    <div className="logo">
        <div className="img-container">
            <img src={google}  alt="" />
        </div>
        <div className="img-container">
            <img src={facebook} alt="" />
        </div>


    </div>
    <div className="log-in" style={{textAlign: "center"}}>
        <span>Dont have an account?</span> 
        <Link to='/signin'>

         <span className='span1'> create an account</span>
        </Link>
    </div>
    </div>
  )
}

export default Login