
import './App.css';
import First from './Components/First.jsx';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Second from './Components/Second.jsx';
import Third from './Components/Third.jsx';
import Login from './Components/Login.jsx';
import Goals from './Components/Goals.jsx';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Navbar/>
    <Routes>

    <Route path='/' element = {<First/>}/>
    <Route path='/second' element = {<Second/>}/>
    <Route path='/signin' element = {<Third/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/goals' element = {<Goals/>}/>
    <Route path='/home' element = {<Home/>}/>

    {/* <First/> */}

    </Routes>
    {/* </Navbar> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
