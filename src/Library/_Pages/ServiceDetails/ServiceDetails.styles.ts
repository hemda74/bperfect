"use client";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const ServiceDetailsBody = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;
export const ServiceDetailsContainer = styled(Flexbox)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: column;
	}
`;

export const ServiceDetailsIcon = styled(Image)`
	border-radius: 50%;
	margin-inline-end: 31px;
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 28px;
	}
`;
