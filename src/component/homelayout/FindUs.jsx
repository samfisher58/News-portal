import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
			<div>
				<h2 className="font-bold my-5">Find Us on</h2>
				<div className="">
					<div className="join join-vertical w-full">
						<button className="btn join-item bg-base-100 justify-start"> <FaFacebook></FaFacebook > FaceBook</button>
						<button className="btn join-item bg-base-100 justify-start"> <FaTwitter></FaTwitter > Twitter</button>
						<button className="btn join-item bg-base-100 justify-start"> <FaInstagram></FaInstagram >  instagram</button>
					</div>
				</div>
			</div>
		);
};

export default FindUs;