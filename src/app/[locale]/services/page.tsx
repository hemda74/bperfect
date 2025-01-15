import { Metadata } from "next";

import React from "react";
import { Locale } from "@/Library/Globals";
import ServicesHeroSection from "@/Library/_Pages/Services/ServicesHeroSection/ServicesHeroSection";
export const metadata: Metadata = {
	title: "Skin and Hair Treatments - Bperfect",
	description:
		"Experience premium skin and hair treatments at Bperfect, tailored to meet your beauty needs.",
};
const Page = ({ params }: { params: Locale }) => {
	const locale = params.locale;
	return <ServicesHeroSection locale={locale} />;
};

export default Page;
