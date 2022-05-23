import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useUser from '../../../Hooks/useFirebase.js/useUser';
import CustomLink from './CustomLink';

const Navbar = () => {
    const { user, loading, handleLogout } = useUser();
    const { data: userDetails, isLoading } = useQuery(['userDetails', user.uid], () => {
        return fetch(`http://localhost:5000/api/users/profile/${user.email}`).then(res => res.json());
    })

    const img = 'https://api.lorem.space/image/face?hash=33791'

    const menuLinks = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/products'>Products</CustomLink></li>
        <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
    </>
    const MobileLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <section className="bg-neutral">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {MobileLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Mikrotik</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user.uid ? <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={userDetails?.avatar ? userDetails?.avatar : img} alt='' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/dashboard/profile' className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link to='/dashboard/settings'>Settings</Link></li>
                            <li><button onClick={handleLogout} >Logout</button></li>
                        </ul>
                    </div> : <li className='list-none'><Link className='bg-secondary px-3 py-1 rounded text-white shadow' to='/login'>login</Link></li>}

                </div>
            </div>
        </section>
    );
};

export default Navbar;