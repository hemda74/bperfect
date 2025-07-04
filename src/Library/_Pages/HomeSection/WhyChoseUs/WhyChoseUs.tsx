import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Flexbox } from "@/Library/Grids/Grids";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";

import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import {
	IconStyles,
	ImageContainer,
	ImageParentContainer,
	ImageParentContainerInner,
	ImageStyles,
	WhyChooseButtonContainer,
	WhyChooseContainerCol,
	WhyChooseContainerRow,
	WhyChooseUsCaption,
	WhyChooseUsContainer,
	WhyChoseUsCaption,
	WhyChoseUsParagraph,
	WhyChoseUsShell,
} from "@/Library/_Pages/HomeSection/WhyChoseUs/WhyChoseUs.styles";

const WhyChoseUs = () => {
	const t = useTranslations("Home.WhyChooseUs");
	return (
		<>
			<section>
				<WhyChoseUsShell>
					<WhyChooseUsContainer justify="space-between" aligncenter={"center"}>
						<ImageParentContainer lg={6}>
							<ImageParentContainerInner gap={32} aligncenter={"center"}>
								{/*<ColorDiv />*/}
								<ImageContainer>
									<ImageStyles width={395} height={400} src={t("Images.Image1")} alt={""} style={{ objectFit: "cover" }} />
									<ImageStyles width={580} height={350} src={t("Images.Image2")} alt={""} style={{ objectFit: "cover" }} />
								</ImageContainer>
								<ImageStyles width={436} height={464} src={t("Images.Image3")} alt={""} style={{ objectFit: "cover" }} />
							</ImageParentContainerInner>
						</ImageParentContainer>

						<WhyChooseUsCaption lg={6}>
							<div>
								<TagLine>{t("Title")}</TagLine>
								<Display2>
									{" "}
									<SpanStyles>{t("Heading.Heading1")}</SpanStyles> {t("Heading.Heading2")}
								</Display2>
								<WhyChoseUsParagraph>{t("Body")}</WhyChoseUsParagraph>
								<WhyChooseContainerRow as={"ul"} justify={"space-between"}>
									{[...Array(4)].map((_, index) => (
										<WhyChooseContainerCol as={"li"} key={uuid()} md={6}>
											<Flexbox aligncenter={"center"}>
												<IconStyles>
													<Image
														width={70}
														height={70}
														src={t(`Cards.Card${index + 1}.Icon`)}
														alt={""}
													/>
												</IconStyles>
												<WhyChoseUsCaption>{t(`Cards.Card${index + 1}.Body`)}</WhyChoseUsCaption>
											</Flexbox>
										</WhyChooseContainerCol>
									))}
								</WhyChooseContainerRow>{" "}
							</div>

							<WhyChooseButtonContainer gap={24}>
								<Link href={"/about"}>
									<Button size={"Small"} Body={t(`Buttons.Button1`)} />
								</Link>
								<Link href={"/services"}>
									<Button size={"Small"} Body={t(`Buttons.Button2`)} variant={"secondary1"} />
								</Link>
							</WhyChooseButtonContainer>
						</WhyChooseUsCaption>
					</WhyChooseUsContainer>
				</WhyChoseUsShell>
			</section>
		</>
	);
};

export default WhyChoseUs;
