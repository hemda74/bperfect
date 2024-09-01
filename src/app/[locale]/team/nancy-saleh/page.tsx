import { useTranslations } from "next-intl";
import React from "react";
import AboutTeam from "@/Library/_Pages/Team/AboutTeam/AboutTeam";
import TeamHeroSection from "@/Library/_Pages/Team/TeamHeroSection/TeamHeroSection";

const Page = () => {
	const t = useTranslations("Team");

	return (
		<>
			<TeamHeroSection
				Description={t("TeamHeroSection.TeamMembers.TeamMember2.Body")}
				Img={t("TeamHeroSection.TeamMembers.TeamMember2.Img")}
				// Facebook={t("TeamHeroSection.TeamMembers.TeamMember2.Links.Link1")}
				// Instagram={t("TeamHeroSection.TeamMembers.TeamMember2.Links.Link2")}
				// Youtube={t("TeamHeroSection.TeamMembers.TeamMember2.Links.Link3")}
				Name={t("TeamHeroSection.TeamMembers.TeamMember2.Name")}
			/>
			{/* <AboutTeam
				Text11={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph1.Text1")}
				StrongText1={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph1.StrongText")}
				Text12={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph1.Text2")}
				Text21={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph2.Text2")}
				StrongText2={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph2.StrongText")}
				Text22={t("AboutMe.Paragraphs.TeamMembers.TeamMember2.Paragraph2.Text2")}
			/> */}
		</>
	);
};

export default Page;
