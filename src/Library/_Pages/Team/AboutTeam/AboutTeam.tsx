import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { BoldText, Display2, MutedText } from "@/Library/Typography/Typography";
import { AboutTeamInner } from "@/Library/_Pages/Team/AboutTeam/AboutTeam.styles";

const AboutTeam = ({
	Text11,
	StrongText1,
	Text12,
	Text21,
	StrongText2,
	Text22,
}: {
	Text11: string;
	StrongText1?: string;
	Text12?: string;
	Text21?: string;
	StrongText2?: string;
	Text22?: string;
}) => {
	const t = useTranslations("Team.AboutMe");
	return (
		<>
			<Section id={"About"}>
				<Row justify={"center"}>
					<Col md={8}>
						<AboutTeamInner>
							<Display2>{t("Heading")}</Display2>

							<MutedText className={`${styles.marginTop16} ${styles.marginBottom16}`}>
								{Text11} <BoldText>{StrongText1}</BoldText>
								{Text12}
							</MutedText>

							<MutedText className={`${styles.marginTop16} ${styles.marginBottom16}`}>
								{Text21} <BoldText>{StrongText2}</BoldText>
								{Text22}
							</MutedText>
						</AboutTeamInner>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default AboutTeam;
