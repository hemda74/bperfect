import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { OurTeamHomeImage } from "../OurFacilites/OurFacilities.styles";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import Button from "@/Library/UI/Button/Button";
import {
	GetStartCaption,
	GetStartContainer,
	GetStartHeading,
	GetStartImageContainer,
	GetStartShell,
	GetStartSubTitle,
} from "@/Library/_Pages/HomeSection/GetStartedToday/GetStartedToday.styles";

const GetStartedToday = () => {
	const t = useTranslations("Home.GetStartedToday");
	return (
		<>
			<Section>
				<GetStartShell>
					<Row justify={"space-between"}>
						<Col md={6} style={{ display: "flex", justifyContent: "center", marginBlock: "auto" }}>
							<GetStartImageContainer>
								<OurTeamHomeImage src={t("Image")} alt={""} width={570} height={450} />
							</GetStartImageContainer>
						</Col>
						<Col md={6}>
							<GetStartContainer>
								<GetStartSubTitle>{t("Title")}</GetStartSubTitle>
								<GetStartHeading>{t("Heading")}</GetStartHeading>
								<GetStartCaption>{t("Body")}</GetStartCaption>

								<Flexbox justify={"center"} gap={12}>
									<Link href={t("Buttons.Button1.Travers")}>
										<Button size={"Small"} Body={t("Buttons.Button1.Body")} variant={"primary2"} />
									</Link>
									<Link href={t("Buttons.Button2.Travers")}>
										<Button
											size={"Small"}
											Body={t("Buttons.Button2.Body")}
											variant={"secondary2"}
										/>
									</Link>
								</Flexbox>
							</GetStartContainer>
						</Col>
					</Row>
				</GetStartShell>
			</Section>
		</>
	);
};

export default GetStartedToday;
