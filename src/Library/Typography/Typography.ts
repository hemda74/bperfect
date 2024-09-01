"use client";
import styled, { css } from "styled-components";
import HeadingType, { TextColorType } from "./TypographyProps";
import { Breakpoints } from "@/Library/Grids/Grids";

const getColor = ({ color = "Text-primary" }: TextColorType): string => {
	switch (color) {
		case "Text-primary":
			return "var(--Text-primary, #102D18)";

		case "white":
			return "#FFFFFF";
		default:
			return "#000";
	}
};

const getWeight = ({
	weight = "normal",
}: {
	weight?: "normal" | "semi-bold" | "extra-bold" | "bold";
}): string => {
	switch (weight) {
		case "semi-bold":
			return "500";
		case "bold":
			return "600";
		case "extra-bold":
			return "700";
		default:
			return "400";
	}
};

const textAlign = ({ align }: { align?: "left" | "right" | "center" }): string => {
	switch (align) {
		case "left":
			return "left";
		case "right":
			return "right";
		case "center":
			return "center";
		default:
			return "";
	}
};

const baseStyles = css<HeadingType & TextColorType>`
	color: ${getColor} !important;
	text-align: ${textAlign} !important;
`;

export const Heading1 = styled.h1<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 6.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 6rem;
	letter-spacing: -0.195rem;
	${baseStyles}
`;

export const Heading2 = styled.h2<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 4.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 110%;
	letter-spacing: -0.09rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 2.75rem;
		line-height: 120%;
	}
	${baseStyles}
`;

export const Heading3 = styled.h3<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 110%;
	letter-spacing: -0.07rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		color: var(--Text-primary, #102d18);
		text-align: center;
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: 120%;
	}
	${baseStyles}
`;
export const Heading4 = styled.h4<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: -0.05rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		color: var(--Text-primary, #102d18);
		font-size: 2rem;
		line-height: 140%;
	}
	${baseStyles}
`;

export const Heading5 = styled.h5<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	letter-spacing: -0.04rem;

	@media screen and (max-width: ${Breakpoints.lg}) {
		color: var(--Text-primary, #102d18);
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: 140%;
		letter-spacing: -0.015rem;
	}
	${baseStyles}
`;

export const Heading6 = styled.h6<HeadingType & TextColorType>`
	font-family: var(--serif-font), serif !important;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -0.015rem;
	${baseStyles}
`;

export const Paragraph = styled.p<HeadingType & TextColorType>`
	font-size: 1rem;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: -0.18px;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const TagLing = styled.p<HeadingType>`
	color: var(--Text-secondary, #008a00);
	text-align: center;
	font-family: var(--serif-font), serif !important;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 150%;
	letter-spacing: 0.0125rem;
	margin-bottom: 1.5rem;
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		letter-spacing: 0.01125rem;
	}
`;

export const Subtitle = styled.p`
	color: var(--accent--primary-1);
	letter-spacing: 0.06em;
	text-transform: uppercase;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.111em;
`;

export const RichTextV2 = styled.p`
	color: var(--neutral--800);
	margin-top: 0;
	margin-bottom: 16px;
	font-size: 46px;
	font-weight: 500;
	line-height: 1.261em;
`;

export const BoldText = styled.span`
	color: var(--neutral--800);
	font-weight: 700;
	font-size: 18px;
`;

export const HeadingH3 = styled.h3`
	color: var(--neutral--800);
	font-size: 24px;
	font-weight: 500;
	line-height: 1.5em;
`;

export const TextSingle200 = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 500;
	line-height: 1.5em;
`;

export const Display1 = styled.h1`
	color: var(--neutral--800);
	font-size: 72px;
	font-weight: 500;
	line-height: 1.167em;

	@media screen and (max-width: ${Breakpoints.lg}) {
		font-size: 60px !important;
		text-align: center;
	}

	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 50px !important;
		text-align: center;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		font-size: 42px !important;
		text-align: center;
	}
`;

export const Display2 = styled.h2`
	color: var(--neutral--800);
	font-size: 50px;
	font-weight: 500;
	line-height: 1.2em;
`;

export const Display3 = styled.h3`
	color: var(--neutral--800);
	font-size: 32px;
	font-weight: 500;
	line-height: 1.438em;
`;

export const Display4 = styled.h3`
	font-size: 24px;
	font-weight: 500;
	line-height: 1.583em;
`;

export const MutedText = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 15px;
	font-weight: 400;
	line-height: 1.667em;
	margin-top: 1rem;
`;
