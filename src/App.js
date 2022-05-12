
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Banner from './components/Home/Banner';
import Footer from './components/Shared/Footer';
import Appoinment from './components/Appoinment/Appoinment';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/appoinment' element={<Appoinment />} ></Route>
        {/* <Route path='/about' element={<About />} ></Route>
        <Route path='/about' element={<About />} ></Route> */}
      </Routes>
      <br />


    </div>
  )
}

export default App;
