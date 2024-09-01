import { useTranslations } from "next-intl";
import React from "react";
import TeamHeroSection from "@/Library/_Pages/Team/TeamHeroSection/TeamHeroSection";

const Page = () => {
	const t = useTranslations("Team");

	return (
		<>
			<TeamHeroSection
				Description={t("TeamHeroSection.TeamMembers.TeamMember1.Body")}
				Img={t("TeamHeroSection.TeamMembers.TeamMember1.Img")}
				// Facebook={t("TeamHeroSection.TeamMembers.TeamMember1.Links.Link1")}
				// Instagram={t("TeamHeroSection.TeamMembers.TeamMember1.Links.Link2")}
				// Youtube={t("TeamHeroSection.TeamMembers.TeamMember1.Links.Link3")}
				Name={t("TeamHeroSection.TeamMembers.TeamMember1.Name")}
			/>
		</>
	);
};

export default Page;
