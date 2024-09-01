import React from "react";
import { Locale } from "@/Library/Globals";
import ServicesHeroSection from "@/Library/_Pages/Services/ServicesHeroSection/ServicesHeroSection";

const Page = ({ params }: { params: Locale }) => {
	const locale = params.locale;
	return <ServicesHeroSection locale={locale} />;
};

export default Page;
