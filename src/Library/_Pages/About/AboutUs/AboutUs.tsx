import { useTranslations } from "next-intl";
import React, { Fragment } from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display1 } from "@/Library/Typography/Typography";
import {
	AboutUsImage,
	AboutUsParagraph,
	AboutUSShell,
	BackGroundDiv,
	InsightHeader,
	InsightsCaption,
	InsightSymbol,
	MiddleImageCard,
	TagLine,
} from "@/Library/_Pages/About/AboutUs/AboutUs.styles";

const AboutUs = () => {
	const t = useTranslations("About.AboutUs");
	return (
		<>
			<section className={"positionRelative"}>
				<Section
					as={"div"}
					className={`${styles.paddingLeft24} ${styles.paddingRight24} ${styles.paddingTop110} ${styles.paddingBottom188}`}
				>
					<AboutUSShell >
						<TagLine>{t("Title")}</TagLine>
						<Row as={"ul"} justify="space-between">
							<Col as={"li"} md={12} lg={4}>
								<Display1>{t("Heading")}</Display1>
							</Col>
							<Col as={"li"} lg={8} style={{ marginBottom: "18rem" }}>
								<AboutUsParagraph>{t("Body")} </AboutUsParagraph>
							</Col>

							<Col as={"li"} lg={12} className={styles.paddingTop64}>
								<Row justify={"space-around"}>
									<Col lg={5}>
										<AboutUsImage width={510} height={466} src={t("Images.Image1")} alt={""} />
									</Col>{" "}
									<Col lg={4}>
										<MiddleImageCard>
											<AboutUsImage width={510} height={466} src={t("Images.Image2")} alt={""} />
										</MiddleImageCard>
									</Col>
									<Col lg={3}>
										<AboutUsImage width={331} height={461} src={t("Images.Image3")} alt={""} />
									</Col>
								</Row>
							</Col>

							<Row
								style={{ width: "90%", margin: "auto" }}
								justify={"center"}
								className={`${styles.paddingTop160} `}
								as={"ul"}
							>
								{[...Array(4)].map((_, index) => {
									return (
										<>
											<Col
												as={"li"}
												className={`${styles.marginTop16} ${styles.paddingTop24}`}
												xs={6}
												md={6}
												lg={3}
											>
												<InsightHeader>
													<InsightSymbol>
														{t(`Statistics.Statistic${index + 1}.Plus`)}
													</InsightSymbol>
													<InsightSymbol>
														{t(`Statistics.Statistic${index + 1}.Number`)}
													</InsightSymbol>
												</InsightHeader>
												<InsightsCaption>
													{t(`Statistics.Statistic${index + 1}.Body`)}
												</InsightsCaption>
											</Col>
										</>
									);
								})}
							</Row>
						</Row>
					</AboutUSShell>
				</Section>
				<BackGroundDiv />
			</section>
		</>
	);
};

export default AboutUs;
