"use client";

import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const OurFacilitiesSection = styled.section`
	background-image: linear-gradient(to top, var(--secondary--color-2) 55%, white 55%);
`;

export const OurFacilitiesShell = styled.div`
	text-align: center;
	padding-block: 224px 240px;
`;

export const OurFacilitiesContainer = styled.div`
	max-width: 850px;
	margin-inline: auto;
	margin-bottom: 50px;
`;

export const OurFacilitiesButton = styled.div`
	text-align: center;
	margin-top: 64px;
`;

export const OurTeamHomeImageContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: end;
`;

export const OurTeamHomeImage = styled(Image)`
	border-radius: 32px;
`;

export const OurTeamInfo = styled.div`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	max-width: 400px;
	border-radius: 32px;
	padding: 40px 34px;
	position: absolute;
	top: auto;
	bottom: 28px;
	left: -42px;
	right: auto;
	@media screen and (max-width: ${Breakpoints.lg}) {
		left: 0;
	}
`;

export const OurTeamInfoCaption = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	margin-block: 16px 18px;
`;

export const VideoContainer = styled.div`
	width: 95%;
	margin-inline: 1rem;
	margin-top: 20px;
	border-radius: 32px;
	overflow: hidden;

	& iframe {
		max-width: 100%;
	}
`;

export const OurTeamInfoTitle = styled.div`
	color: var(--neutral--600);
	font-size: 18px;
	line-height: 1.111em;
	font-weight: 500;

	span {
		color: var(--neutral--700);
	}
`;
