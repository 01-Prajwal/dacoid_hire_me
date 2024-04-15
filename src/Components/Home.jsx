import React from 'react'
import Bars from './Bars'
import './home.css'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
    return (
        <div>
            <div className="nav" style={{color:'#7F7F7F'}}>
                <div className="nav1">

                <HomeIcon/>
                <div className="" style={{border:'2px solid #b9cffe'}}>
                    <ShowChartIcon style={{color:'#b9cffe'}}/>
                </div>
                </div>
                <div className="mid">
                    <SearchIcon/>
                </div>
                <div className="nav2">
                    <CameraAltIcon/>
                    <PersonIcon/>
                </div>
            </div>
            <h2 style={{ textAlign: 'center' }}>Workout Tracker</h2>
            <div className="">
                <Bars style={{ width: '370px' }} />
            </div>
            <div className="icon-wrap">
                <div className="both">
                    <div className="icon">

                        <WarningAmberIcon style={{ color: 'hsla(228, 100%, 81%, 1)', fontSize: '34px', fontWeight: 'bold' }} />
                    </div>
                    <div className="txt">
                        <span>You've burned fewer calories than yesterday. Time to get moving! </span>
                    </div>
                </div>
            </div>

            <div className="upcoming">
                <div className="up-heads">
                    <h3>upcoming workout</h3>
                    <span>See more</span>
                </div>
                <div className="up-content">
                    <img src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2957WOw3Q5OiVh0DNJ1fAGmxdBtGK5~4unUQlH6qrq90aLJPW1DCrE~ZmCOcAWds8SXIu7Fp~adlv9sa-WryKmHNw0X8jdrOQVN3-6covoBJkx34L3plirDGT820l2EYKkWOpqEc30JkU3KV~dHP3-4OYr~AEcPrYRza4iG78N5vMKdDnA1rGL0sZxV5~3V5RVGd9mvzV7zBJCbUINhlTYMhCHTtqWUSisdT910dafzal~Me56wI7kKnJK2gMFoQIRT1a1fjreu0SkwZhrMGgBtXqGGe~B18WfM3WC-BJUwXv1yOjwKuR5S1aaDo2z9HtVvVQuglEDHfkMOeHfBA__" alt="" style={{width:'60px'}} />

                    <div className="up-txt">
                        <span style={{fontWeight:'bold'}}>Full Body Workout</span>
                        <span>Today 3pm</span>
                    </div>
                    <div className="switch">
                        <ToggleOffIcon style={{color:'hsla(228, 100%, 81%, 1)',fontSize:'60px'}} />
                    </div>
                </div>
                <div className="up-content">
                    <img src="https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhn46Ue9HmubMYQN5iRC31dIo6RKGgsT6N9rxn6TDDY27qtHTRapVwthAt9qtCWzpfLK0WDnd-JPAVgBB24APu96mJO6-UcDPfxyL7yxaFXQJwQCWwry9Pw4lfgXyxKYwOb4cKC6GdgHe-7eisAlqN2xCB~Il4wP96ypAn87~KpmWJTyFcndSwsQSr1bHawBzf9u-0jHyYrsa9MadbmUv3fUQmyV7iqgXQF5KqBz43HovfqNVTipfAuuHwKpWwo-Vc-AGDqjX7GBAjzyH92qsN-HWdy47IPeVn8S2tBKRIoBXYT7DXVQYT68MHRCW83Ow9gQl9lIhW8SuS3dpd0XeA__" alt="" style={{width:'60px'}} />

                    <div className="up-txt">
                        <span style={{fontWeight:'bold'}}>Upper Body Workout</span>
                        <span>4 Feb 3.30 pm</span>
                    </div>
                    <div className="switch">
                        <ToggleOffIcon style={{color:'hsla(228, 100%, 81%, 1)',fontSize:'60px'}} />
                    </div>
                </div>
            </div>

            <div className="train">

                <div className="train-div">
                <div className="train-heads">

                    <span>full body workout</span>
                    <span>arms</span>
                    <span>chest</span>
                </div>

                    <img src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUnfWDBxBCh7EVxPNbDubqeRWNZ8WdDo8WW-dQlcer3wqvJ2dewWt5m2pvdrgLloWQxv8Ekm6PirETG-2KQs-Zxikr7OPSuy2w1TVU79mOWjRt2OQgnrvftYrDhTSb1-Z2XPufgpvvIjrsKv17pmeo3kb0q1-OVWJP3cwF27K9I0g5w6XwAz2olHowedMI3DJhX9oQyYs5wHzlvZypYgIOwFC0EGdRuDgcUSVFheupFT6vEK4KayiGgCN2TDfH0ZuoDBdCidY9fJuJSAcdoTPhFsMeBSseUsrtgk15HSXnWrS~pwhe6LmxHnkgcK-uAp8f~rYiowr23l24yn-lynHA__" alt="" style={{width:'100px'}} />
                </div>
            </div>

            <div className="schedule">
                <h2 style={{textAlign:'center',fontWeight:'bold'}}>Workout Schedule</h2>
                <div className="arrows">
                    <ArrowBackIosIcon/>

                <h3 style={{textAlign:'center'}}>Feb 2024</h3>
                    <ArrowForwardIosIcon/>
                </div>
                <div className="dates">
                    <div className="date">
                        <span>sun</span>
                        <div className="num">
                            5
                        </div>
                    </div>
                    <div className="date sp">
                        <span>mon</span>
                        <div className="num">
                            6
                        </div>
                    </div>
                    <div className="date">
                        <span>tue</span>
                        <div className="num">
                            7
                        </div>
                    </div>
                    <div className="date">
                        <span>wed</span>
                        <div className="num">
                            8
                        </div>
                    </div>
                    <div className="date">
                        <span>thu</span>
                        <div className="num">
                            9
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="time">
                        <h3>6:00 PM</h3>
                    </div>
                    <div className="time time1">
                        <h3>7:00 PM</h3>
                        <div className="div1">
                            Ab Workout,7.30 am
                        </div>
                    </div>
                    <div className="time">
                        <h3>8:00 AM</h3>
                    </div>
                    <div className="time time1">
                        <h3>9:00 AM</h3>
                        <div className="div2">
                            Upperbody Workout,9 am
                        </div>
                    </div>
                    <div className="time">
                        <h3>10:00 AM</h3>
                    </div>
                    <div className="time">
                        <h3>11:00 AM</h3>
                    </div>
                    <div className="time">
                        <h3>12:00 AM</h3>
                    </div>
                    <div className="time">
                        <h3>1:00 AM</h3>
                    </div>
                    <div className="time time1">
                        <h3>2:00 AM</h3>
                        <div className="div3">
                            Lowerbody Workout,3 pm
                        </div>
                    </div>
                    <div className="time">
                        <h3>3:00 AM</h3>
                    </div>
                    <div className="time time1">
                        <h3>4:00 AM</h3>
                        <div className="div4">
                            <AddIcon style={{color:'white'}} />
                        </div>

                    </div>
                    <div className="time">
                        <h3>5:00 AM</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home