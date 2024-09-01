import React from "react";
import { Locale } from "@/Library/Globals";
import { Section } from "@/Library/Grids/Grids";
import PrivacyAr from "@/Library/_Pages/Policy/PrivacyAr";
import PrivacyEn from "@/Library/_Pages/Policy/PrivacyEn";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;

	return (
		<>
			<Section>{locale === "en" ? <PrivacyEn /> : <PrivacyAr />}</Section>
		</>
	);
};

export default Page;
