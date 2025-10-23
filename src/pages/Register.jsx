import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const navigate =useNavigate();
	const { createUser, setUser, updateUser } = use(AuthContext);
	const handleRegister = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(name, photo, email, password);
		createUser(email, password)
			.then(result => {
				const user = result.user;
				// console.log(user);
				updateUser({ displayName: name, photoURL: photo })
					.then(() => {
						setUser({
							...user,
							displayName: name,
							photoURL: photo,
						});
                        navigate("/");
					})
					.catch(error => {
						// console.log(error);
                        setUser(user);
					});
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage, errorCode);
				// ..
			});
	};
	return (
		<div>
			<div className="flex flex-col justify-center items-center min-h-screen">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleRegister} className="card-body">
						<fieldset className="fieldset">
							<h1 className="mb-5 text-3xl font-bold text-center">
								Register your account
							</h1>
							{/* email */}
							<label className="label">Name</label>
							<input
								name="name"
								type="text"
								className="input"
								placeholder="Name"
							/>
							{/* photoUrl */}
							<label className="label">Photo URL</label>
							<input
								name="photo"
								type="text"
								className="input"
								placeholder="Photo Url"
							/>
							{/* password */}
							<label className="label">Password</label>
							<input
								name="password"
								type="password"
								className="input"
								placeholder="Password"
							/>
							{/* Email */}
							<label className="label">Email</label>
							<input
								name="email"
								type="text"
								className="input"
								placeholder="Email"
							/>
							<p className="text-center">
								Already Have An Account ?{' '}
								<NavLink
									className={'text-secondary font-bold'}
									to="/auth/login"
								>
									login
								</NavLink>
							</p>
							<button type="submit" className="btn btn-primary mt-4">
								Register
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
