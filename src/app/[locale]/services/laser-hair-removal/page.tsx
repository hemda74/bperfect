import { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import type { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display4, MutedText } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import {
	AboutHeaders,
	AboutThisServiceCaption,
	AboutThisServiceForm,
} from "@/Library/_Pages/AboutThisService/AboutThisService.styles";
import { VideoContainer } from "@/Library/_Pages/HomeSection/OurFacilites/OurFacilities.styles";
import OurServices from "@/Library/_Pages/HomeSection/OurServices/OurServices";
import { videoLinks } from "@/Library/_Pages/HomeSection/OurVideos/OurVideos";
import ServiceDetails from "@/Library/_Pages/ServiceDetails/ServiceDetails";
export const metadata: Metadata = {
	title: "Laser Hair Removal - Bperfect",
	description:
		"Get smooth, hair-free skin with our advanced laser hair removal treatments at Bperfect.",
};

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	const t = useTranslations("ServicesDetails");

	return (
		<>
			<ServiceDetails
				Icon={t("HeroSection.LaserHairRemoval.Icon")}
				Heading={t("HeroSection.LaserHairRemoval.Heading")}
				Body={t("HeroSection.LaserHairRemoval.Body")}
				Img={t("HeroSection.LaserHairRemoval.Image")}
			/>

			<Section className={`${styles.marginBottom200}`}>
				<Row>
					<Col lg={8}>
						<AboutThisServiceCaption>
							<div>
								{[...Array(2)].map((_, i) => {
									return (
										<>
											<AboutHeaders>
												{t(`AboutThisService.LaserHairRemoval.Articles.Article${i + 1}.Heading`)}
											</AboutHeaders>
											<MutedText>
												{t(`AboutThisService.LaserHairRemoval.Articles.Article${i + 1}.Body`)}
											</MutedText>
										</>
									);
								})}

								{/*<ul>*/}
								{/*	{data.map(text => {*/}
								{/*		return <li key={uuid()}>{text}</li>;*/}
								{/*	})}*/}
								{/*</ul>*/}

								<Link href={"https://www.youtube.com/embed/mvpv6pWXAM4"} passHref>
									<VideoContainer className={styles.marginTop40}>
										<iframe
											width="900"
											height="506"
											src={"https://www.youtube.com/embed/mvpv6pWXAM4"}
											title={videoLinks[1].title}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											referrerPolicy="strict-origin-when-cross-origin"
											allowFullScreen
										></iframe>
									</VideoContainer>
								</Link>
							</div>
						</AboutThisServiceCaption>
					</Col>
					<Col lg={4}>
						<AboutThisServiceForm>
							<Display4>{t("AboutThisService.Heading3")}</Display4>
							<MutedText className={`${styles.marginBottom16} ${styles.marginTop16}`}>
								{/*{Body4}*/}
							</MutedText>

							<Link href={"/appointment"}>
								<Button Body={t("AboutThisService.Button")} variant={"primary1"} size={"Default"} />
							</Link>
						</AboutThisServiceForm>
					</Col>
				</Row>
			</Section>

			<OurServices contactInfo={false} locale={locale} />
		</>
	);
};

export default Page;
