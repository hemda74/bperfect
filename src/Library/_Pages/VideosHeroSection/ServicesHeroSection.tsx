import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import styles from "./../../../Grids/Spaces.module.css";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";
import uuid from "@/Library/UUID";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import CareServices from "@/Library/_Pages/Services/ServicesHeroSection/CareServices";
import {
	ServicesHero,
	ServicesHeroSectionTitle,
} from "@/Library/_Pages/Services/ServicesHeroSection/ServicesHeroSection.styles";

const ServicesHeroSection = ({ locale }: Locale) => {
	const t = useTranslations("Services.HeroSection");
	return (
		<ServicesHero>
			<Section as={"div"}>
				<Row justify={"center"}>
					<ServicesHeroSectionTitle>{t("Title")}</ServicesHeroSectionTitle>
					<Display1>
						{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")}</SpanStyles>
					</Display1>
				</Row>
				<Row as={"ul"} justify={"center"}>
					{[...Array(5)].map((_, index) => {
						return (
							<Col as={"li"} className={styles.marginBottom40} md={6} lg={5} key={uuid()}>
								<Link key={uuid()} href={t(`Cards.Card${index + 1}.travers`)}>
									<CareServices
										locale={locale}
										Heading={t(`Cards.Card${index + 1}.Heading`)}
										LinkBody={t(`Cards.Card${index + 1}.Link`)}
										Body={t(`Cards.Card${index + 1}.Body`)}
										Img={t(`Cards.Card${index + 1}.Image`)}
										Icon={t(`Cards.Card${index + 1}.Icon`)}
									/>
								</Link>
							</Col>
						);
					})}
				</Row>
			</Section>
		</ServicesHero>
	);
};

export default ServicesHeroSection;
