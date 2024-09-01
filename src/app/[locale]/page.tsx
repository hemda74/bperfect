import React from "react";
import type { Locale } from "@/Library/Globals";
import GetStartedToday from "@/Library/_Pages/HomeSection/GetStartedToday/GetStartedToday";
import HomeHeroSection from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection";
import OurBlog from "@/Library/_Pages/HomeSection/OurBlog/OurBlog";
import OurFacilities from "@/Library/_Pages/HomeSection/OurFacilites/OurFacilities";
import OurServices from "@/Library/_Pages/HomeSection/OurServices/OurServices";
import OurTeamHome from "@/Library/_Pages/HomeSection/OurTeamHome/OurTeamHome";
import Testimonial from "@/Library/_Pages/HomeSection/Teastimonials/Testimonial";
import WhyChoseUs from "@/Library/_Pages/HomeSection/WhyChoseUs/WhyChoseUs";
import OurVideos from "@/Library/_Pages/HomeSection/OurVideos/OurVideos";

export default function Home({ params }: { params: Locale }) {
	const { locale } = params;

	return (
		<>
			<HomeHeroSection />
			<OurServices locale={locale} />
			<WhyChoseUs />
			<OurFacilities />
			<OurVideos locale={locale} />
			<OurTeamHome />
			<GetStartedToday />
			<Testimonial locale={locale} />
			<OurBlog locale={locale} />

			{/*<Appointment locale={locale} />*/}
		</>
	);
}
