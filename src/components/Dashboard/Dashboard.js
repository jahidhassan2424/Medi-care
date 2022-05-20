import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from './../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <h2 className='text-3xl font-bold text-purple-400'>Welcome to your Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={"/dashboard"}>My Appoinments</Link></li>
                        <li><Link to={"/dashboard/review"}>My Reviews</Link></li>
                        <li><Link to={"/dashboard/history"}>My History</Link></li>
                        {
                            admin
                            &&
                            <>
                                <li><Link to={"/dashboard/users"}>Users</Link></li>
                                <li><Link to={"/dashboard/add-doctor"}>Add a Doctor</Link></li>
                                <li><Link to={"/dashboard/manageDoctor"}>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;