"use client";

import Image from "next/image";

import styled from "styled-components";
import { Breakpoints, Col, Flexbox, Row, Section } from "@/Library/Grids/Grids";

export const WhyChoseUsShell = styled(Section)`
	position: relative;
`;

export const ImageContainer = styled(Flexbox)`
	flex-direction: column;
	gap: 32px;
	align-items: end;
`;

export const ImageStyles = styled(Image)`
	border-radius: 32px;

	object-fit: cover;
	width: 100%;
`;

export const WhyChoseUsParagraph = styled.p`
	margin-bottom: 40px;
	margin-top: 16px;
`;

export const IconStyles = styled.div`
	overflow: hidden;
	max-height: 70px;
	max-width: 70px;
	min-height: 70px;
	min-width: 70px;
	border-radius: 50%;
	margin-inline-end: 16px;
`;

export const WhyChoseUsCaption = styled.p`
	color: var(--neutral--800);
	font-size: 22px;
	font-weight: 500;
	line-height: 1.273em;
`;
export const ImageParentContainerInner = styled(Flexbox)`
	width: fit-content;
	justify-content: center;
	flex-direction: column;

	@media screen and (min-width: ${Breakpoints.sm}) {
		flex-direction: row;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		position: relative;
		left: -20px;
	}
`;

export const ImageParentContainer = styled(Col)`
	order: 2;
	@media screen and (min-width: ${Breakpoints.lg}) {
		order: 1;
	}
`;
export const ColorDiv = styled.div`
	width: 57%;
	margin: auto;
	min-height: 81.5%;
	background-color: var(--secondary--color-3);
	border-radius: 32px;
	opacity: 1;
	position: absolute;
	z-index: -1;
`;

export const WhyChooseContainerRow = styled(Row)`
	margin-block: 40px 16px;
`;

export const WhyChooseContainerCol = styled(Col)`
	margin-bottom: 32px;
`;

export const WhyChooseUsContainer = styled(Flexbox)`
	flex-direction: column;
	@media screen and (min-width: ${Breakpoints.lg}) {
		flex-direction: row;
	}
`;

export const WhyChooseUsCaption = styled(Col)`
	margin-inline: auto;
	order: 1;
	@media screen and (min-width: ${Breakpoints.lg}) {
		order: 2;
		padding-inline-start: 60px;
	}
`;
export const WhyChooseButtonContainer = styled(Flexbox)`
	justify-content: center;
	margin-bottom: 60px;
	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-bottom: 0;
	}
`;
