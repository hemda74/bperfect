import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";
import { getLocale } from "next-intl/server";
import React from "react";
import { getLangDir } from "rtl-detect";
import MainLayout from "@/Library/Layouts/MainLayout";
import { Toaster } from "react-hot-toast";

const poppins: NextFontWithVariable = Poppins({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--sans-serif-font",
});

export const metadata: Metadata = {
	title: "Bperfect website",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dolore doloremque et, exercitationem tmolestias natus quis sapiente. Asperiores blanditiis deleniti dolores minima modi molestiae nam perferendis possimus tempora unde!",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	// eslint-disable-next-line
	const locale: any = await getLocale();
	const direction: "ltr" | "rtl" = getLangDir(locale);

	return (
		<html className={poppins.variable} lang={locale} dir={direction}>
			<MainLayout locale={locale}>{children}</MainLayout>
			<Toaster />
		</html>
	);
}
