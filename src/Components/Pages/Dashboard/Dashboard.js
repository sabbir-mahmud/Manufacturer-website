import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
import useUser from '../../../Hooks/useFirebase.js/useUser';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const { user } = useUser();
    const { admin, adminLoading } = useAdmin(user);

    if (adminLoading) {
        return <Loading />
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="my-3">
                    <h2 className='font-bold text-3xl '>Welcome to dashboard</h2>
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary lg:hidden">Open drawer</label>
                </div>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side mt-5">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    <li><Link to="/dashboard/settings">Edit Profile</Link></li>
                    {
                        admin ?
                            <>
                                <li><Link to="/dashboard/users">Users</Link></li>
                                <li><Link to="/dashboard/addProduct">add product</Link></li>
                            </> : <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to="/dashboard/myReviews">Add A Review</Link></li>

                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;