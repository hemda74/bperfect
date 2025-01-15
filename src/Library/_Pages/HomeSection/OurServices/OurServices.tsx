import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import CarousalServices from "@/Library/Carousal/CarousalServices/CarousalServices";
import { Locale } from "@/Library/Globals";
import { Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import ContactInfo from "@/Library/_Pages/HomeSection/ContactInfo/ContactInfo";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import {
	ButtonContainer,
	OurServicesHeading,
	OurServicesParagraph,
	OurServicesShell,
} from "@/Library/_Pages/HomeSection/OurServices/OurServices.styles";
import CareServices from "@/Library/_Pages/Services/ServicesHeroSection/CareServices";

const OurServices = ({ locale, contactInfo = true }: Locale & { contactInfo?: boolean }) => {
	const t = useTranslations("Home.OurServices");
	return (
		<>
			{contactInfo && <ContactInfo />}

			<OurServicesShell contactInfo={contactInfo}>
				<Section as={"div"}>
					<OurServicesHeading>
						<TagLine>{t("Title")}</TagLine>
						<Display2>
							{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")}</SpanStyles>{" "}
						</Display2>
						<OurServicesParagraph className={styles.paddingBottom32}>
							{t("Body")}
						</OurServicesParagraph>
					</OurServicesHeading>
					<CarousalServices>
						{[...Array(5)].map((_, index) => {
							return (
								<Link key={uuid()} href={t(`Cards.Card${index + 1}.travers`)}>
									<CareServices
										locale={locale}
										Heading={t(`Cards.Card${index + 1}.Heading`)}
										LinkBody={t(`Cards.Card${index + 1}.Link`)}
										Img={t(`Cards.Card${index + 1}.Image`)}
										Icon={t(`Cards.Card${index + 1}.Icon`)}
									/>
								</Link>
							);
						})}
					</CarousalServices>

					<ButtonContainer>
						<Link href={t("Links.Link1.Travers")}>
							<Button size={"Small"} Body={t("Links.Link1.Body")} />
						</Link>
						<Link href={t("Links.Link2.Travers")}>
							<Button size={"Small"} Body={t("Links.Link2.Body")} variant={"secondary1"} />
						</Link>
					</ButtonContainer>
				</Section>
			</OurServicesShell>
		</>
	);
};

export default OurServices;
