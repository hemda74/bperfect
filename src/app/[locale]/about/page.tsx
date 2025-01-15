import { Metadata } from "next";
import React from "react";
import AboutUs from "@/Library/_Pages/About/AboutUs/AboutUs";
import ComeAndVisitUs from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs";
import OurTeam from "@/Library/_Pages/About/OurTeam/OurTeam";
import OurValues from "@/Library/_Pages/About/OurValues/OurValues";
export const metadata: Metadata = {
	title: "About Us - Bperfect",
	description:
		"Learn more about Bperfect and our commitment to providing top-notch services like Hair Treatments, Body Reshaping, and more.",
};
const Page = () => {
	return (
		<>
			<div style={{ width: "99.3%" }}>
				<AboutUs />
				<OurValues />
				<ComeAndVisitUs />
				<OurTeam />
			</div>
		</>
	);
};

export default Page;
