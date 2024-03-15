"use client";

import Image from "next/image";
import { FC } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "/public/logo.png";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const handlemenu = (e: React.MouseEvent<HTMLDivElement>) => {
		const navLinks = document.querySelector(".nav-links");
		if (navLinks) {
			(e.currentTarget as HTMLDivElement & { name?: string }).name =
				(e.currentTarget as HTMLDivElement & { name?: string }).name === "menu" ? "close" : "menu";
			navLinks.classList.toggle("top-[8%]");
		}
	};
	return (
		<>
			<nav className="flex justify-between items-center w-[100%] px-10 py-2 mx-auto">
				<div>
					<Image className="cursor-pointer " width={250} height={250} src={logo} alt="..." />
				</div>
				<div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
					<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
						<li>
							<a className="hover:text-gray-500" href="#">
								Products
							</a>
						</li>
						<li>
							<a className="hover:text-gray-500" href="#">
								Solution
							</a>
						</li>
						<li>
							<a className="hover:text-gray-500" href="#">
								Resource
							</a>
						</li>
						<li>
							<a className="hover:text-gray-500" href="#">
								Developers
							</a>
						</li>
						<li>
							<a className="hover:text-gray-500" href="#">
								Pricing
							</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					{/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button> */}
					<div onClick={handlemenu} className="text-3xl cursor-pointer md:hidden">
						<TiThMenu />
					</div>
					{/* <ion-icon onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon> */}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
