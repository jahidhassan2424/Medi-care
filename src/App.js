
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Banner from './components/Home/Banner';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        {/* <Route path='/about' element={<About />} ></Route>
        <Route path='/about' element={<About />} ></Route> */}
      </Routes>

    </div>
  )
}

export default App;
