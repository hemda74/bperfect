import React from "react";
import type { Locale } from "@/Library/Globals";
import GetStartedToday from "@/Library/_Pages/HomeSection/GetStartedToday/GetStartedToday";
import HomeHeroSection from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection";
import OurFacilities from "@/Library/_Pages/HomeSection/OurFacilites/OurFacilities";
import OurServices from "@/Library/_Pages/HomeSection/OurServices/OurServices";
import OurTeamHome from "@/Library/_Pages/HomeSection/OurTeamHome/OurTeamHome";
import OurVideos from "@/Library/_Pages/HomeSection/OurVideos/OurVideos";
import Testimonial from "@/Library/_Pages/HomeSection/Teastimonials/Testimonial";
import WhyChoseUs from "@/Library/_Pages/HomeSection/WhyChoseUs/WhyChoseUs";
import TeamArticles from "@/Library/_Pages/Team/TeamArticles/TeamArticles";

export default function Home({ params }: { params: Locale }) {
	const { locale } = params;

	return (
		<>
			<HomeHeroSection />
			<OurServices locale={locale} />
			<WhyChoseUs />
			<OurFacilities />
			<OurVideos />
			<OurTeamHome />
			<GetStartedToday />
			<Testimonial locale={locale} />
			<TeamArticles locale={locale} />

			{/*<Appointment locale={locale} />*/}
		</>
	);
}
