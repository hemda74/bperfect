"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const TeamArticlesCardInner = styled.div`
	cursor: pointer;
	width: 92%;
	margin-inline-start: auto;
	margin-bottom: 48px;

	&:hover img {
		transform: scale(1.1);
	}

	&:hover h3 {
		color: var(--accent--primary-1);
	}

	h3 {
		transition: all 0.3s;
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-inline: auto;
	}
`;

export const TeamArticlesCardImage = styled.div`
	border-radius: 30px;
	overflow: hidden;

	img {
		width: 100%;
		object-fit: cover;
		transition: all 0.3s;
	}
`;
export const TeamArticlesCardDivider = styled.div`
	height: 1px;
	background-color: var(--neutral--400);
	margin-top: 28px;
	margin-bottom: 32px;
`;

export const CardFooter = styled(Flexbox)`
	& a {
		font-size: 16px;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		& p {
			font-size: 16px;
		}
	}
`;

export const TeamArticlesCardCaption = styled.div`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 2px 12px 0 var(--general--shadow-02);
	border-radius: 32px;
	margin-top: -137px;
	padding: 46px 44px 55px;
	margin-inline-start: -43.6752px;
	position: relative;
	width: 95%;

	@media screen and (max-width: ${Breakpoints.lg}) {
		width: 100%;
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		width: 100%;
		margin-inline-start: 0;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		padding: 38px 24px 45px;

		h3 {
			font-size: 22px;
		}
	}
`;
