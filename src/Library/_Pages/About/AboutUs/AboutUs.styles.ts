"use client";

import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";

export const AboutUSShell = styled.div`
	position: relative;

	@media screen and (max-width: ${Breakpoints.md}) {
		text-align: center;
	}
`;

export const TagLine = styled.div`
	color: var(--accent--primary-1);
	letter-spacing: 0.06em;
	text-transform: uppercase;
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.111em;

	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
	}
`;

export const HeadingSpan = styled(SpanStyles)`
	display: block;
`;

export const AboutUsParagraph = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const AboutUsImage = styled(Image)`
	border-radius: 40px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const MiddleImageCard = styled.div`
	margin-block: 32px;
	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-block: 0;
		position: relative;
		top: 80px;
		height: 100%;
	}
`;

export const InsightHeader = styled(Display1)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 5px;
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 5px;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 42px;
	}
`;

export const InsightSymbol = styled.span`
	color: var(--accent--primary-1);
	font-weight: 500;
	line-height: 1.167em;
	font-size: 2.5rem;
	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 2rem;
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 2rem;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 2rem;
	}
`;

export const InsightsCaption = styled.div`
	font-weight: 500;
	font-size: 20px;
	line-height: 1.1em;
	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
	}
`;
export const InsightsCaptionText = styled.span`
	color: var(--accent--primary-1);
`;

export const BackGroundDiv = styled.div`
	height: 52.5%;
	background-color: var(--secondary--color-2);
	z-index: -1;
	position: absolute;
	bottom: 0;
	width: 100dvw;
	right: 0;
`;

export const HeroImage = styled(Image)`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -5555;
	top: 0;
	object-fit: cover;
`;
