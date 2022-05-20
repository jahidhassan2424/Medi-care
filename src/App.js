
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Appoinment from './components/Appoinment/Appoinment';
import Register from './components/Register/Register';
import Loading from './components/Shared/Loading';
import RequiredAuth from './components/Shared/RequiredAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppoinment from './components/Dashboard/MyAppoinment';
import MyReview from './components/Dashboard/MyReview';
import History from './components/Dashboard/History';
import Users from './components/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequiredAdmin from './components/Shared/RequireAdmin';
import AddDoctor from './components/Dashboard/AddDoctor';


function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/appoinment' element={
          <RequiredAuth>
            <Appoinment />
          </RequiredAuth>} >
        </Route>
        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>} >
          <Route index element={<MyAppoinment />}></Route>
          <Route path='/dashboard/review' element={<MyReview />}></Route>
          <Route path='/dashboard/history' element={<History />}></Route>
          <Route path='/dashboard/users' element={<RequiredAdmin><Users /></RequiredAdmin>}></Route>
          <Route path='/dashboard/add-doctor' element={<RequiredAdmin><AddDoctor /></RequiredAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/loading' element={<Loading />} ></Route>
        <Route path='/myappoinment' element={<MyAppoinment />} ></Route>

      </Routes >
      <br />
      <ToastContainer />

    </div >
  )
}

export default App;
