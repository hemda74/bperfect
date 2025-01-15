"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import Links from "../_Pages/Links/Links";
import { Locale } from "@/Library/Globals";
import { GlobalStyle } from "@/Library/Globals/Globals";
import StyledComponentsRegistry from "@/Library/Globals/Registery";
import Footer from "@/Library/Shell/Footer/Footer";
import Header from "@/Library/Shell/Header/Header";

const MainLayout = ({
	children,
	locale,
}: Readonly<
	{
		children: React.ReactNode;
	} & Locale
>) => {
	return (
		<StyledComponentsRegistry>
			<GlobalStyle />
			<body>
				<Header locale={locale} />
				<main>{children}</main>
				<Footer locale={locale} />
				{/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
				<Links />
				<Toaster />
			</body>
		</StyledComponentsRegistry>
	);
};

export default MainLayout;
