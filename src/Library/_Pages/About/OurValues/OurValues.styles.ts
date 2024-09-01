"use client";

import Image from "next/image";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const OurValuesContaner = styled.div`
	position: relative;

	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
	}
`;

export const OurValuesHeading = styled.h2`
	color: var(--neutral--800);
	margin-top: 0;
	margin-bottom: 16px;
	font-size: 46px;
	font-weight: 500;
	line-height: 1.261em;
`;

export const OurValuesDescription = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const OurValuesImage = styled(Image)`
	border-radius: 32px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-inline: auto;
	}
`;

export const FloatingBG = styled.div`
	z-index: -1;
	width: 86%;
	min-height: 60%;
	background-color: var(--secondary--color-3);
	border-radius: 24px;
	top: auto;
	bottom: -111px;
	left: -118px;
	right: auto;
	position: absolute;
	@media (max-width: ${Breakpoints.lg}) {
		left: -30px;
	}
`;

export const CardSection = styled(Flexbox)`
	flex-direction: column;
	gap: 24px;
	margin-top: 24px;
`;
