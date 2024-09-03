import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CreaCore | Portfolio",
	description: "Portfolio Template created using Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<Head>
					{/* Remix icon CDN  */}
					<link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />

				</Head>

				{children}

			</body>
		</html>
	);
}
