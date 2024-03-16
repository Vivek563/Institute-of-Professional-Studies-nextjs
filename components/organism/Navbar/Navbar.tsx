"use client";

import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
	const [nav, setNav] = useState(false);

	// Toggle function to handle the navbar's display
	const handleNav = () => {
		setNav(!nav);
	};

	// Array containing navigation items
	const navItems = [
		{ id: 1, text: "Home" },
		{ id: 2, text: "Company" },
		{ id: 3, text: "Resources" },
		{ id: 4, text: "About" },
		{ id: 5, text: "Contact" },
	];
	return (
		<>
			<div className="flex justify-between items-center w-full px-2">
				{/* Logo */}
				<h1 className="text-[1rem] capitalize md:text-2xl font-bold text-collegecolor">Institute of Professional studies</h1>
				{/* Desktop Views */}
				<div className=" hidden md:flex">
					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>Home</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab <MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>About</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									Undo <MenubarShortcut>⌘Z</MenubarShortcut>
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Center</MenubarTrigger>
							<MenubarContent>
								<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Student</MenubarTrigger>
							<MenubarContent>
								<MenubarItem inset>Edit...</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Gallery</MenubarTrigger>
							<MenubarContent>
								<MenubarItem inset>Edit...</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Admission</MenubarTrigger>
							<MenubarContent>
								<MenubarItem inset>Edit...</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Contact Us</MenubarTrigger>
							<MenubarContent>
								<MenubarItem inset>Edit...</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>

				{/* Mobile Navigation Icon */}
				<div onClick={handleNav} className="block md:hidden">
					{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
				</div>

				<ul
					className={
						nav ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r  bg-[#f4f6f4] ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
					}
				>
					{/* Mobile Logo */}
					<h1 className="w-full text-[1.2rem] font-bold text-collegecolor m-4">Institute of Professional Studies</h1>

					{navItems.map((item) => (
						<li key={item.id} className="p-4 hover:bg-collegecolor duration-300 cursor-pointer">
							{item.text}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
