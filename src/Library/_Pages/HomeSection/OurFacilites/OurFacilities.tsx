import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import OurVideos from "../OurVideos/OurVideos";
import { Section } from "@/Library/Grids/Grids";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import { Divider } from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs.styles";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import {
	OurFacilitiesButton,
	OurFacilitiesContainer,
	OurFacilitiesSection,
	OurFacilitiesShell,
} from "@/Library/_Pages/HomeSection/OurFacilites/OurFacilities.styles";

const OurFacilities = () => {
	const t = useTranslations("Home.OurFacilities");
	return (
		<>
			<OurFacilitiesSection>
				<Section as={"div"}>
					<Divider></Divider>
					<OurFacilitiesShell>
						<OurFacilitiesContainer>
							<TagLine>{t("Title")}</TagLine>

							<Display2>
								{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")}</SpanStyles>
							</Display2>
						</OurFacilitiesContainer>

						{/* <Row>
							<Col lg={6}>
								<VideoContainer>
									<iframe
										width="900"
										height="506"
										src="https://www.youtube.com/embed/seeaJi3tUt8"
										title="Dr Ghada Nabil BPerfect Clinic"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									></iframe>
								</VideoContainer>
							</Col>
							<Col lg={6}>
								<VideoContainer>
									<iframe
										width="900"
										height="506"
										src="https://www.youtube.com/embed/seeaJi3tUt8"
										title="Dr Ghada Nabil BPerfect Clinic"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									></iframe>
								</VideoContainer>
							</Col>
						</Row> */}
						<OurVideos />
						<OurFacilitiesButton>
							<Link href={t("Button.Travers")}>
								<Button size={"Small"} Body={t("Button.Body")} />
							</Link>
						</OurFacilitiesButton>
					</OurFacilitiesShell>
				</Section>
			</OurFacilitiesSection>
		</>
	);
};

export default OurFacilities;
