import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import uuid from "@/Library/UUID";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import { Divider } from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs.styles";
import {
	CardSection,
	FloatingBG,
	OurValuesContaner,
	OurValuesDescription,
	OurValuesHeading,
	OurValuesImage,
} from "@/Library/_Pages/About/OurValues/OurValues.styles";
import OurValuesCard from "@/Library/_Pages/About/OurValues/OurValuesCard";

const OurValues = () => {
	const t = useTranslations("About.OurValues");
	return (
		<section className={`${styles.paddingTop188}`}>
			<Section as={"div"}>
				<Row justify={"space-between"} aligncenter={"center"}>
					<Col sm={12} md={12} lg={6}>
						<OurValuesContaner>
							<TagLine>{t("Title")}</TagLine>
							<OurValuesHeading>{t("Heading")}</OurValuesHeading>

							<OurValuesDescription className={`${styles.paddingBottom32}`}>
								{t("Body")}
							</OurValuesDescription>
							<OurValuesImage width={642} height={596} src={t("Image")} alt={""} />

							<FloatingBG />
						</OurValuesContaner>
					</Col>
					<Col md={12} lg={5}>
						<CardSection>
							{[...Array(2)].map((_, index) => {
								return (
									<OurValuesCard
										key={uuid()}
										title={t(`Cards.Card${index + 1}.Heading`)}
										body={t(`Cards.Card${index + 1}.Body`)}
									/>
								);
							})}
						</CardSection>
					</Col>
				</Row>
				<Divider className={styles.marginTop200}></Divider>
			</Section>
		</section>
	);
};

export default OurValues;
