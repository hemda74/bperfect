import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display4 } from "@/Library/Typography/Typography";
import {
	CardCaption,
	CardCaptionContent,
	CardICon,
	CardInfoShell,
	ContactInfoContainer,
	ContactInfoLinkStyles,
} from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import ArrowRight from "@/Library/_Pages/Services/ServicesHeroSection/ArrowRight";

const ContactInfo = () => {
	const t = useTranslations("Home.ContactInfo");
	return (
		<>
			<Section className={"positionRelative"}>
				<ContactInfoContainer>
					<Row aligncenter={"center"} justify={"space-between"} as={"ul"}>
						<Col lg={4}>
							<CardInfoShell
								justify={"center"}
								className={`${styles.paddingTop32} ${styles.paddingBottom32}`}
							>
								<CardICon>
									<Image width={70} height={70} src={t(`Cards.card1.Icon`)} alt={""} />
								</CardICon>
								<CardCaptionContent>
									<div>
										<Display4>{t(`Cards.card1.Heading`)}</Display4>
										<CardCaption>{t(`Cards.card1.Title`)}</CardCaption>
									</div>

									<Flexbox gap={6}>
										<ContactInfoLinkStyles href={t(`Cards.card1.href`)}>
											{t(`Cards.card1.Body`)}
										</ContactInfoLinkStyles>
										<ArrowRight />
									</Flexbox>
								</CardCaptionContent>
							</CardInfoShell>
						</Col>

						<Col lg={4}>
							<CardInfoShell
								justify={"center"}
								className={`  ${styles.paddingTop32} ${styles.paddingBottom32}`}
							>
								<CardICon>
									<Image width={70} height={70} src={t(`Cards.card2.Icon`)} alt={""} />
								</CardICon>
								<CardCaptionContent>
									<div>
										<Display4>{t(`Cards.card2.Heading`)}</Display4>
										<CardCaption>{t(`Cards.card2.Title`)}</CardCaption>
									</div>

									<Flexbox gap={6}>
										<ContactInfoLinkStyles href={t(`Cards.card2.href`)}>
											{t(`Cards.card2.Body`)}
										</ContactInfoLinkStyles>
										<ArrowRight />
									</Flexbox>
								</CardCaptionContent>
							</CardInfoShell>
						</Col>

						<Col lg={4}>
							<CardInfoShell
								justify={"center"}
								className={`${styles.paddingTop32} ${styles.paddingBottom32}`}
							>
								<CardICon>
									<Image width={70} height={70} src={t(`Cards.card3.Icon`)} alt={""} />
								</CardICon>
								<CardCaptionContent>
									<div>
										<Display4>{t(`Cards.card3.Heading`)}</Display4>
										<CardCaption>{t(`Cards.card3.Title`)}</CardCaption>
									</div>

									<Flexbox gap={6}>
										<ContactInfoLinkStyles href={t(`Cards.card3.href`)}>
											{t(`Cards.card3.Body`)}
										</ContactInfoLinkStyles>
										<ArrowRight />
									</Flexbox>
								</CardCaptionContent>
							</CardInfoShell>
						</Col>
					</Row>
				</ContactInfoContainer>
			</Section>
		</>
	);
};

export default ContactInfo;
