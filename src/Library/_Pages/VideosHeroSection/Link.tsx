import React from "react";
import { Locale } from "@/Library/Globals";
import { Flexbox } from "@/Library/Grids/Grids";
import ArrowRight from "@/Library/_Pages/Services/ServicesHeroSection/ArrowRight";
import { LinkParagraph } from "@/Library/_Pages/Services/ServicesHeroSection/Link.styles";

const Link = ({ Body, locale }: { Body: string } & Locale) => {
	return (
		<>
			<Flexbox>
				<LinkParagraph direction={locale}>{Body}</LinkParagraph>
				<ArrowRight className={locale === "en" ? "rotate" : ""} />
			</Flexbox>
		</>
	);
};

export default Link;
