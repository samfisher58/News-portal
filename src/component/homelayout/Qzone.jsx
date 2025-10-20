import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"
const Qzone = () => {
    return (
			<div className="bg-base-200 p-3 rounded-xl flex flex-col justify-center items-center">
				<h2 className="font-bold">Q-Zone</h2>
				<div className="space-y-5">
					<img src={swimmingImg} alt="" />
					<img src={classImg} alt="" />
					<img src={playImg} alt="" />
				</div>
			</div>
		);
};

export default Qzone;