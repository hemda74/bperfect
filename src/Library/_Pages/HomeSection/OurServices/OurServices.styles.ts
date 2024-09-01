"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const OurServicesShell = styled.section<{ contactInfo: boolean }>`
	background-color: ${({ contactInfo }) => (contactInfo ? "var(--neutral--200)" : "transparent")};
	padding-block: 240px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		padding-top: 790px;
	}
`;

export const OurServicesHeading = styled.div`
	text-align: center;
	max-width: 640px;
	margin-inline: auto;
`;

export const OurServicesParagraph = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const ButtonContainer = styled(Flexbox)`
	text-align: center;
	margin-top: 56px;
	justify-content: center;
	gap: 24px;
`;
