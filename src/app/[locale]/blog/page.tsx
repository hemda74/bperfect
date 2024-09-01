import React from "react";
import { Locale } from "@/Library/Globals";
import BlogHeroSection from "@/Library/_Pages/Blog/BlogHeroSection/BlogHeroSection";
import TeamArticles from "@/Library/_Pages/Team/TeamArticles/TeamArticles";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	return (
		<>
			<BlogHeroSection blogs={[]} />
			<TeamArticles locale={locale} />
		</>
	);
};

export default Page;
