import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display1 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import PlayIcon from "@/Library/UI/IconGraphy/PlayIcon/PlayIcon";
import { HeroImage } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import {
	HeroParagraph,
	IconCaption,
	PlayIconContainer,
	SpanStyles,
} from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";

const HomeHeroSection = () => {
	const t = useTranslations("Home.HomeHeroSection");
	return (
		<>
			<section className={"positionRelative"}>
				<HeroImage src={t("Image")} alt={""} width={400} height={400} />
				<Section as={"div"} className={`${styles.paddingTop140} ${styles.paddingBottom134} `}>
					<Row>
						<Col lg={6}>
							{/* <TagLine>{t("Title")}</TagLine> */}
							<Display1>
								{t("Heading1")} <SpanStyles>{t("Heading2")}</SpanStyles>
							</Display1>
							<HeroParagraph>{t("Body")}</HeroParagraph>
							<Flexbox gap={24}>
								<Link href={"/services"}>
									<Button Body={t("Button1")} size={"Large"} variant={"primary1"} />
								</Link>
								<Flexbox aligncenter={"center"}>
									<PlayIconContainer>
										<PlayIcon />
									</PlayIconContainer>
									<IconCaption> {t("IconCaption")}</IconCaption>
								</Flexbox>
							</Flexbox>
						</Col>
					</Row>
				</Section>
			</section>
		</>
	);
};

export default HomeHeroSection;
