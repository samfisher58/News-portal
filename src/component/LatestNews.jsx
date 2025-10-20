import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
			<div className="flex items-center">
				<p className="text-base-100 bg-secondary font-bold p-3"> Latest</p>

				<Marquee className='gap-5'pauseOnHover={true} speed={60}>
					<p className="font-semibold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Accusantium, saepe! Numquam in aspernatur voluptas pernatur voluptas
						pernatur voluptas...
					</p>
					<p className="font-semibold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Accusantium, saepe! Numquam in aspernatur voluptas pernatur voluptas
						pernatur voluptas...
					</p>
					<p className="font-semibold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Accusantium, saepe! Numquam in aspernatur voluptas pernatur voluptas
						pernatur voluptas...
					</p>
				</Marquee>
			</div>
		);
};

export default LatestNews;