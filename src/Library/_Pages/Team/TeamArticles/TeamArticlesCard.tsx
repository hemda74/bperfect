import Image from "next/image";
import React from "react";
import { Locale } from "@/Library/Globals";
import { HeadingH3 } from "@/Library/Typography/Typography";
import Link from "@/Library/_Pages/Services/ServicesHeroSection/Link";
import {
	CardFooter,
	TeamArticlesCardCaption,
	TeamArticlesCardDivider,
	TeamArticlesCardImage,
	TeamArticlesCardInner,
} from "@/Library/_Pages/Team/TeamArticles/TeamArticlesCard.styles";

interface TeamArticlesCardProps extends Locale {
	Img: string;
	Heading: string;

	CardLink: string;
}

const TeamArticlesCard: React.FC<TeamArticlesCardProps> = ({
	Img,
	Heading,

	CardLink,
	locale,
}) => {
	return (
		<TeamArticlesCardInner>
			<TeamArticlesCardImage>
				<Image src={Img} alt={Heading} width={500} height={367} />
			</TeamArticlesCardImage>

			<TeamArticlesCardCaption>
				<HeadingH3>{Heading}</HeadingH3>
				<TeamArticlesCardDivider />

				<CardFooter justify={"space-between"} aligncenter={"center"}>
					<Link locale={locale} Body={CardLink} href={`/blogs/${Heading}`} />
				</CardFooter>
			</TeamArticlesCardCaption>
		</TeamArticlesCardInner>
	);
};

export default TeamArticlesCard;
