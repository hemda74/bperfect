"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";

export const OurTeamContainer = styled.div`
	text-align: center;

	@media screen and (max-width: ${Breakpoints.lg}) {
	}
`;

export const OurTeamHeading = styled(Display1)`
	position: relative;
`;
