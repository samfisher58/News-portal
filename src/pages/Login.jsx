import React, { use, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
	const [error, setError] = useState("");
	const {signIn}=use(AuthContext)
	const location = useLocation();
	const navigate = useNavigate();
	const handleLogin=(e)=>{
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log({email, password});
		signIn(email,password)
			.then(result => {
				const user = result.user;
				navigate(`${location.state? location.state :"/"}`)
			})
			.catch(error => {
				const errorCode = error.code;
				// const errorMessage = error.message;
				// alert(errorMessage,errorCode)
				setError(errorCode)
			});


	};
    return (
			<div className="flex flex-col justify-center items-center min-h-screen">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleLogin} className="card-body">
						<fieldset className="fieldset">
							<h1 className="mb-5 text-3xl font-bold text-center">
								Login your account
							</h1>
							{/* email */}
							<label className="label">Email</label>
							<input
								name="email"
								type="email"
								className="input"
								placeholder="Email"
							/>
							{/* password */}
							<label className="label">Password</label>
							<input
								name="password"
								type="password"
								className="input"
								placeholder="Password"
							/>
							<div className="text-center mt-3">
								<a className="link link-hover">Forgot password?</a>
							</div>
							<p className="text-center">
								Don't Have An Account ?{' '}
								<NavLink
									className={'text-secondary font-bold'}
									to="/auth/register"
								>
									Register
								</NavLink>
							</p>

							{error && <p className="text-primary text-xs text-center">{error}</p>}

							<button type="submit" className="btn btn-primary mt-4">
								Login
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		);
};

export default Login;