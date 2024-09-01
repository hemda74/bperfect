import Image from "next/image";
import React from "react";
import { Locale } from "@/Library/Globals";
import { HeadingH3, TextSingle200 } from "@/Library/Typography/Typography";
import Link from "@/Library/_Pages/Services/ServicesHeroSection/Link";
import {
	CardFooter,
	TeamArticlesCardCaption,
	TeamArticlesCardDivider,
	TeamArticlesCardImage,
	TeamArticlesCardInner,
} from "@/Library/_Pages/Team/TeamArticles/TeamArticlesCard.styles";

const TeamArticlesCard = ({
	Img,
	Heading,
	Date,
	CardLink,
	locale,
}: {
	Img: string;
	Heading: string;
	Date: string;
	CardLink: string;
} & Locale) => {
	return (
		<>
			<TeamArticlesCardInner>
				<TeamArticlesCardImage>
					<Image src={Img} alt={""} width={500} height={367} />
				</TeamArticlesCardImage>

				<TeamArticlesCardCaption>
					<HeadingH3>{Heading}</HeadingH3>
					<TeamArticlesCardDivider />

					<CardFooter justify={"space-between"} aligncenter={"center"}>
						<TextSingle200>{Date}</TextSingle200>
						<Link locale={locale} Body={CardLink} />
					</CardFooter>
				</TeamArticlesCardCaption>
			</TeamArticlesCardInner>
		</>
	);
};

export default TeamArticlesCard;
