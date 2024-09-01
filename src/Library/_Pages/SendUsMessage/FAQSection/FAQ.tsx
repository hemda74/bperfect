import { useTranslations } from "next-intl";
import React from "react";

import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { TagLine } from "@/Library/_Pages/About/AboutUs/AboutUs.styles";
import {
	FaqHeading,
	FaqImage,
	QuestionShell,
} from "@/Library/_Pages/SendUsMessage/FAQSection/FAQ.styles";
import FaqComponent from "@/Library/_Pages/SendUsMessage/FAQSection/FAQComponent";

const Faq = () => {
	const t = useTranslations("FAQ");
	return (
		<>
			<Section className={`${styles.paddingTop240} ${styles.paddingBottom240}`}>
				<Row justify={"space-between"}>
					<Col xxl={6} className={styles.marginBottom72}>
						<TagLine>{t("Title")}</TagLine>
						<FaqHeading>{t("Heading")}</FaqHeading>

						<QuestionShell>
							{[...Array(3)].map((_, index) => {
								return (
									<>
										<FaqComponent
											question={t(`QuestionsAnswers.QuestionAnswer${index + 1}.Question`)}
											answer={t(`QuestionsAnswers.QuestionAnswer${index + 1}.Answer`)}
										/>
									</>
								);
							})}
						</QuestionShell>
					</Col>
					<Col xxl={5}>
						<FaqImage width={540} height={596} src={t("Image")} alt={""} />
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default Faq;
