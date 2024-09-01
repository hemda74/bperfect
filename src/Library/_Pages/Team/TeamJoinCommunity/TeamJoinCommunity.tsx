import React from "react";
import { Section } from "@/Library/Grids/Grids";
import { Display2 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import {
	ButtonContainer,
	TeamJoinCommunityContainer,
	TeamJoinCommunityTitle,
} from "@/Library/_Pages/Team/TeamJoinCommunity/TeamJoinCommunity.styles";

const TeamJoinCommunity = () => {
	return (
		<>
			<Section>
				<TeamJoinCommunityContainer justify={"center"} aligncenter={"center"}>
					<TeamJoinCommunityTitle>
						<Display2>Join our wonderful community today</Display2>
					</TeamJoinCommunityTitle>

					<ButtonContainer>
						<Button size={"Large"} variant={"primary2"} Body={"Browse services"} />
						<Button size={"Large"} variant={"secondary2"} Body={"Browse plans"} />
					</ButtonContainer>
				</TeamJoinCommunityContainer>
			</Section>
		</>
	);
};

export default TeamJoinCommunity;
