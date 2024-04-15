import React from 'react'
import './goals.css'
import { Link } from 'react-router-dom'

const Goals = () => {
    return (
        <div className='goal'>
            <h2 id='goal-title'>What Are Your Goals</h2>
            <div className="goal-wrap">

            
            <div className="goal-check">
            <div className="single-goal" >

                <label for="vehicle1">Weight loss</label><br />
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            </div>
            <div className="single-goal">

                <label for="vehicle2"> muscle gain</label><br />
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            </div>
            <div className="single-goal">

                <label for="vehicle3"> general fitness</label><br />
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            </div>
            <div className="single-goal">

                <label for="vehicle3"> event-specific training</label><br />
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            </div>
            <div className="single-goal">

                <label for="vehicle3"> Mindfulness and mental health</label><br />
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            </div>
                {/* <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /> */}
            </div>
            </div>

            <Link to='/home'>

            <button className="button">
                confirm
            </button>
            </Link>
        </div>
    )
}

export default Goals