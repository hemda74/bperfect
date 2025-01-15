import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import TeamHeroSection from "@/Library/_Pages/Team/TeamHeroSection/TeamHeroSection";
export const metadata: Metadata = {
	title: "Our Team - Bperfect",
	description:
		"Meet the team of experts at Bperfect who provide professional beauty and dermatology services.",
};
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
		</>
	);
};

export default Page;
