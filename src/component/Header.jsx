import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-5 mt-5">
				<img className="w-[450px]" src={logo} alt="" />
				<p className="text-accent">Journalism Without Fear or Favour</p>
				<p className="text-accent">
					<span className="text-black font-semibold">
						{format(new Date(), 'EEEE')}
					</span>
					{format(new Date(), ' MMMM dd, uuuu')}
				</p>
			</div>
		</div>
	);
};

export default Header;
