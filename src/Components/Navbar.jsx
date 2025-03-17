import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const lists = [
        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-100 font-bold" : ""}>Home</NavLink></li>,
        <li><NavLink to="/donation" className={({ isActive }) => isActive ? "bg-gray-100 font-bold" : ""}>Donation</NavLink></li>,
        <li><NavLink to="/campaigns" className={({ isActive }) => isActive ? "bg-gray-100 font-bold" : ""}>Campaigns</NavLink></li>,
        <li><NavLink to="/how-to-help" className={({ isActive }) => isActive ? "bg-gray-100 font-bold" : ""}>How To Help</NavLink></li>,
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "bg-gray-100 font-bold" : ""}>Dashboard</NavLink></li>,
    ];
    
    return (
        <div>
            
            <div className="navbar rounded-lg bg-blue-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                    </div>
                    <a className="btn shadow-2xl rounded-md bg-white btn-ghost text-xl">Donation Campaign</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {lists}
                    </ul>
                </div>
                {/* -- login button -- */}
                <div className="navbar-end">
                    {
                        user && user.email ? (
                            <button onClick={logOut} className="btn bg-blue-800 rounded-xl shadow-md text-white font-bold">LogOut</button>
                        ) : (
                        <Link to="/login" className="btn bg-blue-800 rounded-xl shadow-md text-white font-bold">Login</Link>
                        )}
                    
                </div>
            </div>



        </div>
    );
};

export default Navbar;