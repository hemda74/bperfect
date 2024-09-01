import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display1, Subtitle } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import {
	TeamHero,
	TeamInnerImage,
} from "@/Library/_Pages/Team/TeamHeroSection/TeamHeroSection.styles";

const TeamHeroSection = ({
	Img,
	Name,
	Description,
	// Facebook,
	// Instagram,
	// Youtube,
}: {
	Img: string;
	Name: string;
	Description: string;
	// Facebook: string;
	// Instagram: string;
	// Youtube: string;
}) => {
	const t = useTranslations("Team.TeamHeroSection");
	return (
		<>
			<TeamHero>
				<Section as={"div"}>
					<Row justify={"space-between"} aligncenter={"center"}>
						<Col md={5}>
							<TeamInnerImage>
								<Image
									src={Img}
									alt={`${Name}'s image`}
									width={800}
									height={825}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
								/>
							</TeamInnerImage>
						</Col>
						<Col md={6}>
							<Subtitle>{t("Title")}</Subtitle>
							<Display1 className={`${styles.marginBottom16} ${styles.marginTop12}`}>
								{Name}
							</Display1>
							<p className={`${styles.marginBottom40}`}>{Description}</p>

							<Flexbox justify={"space-between"} aligncenter={"center"}>
								<Link href={"#About"}>
									<Button Body={t("Button")} />
								</Link>
								{/* <Flexbox as={"ul"} gap={0.75}>
									<li>
										<Link href={Facebook}>L</Link>
									</li>
									<li>
										<Link href={Instagram}>L</Link>
									</li>
									<li>
										<Link href={Youtube}>L</Link>
									</li>
								</Flexbox> */}
							</Flexbox>
						</Col>
					</Row>
				</Section>
			</TeamHero>
		</>
	);
};

export default TeamHeroSection;
