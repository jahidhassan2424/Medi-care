import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItem = <span className='flex justify-center items-center'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/appoinment">Appoinment</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
            {user
                ?
                <button onClick={() => signOut(auth)} className="btn btn-ghost ">SignOut</button>
                // <Link onClick={signOut(auth)} >Signout</Link>

                :
                <Link to="/login">Login</Link>
            }</li>
        <li></li>
    </span>
    return (
        <div className=''>
            <div className="navbar text-xl" data-theme="dark">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl  ">Medi-care</Link>
                </div>
                <div className="navbar-end hidden lg:flex   ">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;