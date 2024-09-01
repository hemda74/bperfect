import React from "react";
import {
	CardContainer,
	CardHeading,
	CardParagraph,
	CardShell,
} from "@/Library/_Pages/About/OurValues/OurValuesCard.styles";

const OurValuesCard = ({ title, body }: { title: string; body: string }) => {
	return (
		<CardContainer>
			<CardShell>
				<div>
					<CardHeading>{title}</CardHeading>
					<CardParagraph>{body} </CardParagraph>
				</div>
			</CardShell>
		</CardContainer>
	);
};

export default OurValuesCard;
