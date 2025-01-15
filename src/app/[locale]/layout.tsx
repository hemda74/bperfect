import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";
import { getLocale } from "next-intl/server";
import React from "react";
import { getLangDir } from "rtl-detect";
import MainLayout from "@/Library/Layouts/MainLayout";

const poppins: NextFontWithVariable = Poppins({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--sans-serif-font",
});

export const metadata: Metadata = {
	title: "Bperfect",
	description:
		"A wide range of services · Hair Treatments · Body Reshaping · Laser Hair Removal · Skin Treatments · Fillers & Botox · Hair Treatments · Body Reshaping · Laser Hair Removal",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	// eslint-disable-next-line
	const locale: any = await getLocale();
	const direction: "ltr" | "rtl" = getLangDir(locale);

	return (
		<html className={poppins.variable} lang={locale} dir={direction}>
			<MainLayout locale={locale}>{children}</MainLayout>
		</html>
	);
}
