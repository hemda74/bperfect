import { useTranslations } from "next-intl";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import Button from "@/Library/UI/Button/Button";
import {
	NextButton,
	TeamArticlesSection,
} from "@/Library/_Pages/Team/TeamArticles/TeamArticles.styles";
import TeamArticlesCard from "@/Library/_Pages/Team/TeamArticles/TeamArticlesCard";

const TeamArticles = ({ locale }: Locale) => {
	const t = useTranslations("Blog.TeamArticlesSection");
	return (
		<>
			<TeamArticlesSection>
				<Section>
					<Row as={"ul"} justify={"space-around"}>
						{[...Array(6)].map((_, index) => {
							return (
								<>
									<Col md={6} as={"a"}>
										<TeamArticlesCard
											CardLink={t(`Cards.Card${index + 1}.Link`)}
											Heading={t(`Cards.Card${index + 1}.Heading`)}
											Date={t(`Cards.Card${index + 1}.Date`)}
											Img={t(`Cards.Card${index + 1}.Img`)}
											locale={locale}
										/>
									</Col>
								</>
							);
						})}
					</Row>

					<NextButton>
						<Button Body={t("Button.Body")} size={"Large"} />
					</NextButton>
				</Section>
			</TeamArticlesSection>
		</>
	);
};

export default TeamArticles;
