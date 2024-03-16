import { Navbar } from "@/components/organism/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Institute of Professional studies",
	description: "This is college Project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body className={inter.className}>
				<div className="relative flex items-center justify-center p-2 w-full">
					<Navbar />
				</div>
				{children}
			</body>
		</html>
	);
}
