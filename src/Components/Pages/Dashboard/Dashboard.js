import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="my-3">
                    <h2 className='font-bold text-3xl '>Welcome to dashboard</h2>
                </div>
                <Outlet></Outlet>

                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
            </div>
            <div className="drawer-side lg:w-48 mt-5 mr-9">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to="/dashboard/myReviews">Add A Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;