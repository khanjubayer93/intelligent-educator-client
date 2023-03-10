import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-10' src="https://cutt.ly/lN30OuE" alt="" />
                </Link>
                <Link className="normal-case text-xl font-bold ml-2">INTELLEGENT EDUCATOR</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Item 3</a></li>
                    <li>
                        <Link>
                            Item2
                        </Link>

                    </li>
                    <li><Link to='/home'>Home</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleLogout} className="btn btn-outline btn-warning">logout</button>
                        :
                        <>
                            <Link to='/login' className='mr-5'>
                                <button className="btn btn-outline">Login</button>
                            </Link>
                            <Link to='/signup'>
                                <button className="btn btn-active">SignUP</button>
                            </Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Header;