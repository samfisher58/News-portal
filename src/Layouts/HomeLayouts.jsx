import React from 'react';
import { Outlet, useNavigate  } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/homelayout/LeftAside';
import RightAside from '../component/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayouts = () => {
	const {state} = useNavigate();
    return (
			<div>
				<header>
					<Header></Header>
				</header>
				<section className="w-11/12 mx-auto flex justify-center items-center my-6 p-3 bg-base-200">
					<LatestNews></LatestNews>
				</section>
				<nav className="w-11/12 mx-auto my-3">
					<Navbar></Navbar>
				</nav>
				<main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-8 ">
					<aside className="col-span-3 sticky top-5 h-fit">
						<LeftAside></LeftAside>
					</aside>

					<section className="main col-span-6">
						{state =="loading" ? <Loading/> : <Outlet></Outlet> }
					</section>

					<aside className="col-span-3 sticky top-5 h-fit">
						<RightAside></RightAside>
					</aside>
				</main>
			</div>
		);
};

export default HomeLayouts;