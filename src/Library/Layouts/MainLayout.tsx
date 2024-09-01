"use client";
import React from "react";
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
			<body >
				<Header locale={locale} />
				<main style={{ width: '', margin: 'auto' }}>{children}</main>
				<Footer locale={locale} />
			</body>
		</StyledComponentsRegistry>
	);
};

export default MainLayout;
