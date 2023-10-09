import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            console.log('User Sign-out successful.');
            }).catch((error) => {
            console.error (error)
            });
    }

    const navLinks = <>
        <li><NavLink to="/" className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-none hover:border-white">Home</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/offers" className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-none hover:border-white">Offers</NavLink></li>
                <li><NavLink to="/profile" className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-none hover:border-white">Profile</NavLink></li>
            </>
            : 
            <>
                
            </>
        }
        <li><NavLink to="/contact" className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-none hover:border-white">Contact</NavLink></li>
        {/* <li><NavLink to="/offers">Offers</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li> */}
        {/* <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li> */}
    </>


    return (
        <div className="navbar sticky inset-x-0 top-0 z-50 text-white bg-slate-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-10" src="https://i.ibb.co/w0cTWXw/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={userDefaultPic} /> */}
                    </div>
                </label>
                {
                    user ? <>
                        <span>{user.displayName}</span>
                        <a onClick={handleSignOut} className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Log Out</a>
                    </>
                    : 
                    <>
                        <Link to="/login"><button className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Login</button></Link>
                        <Link to="/register"><button className="bg-transparent hover:bg-text-theme-light text-theme-light hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-theme-light hover:border-white">Register</button></Link> 
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;