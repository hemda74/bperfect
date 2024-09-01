import React from "react";
import { Locale } from "@/Library/Globals";
import { Section } from "@/Library/Grids/Grids";
import TermsAr from "@/Library/_Pages/Terms/TermsAr";
import TermsEn from "@/Library/_Pages/Terms/TermsEn";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;

	return (
		<>
			<Section>{locale === "en" ? <TermsEn /> : <TermsAr />}</Section>
		</>
	);
};

export default Page;
