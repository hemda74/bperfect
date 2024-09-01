// "use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import {
	TestimonialsDataAR,
	TestimonialsDataEN,
} from "../../../../../messages/data/TestmonialsData";
import CarousalShell from "@/Library/Carousal/Carousal";
import { Locale } from "@/Library/Globals";
import { Flexbox, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";

import uuid from "@/Library/UUID";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import {
	TestimonialCardContainer,
	TestimonialHeading,
	TestimonialShell,
} from "@/Library/_Pages/HomeSection/Teastimonials/Testimonial.styles";
import TestimonialCardShell from "@/Library/_Pages/HomeSection/Teastimonials/TestimonialCardShell";

const Testimonial = ({ locale }: Locale) => {
	const data = locale === "en" ? TestimonialsDataEN : TestimonialsDataAR;
	const t = useTranslations("Home.Testimonial");
	return (
		<TestimonialShell>
			<Section as={"div"} className={`${styles.paddingTop240} ${styles.paddingBottom240}`}>
				<TestimonialHeading>
					<TagLine>{t("Title")}</TagLine>

					<Display2>
						{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")} </SpanStyles>
					</Display2>
				</TestimonialHeading>

				<CarousalShell locale={locale}>
					{data.map(item => {
						return (
							<TestimonialCardContainer aligncenter={"center"} key={uuid()}>
								<TestimonialCardShell
									key={uuid()}
									name={item.name}
									job={item.job}
									description={item.description}
									locale={locale}
									img={item.img}
								/>
							</TestimonialCardContainer>
						);
					})}
				</CarousalShell>

				<Flexbox className={styles.marginTop56} justify={"center"}>
					<Link href={"/appointment"}>
						<Button Body={t("Button.Body")} />
					</Link>
				</Flexbox>
			</Section>
		</TestimonialShell>
	);
};

export default Testimonial;
