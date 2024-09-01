"use client";

import Image from "next/image";
import styled from "styled-components";
import { Flexbox } from "@/Library/Grids/Grids";

export const CardContainer = styled.div`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	border-radius: 24px;
	padding: 30px;
	width: 100%;
	height: 100%;
	min-width: 100%;
	min-height: 100%;
`;

export const CardShell = styled(Flexbox)`
	flex-wrap: nowrap;
	gap: 24px;
`;

export const OurValuesIcon = styled(Image)`
	border-radius: 50%;
`;

export const CardHeading = styled.h3`
	color: var(--neutral--800);
	margin-top: 0;
	margin-bottom: 8px;
	font-size: 24px;
	font-weight: 500;
	line-height: 1.5em;
`;

export const CardParagraph = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;
