"use client";

import { notFound, redirect, usePathname } from "next/navigation";
import type { Locale } from "@/Library/Globals";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	const url = locale === "ar" ? "/404" : "/en/404";
	const pageFullUrl: string = usePathname();
	if (!pageFullUrl.includes("/404")) {
		redirect(url);
	}
	return notFound();
};

export default Page;
