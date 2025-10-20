import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';


const SocialLogin = () => {
    return (
			<div>
				<h2 className="font-bold my-5"> Login with</h2>
				<div className="space-y-5 flex flex-col">
					<button className="btn btn-outline btn-primary p-3">
						<IoLogoGoogle size={24} />
						Login with Google
					</button>
					<button className="btn btn-outline btn-secondary p-3">
						<FaGithub size={24} />
						Login with Github
					</button>
				</div>
			</div>
		);
};

export default SocialLogin;