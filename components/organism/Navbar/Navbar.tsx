"use client";

import { SheetBar } from "@/components/molecule/Sheet";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
	const [nav, setNav] = useState(false);

	// Toggle function to handle the navbar's display
	const handleNav = () => {
		setNav(!nav);
	};

	// Array containing navigation items
	const navItems = [
		{ id: 1, text: "Home" },
		{ id: 2, text: "About" },
		{ id: 3, text: "Center" },
		{ id: 4, text: "Student" },
		{ id: 5, text: "Gallery" },
		{ id: 6, text: "Admission" },
		{ id: 7, text: "Contact Us" },
	];
	return (
		<>
			<div className="flex justify-between items-center w-full px-2">
				{/* Logo */}
				<Image width={250} height={250} src={logo} alt="logo" />
				{/* Desktop Views */}
				<div className="hidden md:flex">
					<Menubar>
						<MenubarMenu>
							<Link href={"/"}>
								<MenubarTrigger>Home</MenubarTrigger>
							</Link>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>About</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>About UOA</MenubarItem>
								<MenubarItem>About IPS</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Center</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>Centre of Computer Education</MenubarItem>
								<MenubarItem>Centre of Fashion && Design Technology</MenubarItem>
								<MenubarItem>Centre of Food Technology</MenubarItem>
								<MenubarItem>Centre of Media Studies</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Student</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>Syllabus</MenubarItem>
								<MenubarItem>Library</MenubarItem>
								<MenubarItem>Admit Card</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Gallery</MenubarTrigger>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Admission</MenubarTrigger>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Contact Us</MenubarTrigger>
						</MenubarMenu>
					</Menubar>
				</div>

				{/* <div className="hidden md:block">
					<Button>Login</Button>
				</div> */}

				{/* Mobile Navigation Icon */}
				<div className="md:hidden">
					<SheetBar />
				</div>
			</div>
		</>
	);
}
