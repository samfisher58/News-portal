import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
import { CgKey } from 'react-icons/cg';
const Navbar = () => {
	const {user, logOut}=use(AuthContext);
	const handleLogout=()=>{
		console.log("user trying to logout");
		logOut()
			.then(() => {
				alert("Logged out successful")
			})
			.catch(error => {
				console.log(error);
			});
	};
    return (
			<div className="flex justify-between items-center">
				<div className="">{user && user.email}</div>
				<div className="nav flex gap-5 text-accent">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/career">Career</NavLink>
				</div>
				<div className="flex gap-5">
					<img src={userIcon} alt="" />
					{user ? (
						<button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
					) : (
						<Link to="/auth/login" className="btn btn-primary px-7">
							Login
						</Link>
					)}
				</div>
			</div>
		);
};

export default Navbar;