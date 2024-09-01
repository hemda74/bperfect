import { useTranslations } from "next-intl";
import React from "react";
import { Section } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";
import {
	BlogHero,
	BlogHeroCaption,
	BlogHeroHeader,
} from "@/Library/_Pages/Blog/BlogHeroSection/BlogHeroSection.styles";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";

const BlogHeroSection = () => {
	const t = useTranslations("Blog.HeroSection");
	return (
		<>
			<BlogHero>
				<Section>
					<BlogHeroHeader>
						<Display1>
							<SpanStyles>{t("Heading")}</SpanStyles>
						</Display1>
						<BlogHeroCaption>{t("Body")}</BlogHeroCaption>
					</BlogHeroHeader>
				</Section>
			</BlogHero>
		</>
	);
};

export default BlogHeroSection;
