import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../../firebase.init';
import useAdmin from './../../hooks/useAdmin';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItem = <span className='flex justify-end items-center'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/appoinment">Appoinment</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>

        {user
            ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={handleSignOut} className="cursor-pointer px-4 py-3 hover:bg-slate-200 rounded-lg"  >SignOut</li>
            </>
            :
            <Link to="/login">Login</Link>
        }

    </span>
    return (
        <div className=''>
            <div className="navbar text-xl" data-theme="dark">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl  ">Medi-care</Link>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                    <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div >
        </div >
    );
};

export default Navbar;