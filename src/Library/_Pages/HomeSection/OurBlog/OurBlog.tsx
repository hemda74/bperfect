import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import TeamArticlesCard from "@/Library/_Pages/Team/TeamArticles/TeamArticlesCard";

const OurBlog = ({ locale }: Locale) => {
	const t = useTranslations("Home.OurBlog");
	return (
		<>
			<Section className={`${styles.paddingTop240} ${styles.paddingBottom240}`}>
				<TagLine>{t("Title")}</TagLine>
				<Flexbox className={styles.marginBottom56} justify={"space-between"}>
					<Display2>{t("Heading")}</Display2>

					<Link href={"/blog"}>
						<Button Body={t("Button")} variant={"secondary1"} />
					</Link>
				</Flexbox>

				<Row as={"ul"} justify={"space-around"}>
					{[...Array(3)].map((_, index) => {
						return (
							<>
								<Col lg={4} as={"a"}>
									<TeamArticlesCard
										CardLink={t(`Cards.Card${index + 1}.Link`)}
										Heading={t(`Cards.Card${index + 1}.Heading`)}
										// Date={t(`Cards.Card${index + 1}.Date`)}
										Img={t(`Cards.Card${index + 1}.Img`)}
										locale={locale}
									/>
								</Col>
							</>
						);
					})}
				</Row>
			</Section>
		</>
	);
};

export default OurBlog;
