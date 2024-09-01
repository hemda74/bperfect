import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import uuid from "@/Library/UUID";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import { OurTeamContainer, OurTeamHeading } from "@/Library/_Pages/About/OurTeam/OurTeam.styles";
import OurTeamCard from "@/Library/_Pages/About/OurTeam/OurTeamCard";

const OurTeam = () => {
	const t = useTranslations("About.OurTeam");
	return (
		<section className={` ${styles.paddingBottom164}`}>
			<Section as={"div"}>
				<OurTeamContainer>
					<TagLine>{t("Title")}</TagLine>
					<OurTeamHeading>{t("Heading")}</OurTeamHeading>
				</OurTeamContainer>

				<Row justify="center" as={"ul"}>
					<Col md={6} lg={4} className={styles.paddingTop72} as={"li"} key={uuid()}>
						<OurTeamCard
							key={uuid()}
							image={t(`TeamMembers.Member1.Image`)}
							name={t(`TeamMembers.Member1.Name`)}
							title={t(`TeamMembers.Member1.Title`)}
							href={t(`TeamMembers.Member1.Travers`)}
						/>
					</Col>
					<Col md={6} lg={4} className={styles.paddingTop72} as={"li"} key={uuid()}>
						<OurTeamCard
							key={uuid()}
							image={t(`TeamMembers.Member2.Image`)}
							name={t(`TeamMembers.Member2.Name`)}
							title={t(`TeamMembers.Member2.Title`)}
							href={t(`TeamMembers.Member2.Travers`)}
						/>
					</Col>
				</Row>
			</Section>
		</section>
	);
};

export default OurTeam;
