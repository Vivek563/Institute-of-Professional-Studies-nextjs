"use client";

import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";

export function Navbar() {
	return (
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
	);
}
