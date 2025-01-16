import React from "react";
import { Metadata } from "next";
import { Locale } from "@/Library/Globals";
import BlogHeroSection from "@/Library/_Pages/Blog/BlogHeroSection/BlogHeroSection";
import TeamArticles from "@/Library/_Pages/Team/TeamArticles/TeamArticles";

export const metadata: Metadata = {
	title: "Blogs - Bperfect",
	description:
		"Stay updated with the latest insights, trends, and tips in beauty and dermatology from Bperfect.",
};

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;

	return (
		<>
			<BlogHeroSection />
			<TeamArticles locale={locale} />
		</>
	);
};

export default Page;
