import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display4, MutedText } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import {
	AboutThisServiceCaption,
	AboutThisServiceForm,
} from "@/Library/_Pages/AboutThisService/AboutThisService.styles";
import CareServices from "@/Library/_Pages/Services/ServicesHeroSection/CareServices";

const AboutThisService = ({
	Body1,
	Body2,
	Body3,
	Body4,
	Img,
	locale,
}: {
	Body1: string;
	Body2: string;
	Body3: string;
	Body4: string;
	Img: string;
} & Locale) => {
	const t = useTranslations("ServicesDetails.AboutThisService");
	const data = [
		"Lorem ipsum dolor sit amet consectetur aliquam quam amet aliquam.",
		"Mauris aliquet iaculis dui vitae ullamco adipiscing sodales nisl.",
		"Posuere enim mi pharetra neque proin dic nunc odio in egestas.",
	];

	return (
		<>
			<Section className={`${styles.marginBottom200}`}>
				<Row>
					<Col lg={8}>
						<AboutThisServiceCaption>
							<div>
								<h2>{t("Heading1")}</h2>
								<MutedText>{Body1}</MutedText>
								<MutedText className={`${styles.marginTop16}`}>{Body2}</MutedText>
								<h3>{t("Heading2")}</h3>
								<MutedText>{Body3}</MutedText>

								<ul>
									{data.map(text => {
										return <li key={uuid()}>{text}</li>;
									})}
								</ul>

								<Image
									src={Img}
									alt={""}
									width={660}
									height={348}
									style={{ width: "100%", objectFit: "cover", borderRadius: "20px" }}
								/>
							</div>
						</AboutThisServiceCaption>
					</Col>
					<Col lg={4}>
						<AboutThisServiceForm>
							<Display4>{t("Heading3")}</Display4>
							<MutedText className={`${styles.marginBottom16} ${styles.marginTop16}`}>
								{Body4}
							</MutedText>

							<Link href={"/appointment"}>
								<Button Body={t("Button")} variant={"primary1"} size={"Default"} />
							</Link>
						</AboutThisServiceForm>
					</Col>
				</Row>
			</Section>

			<Section>
				<Row as={"ul"}>
					{[...Array(3)].map(_ => {
						return (
							<Col as={"li"} md={6} xl={4} key={uuid()}>
								<CareServices
									locale={locale}
									Heading={"Laser skin services"}
									LinkBody={"View service"}
									Img={"/4.jpg"}
									Icon={"/Home.svg"}
								/>
							</Col>
						);
					})}
				</Row>
			</Section>
		</>
	);
};

export default AboutThisService;
