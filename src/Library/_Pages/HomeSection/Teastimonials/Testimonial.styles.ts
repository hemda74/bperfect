"use client";
import Image from "next/image";
import styled from "styled-components";
import { Locale } from "@/Library/Globals";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const TestimonialShell = styled.section`
	background-color: var(--neutral--200);
`;

export const TestimonialHeading = styled.div`
	margin: auto;
	text-align: center;
	max-width: 574px;
`;

export const TestimonialCardContainer = styled(Flexbox)`
	height: 100%;
	padding-bottom: 100px;
`;

export const TestimonialCard = styled.div<Locale>`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	background-image: ${({ locale }) =>
		locale !== "en"
			? "linear-gradient(to left,var(--neutral--100) 74%,var(--secondary--color-3) 74%)"
			: "linear-gradient(to right,var(--neutral--100) 74%,var(--secondary--color-3) 74%)"};
	border-radius: 32px;
	padding: 58px 58px 58px 65px;
	margin-inline: 94px;
	margin-top: 52px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-inline: 0;
	}
`;

export const TestimonialImage = styled(Image)`
	border-radius: 32px;
	object-fit: cover;
`;

export const ReviewImage = styled(Image)`
	border-radius: 50%;
	object-fit: contain;
`;

export const TestimonialCaption = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	white-space: normal;
	text-align: start;
	display: inline-block;
	margin-top: 24px;
	margin-bottom: 48px;
`;

export const TestimonialName = styled.p<Locale>`
	white-space: normal;
	color: var(--neutral--700);
	font-size: 20px;
	line-height: 1.1em;
	text-align: ${({ locale }) => (locale !== "en" ? "right" : "left")};
	font-weight: 500;
	margin-bottom: 12px;
`;

export const TestimonialTitle = styled.p<Locale>`
	font-weight: 400;
	white-space: normal;
	color: var(--accent--primary-1);
	font-size: 18px;
	line-height: 1.111em;
`;
