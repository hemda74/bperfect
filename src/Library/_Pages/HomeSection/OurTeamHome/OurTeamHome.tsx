import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import {
	OurTeamHomeImage,
	OurTeamHomeImageContainer,
	OurTeamInfo,
	OurTeamInfoCaption,
	OurTeamInfoTitle,
} from "@/Library/_Pages/HomeSection/OurFacilites/OurFacilities.styles";
import {
	OurTeamHeading,
	OurTeamParagraph,
} from "@/Library/_Pages/HomeSection/OurTeamHome/OurTeamHome.styles";

const OurTeamHome = () => {
	const t = useTranslations("Home.OurTeamHome");
	return (
		<>
			<Section className={`${styles.paddingTop240} ${styles.paddingBottom240}`}>
				<Row justify={"space-between"} aligncenter={"center"} ColumnGab={1.75}>
					<Col className={`${styles.marginBottom48}`} md={5}>
						<OurTeamHeading>
							<TagLine>{t("Title")}</TagLine>

							<Display2>
								{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")}</SpanStyles>
							</Display2>
						</OurTeamHeading>

						<OurTeamParagraph>{t("Body")}</OurTeamParagraph>
						<Link href={t("Button.Travers")}>
							<Button Body={t("Button.Body")} />
						</Link>
					</Col>
					<Col md={6}>
						<OurTeamHomeImageContainer>
							<OurTeamHomeImage src={t("Image")} alt={""} width={580} height={653} />

							<OurTeamInfo>
								<Image src={t("Card.Image")} alt={""} width={71} height={42} />
								<OurTeamInfoCaption>{t("Card.Body")}</OurTeamInfoCaption>

								<OurTeamInfoTitle>
									<span>{t("Card.Title.Title1")}</span>
									{t("Card.Title.Title2")}
								</OurTeamInfoTitle>
							</OurTeamInfo>
						</OurTeamHomeImageContainer>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default OurTeamHome;
