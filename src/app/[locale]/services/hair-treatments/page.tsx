import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import type { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display4, MutedText } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import {
	AboutHeaders,
	AboutThisServiceCaption,
	AboutThisServiceForm,
} from "@/Library/_Pages/AboutThisService/AboutThisService.styles";
import ServiceDetails from "@/Library/_Pages/ServiceDetails/ServiceDetails";
import CareServices from "@/Library/_Pages/Services/ServicesHeroSection/CareServices";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	const t = useTranslations("ServicesDetails");

	return (
		<>
			<ServiceDetails
				Icon={t("HeroSection.HairTreatments.Icon")}
				Heading={t("HeroSection.HairTreatments.Heading")}
				Body={t("HeroSection.HairTreatments.Body")}
				Img={t("HeroSection.HairTreatments.Image")}
			/>

			<Section className={`${styles.marginBottom200}`}>
				<Row>
					<Col lg={8}>
						<AboutThisServiceCaption>
							<div>
								{[...Array(3)].map((_, i) => {
									return (
										<>
											<AboutHeaders>
												{t(`AboutThisService.HairTreatments.Articles.Article${i + 1}.Heading`)}
											</AboutHeaders>
											<MutedText>
												{t(`AboutThisService.HairTreatments.Articles.Article${i + 1}.Body`)}
											</MutedText>
										</>
									);
								})}

								{/*<ul>*/}
								{/*	{data.map(text => {*/}
								{/*		return <li key={uuid()}>{text}</li>;*/}
								{/*	})}*/}
								{/*</ul>*/}

								<Image
									src={t("AboutThisService.HairTreatments.Img")}
									alt={""}
									width={660}
									height={348}
									style={{
										width: "100%",
										objectFit: "cover",
										borderRadius: "20px",
										marginTop: "20px",
									}}
								/>
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

			<Section>
				<Row as={"ul"}>
					{[...Array(3)].map((_, index) => {
						return (
							<Col as={"li"} md={6} xl={4} key={uuid()}>
								<CareServices
									locale={locale}
									Heading={t(`AboutThisService.Cards.Card${index + 1}.Heading`)}
									LinkBody={t(`AboutThisService.Cards.Card${index + 1}.Link`)}
									Body={t(`AboutThisService.Cards.Card${index + 1}.Body`)}
									Img={t(`AboutThisService.Cards.Card${index + 1}.Image`)}
									Icon={t(`AboutThisService.Cards.Card${index + 1}.Icon`)}
								/>
							</Col>
						);
					})}
				</Row>
			</Section>
		</>
	);
};

export default Page;
