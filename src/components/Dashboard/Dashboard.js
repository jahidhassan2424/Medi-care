import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    <h2 className='text-3xl font-bold text-purple-400'>Welcome to your Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link to={"/dashboard/review"}>Reviews</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;