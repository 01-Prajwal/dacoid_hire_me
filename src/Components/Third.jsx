import React from 'react'
import './third.css'
import facebook from '../face.png'
import google from '../google.png'
import { Link } from 'react-router-dom'
const Third = () => {
    return (
        <div className='third'>
            <div className="form">
        
                <div className="subtitle"> create your account!</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " />
                 
                    <label htmlFor="firstname" className="placeholder">
                        First name
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" " />
               
                    <label htmlFor="lastname" className="placeholder">
                        Last name
                    </label>
                </div>
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
                </div>
                <div className="checkbox">

                <input type="checkbox" className="check" name="check" value="Bike" />
                <label for="vehicle1" style={{width:"100%"}}> By proceeding, I agree to all  <span className='span1'>T&C</span>  and  <span className='span1'>Privacy Policy</span></label><br />
                </div>
                <Link  to='/home' type="text" className="submit">
                    Create an Account
                </Link>

            </div>
            <div className="misc">
                <span className='or'></span>
                <div className='text-or'>or</div>
                <span className='or'></span>
            </div>
            <div className="logos">
                <div className="img-container">
                    <img src={google}  alt="" />
                </div>
                <div className="img-container">
                    <img src={facebook} alt="" />
                </div>


            </div>
            <div className="log-in">
                <span>Already have an account?</span> 
                <Link to='/login'>

                 <span className='span1'> Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Third