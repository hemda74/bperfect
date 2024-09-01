import React from "react";
import { Locale } from "@/Library/Globals";
import { Flexbox } from "@/Library/Grids/Grids";
import ArrowRight from "@/Library/_Pages/Services/ServicesHeroSection/ArrowRight";
import { LinkParagraph } from "@/Library/_Pages/Services/ServicesHeroSection/Link.styles";

interface LinkProps extends Locale {
	Body: string;
	href: string;
}

const Link = ({ Body, locale, href }: LinkProps) => {
	return (
		<a href={href}>
			<Flexbox>
				<LinkParagraph direction={locale}>{Body}</LinkParagraph>
				<ArrowRight className={locale === "en" ? "rotate" : ""} />
			</Flexbox>
		</a>
	);
};

export default Link;
