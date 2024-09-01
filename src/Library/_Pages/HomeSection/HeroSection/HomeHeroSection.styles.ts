"use client";

import Link from "next/link";
import styled from "styled-components";
import { Breakpoints, Col, Flexbox, Row } from "@/Library/Grids/Grids";

export const HeroParagraph = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	color: var(--neutral--700);
	margin-bottom: 40px;
`;

export const PlayIconContainer = styled(Flexbox)`
	background-color: var(--neutral--100);
	transform-style: preserve-3d;
	border-radius: 50%;
	width: 52px;
	height: 52px;
	border: 1px solid var(--neutral--300);
	box-shadow: 0 4px 10px 0 var(--button-shadow--white-01);
	flex: 0 auto;
	padding-left: 4px;
	transition-property: none;
	position: static;
	justify-content: center;
	align-items: center;
`;

export const IconCaption = styled.div`
	font-weight: 500;
	font-size: 18px;
	line-height: 1.111em;
	margin-inline-start: 10px;
`;

export const ContactInfoContainer = styled.div`
	border-radius: 20px;
	padding: 20px;
	width: 100%;
	//margin-top: -87px;
	position: absolute;
	top: -120px;
	left: 50%;
	transform: translateX(-50%);
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);

	transform-style: preserve-3d;

	& ${Row} > ${Col}:not(:first-child):after {
		content: "";
		height: 80%;
		border: 1px solid var(--neutral--400);
		opacity: 1;
		display: inline-block;
		position: absolute;
		top: 10%;
		@media screen and (max-width: ${Breakpoints.lg}) {
			height: 0;
		}
	}
`;

export const ContactInfoLinkStyles = styled(Link)`
	font-size: 18px;
	cursor: pointer;
	font-weight: 700;
	line-height: 1.111em;
	color: var(--accent--primary-1);
`;

export const CardICon = styled.div`
	border-radius: 50%;
	max-height: 70px;
	max-width: 70px;
	min-height: 70px;
	min-width: 70px;
	overflow: hidden;
	margin-right: 16px;
`;

export const CardCaption = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	margin-bottom: 18px;

	color: var(--neutral--600);
`;

export const CardCaptionContent = styled(Flexbox)`
	flex-direction: column;
	justify-content: space-between;
`;

export const CardInfoShell = styled(Flexbox)`
	//border-left: 2px solid var(--neutral--300);

	@media screen and (max-width: ${Breakpoints.md}) {
		flex-direction: column;
		align-items: center;
	}
`;

export const CardInfoShellBorder = styled(CardInfoShell)`
	min-height: 206px;
	margin-left: 20px;
	margin-right: 20px;
`;

export const SpanStyles = styled.span`
	position: relative;
	font-weight: inherit;
	display: inline-block;
	width: fit-content;

	&:before {
		content: "";
		background-image: url("/shape.svg");
		width: 100%;
		height: 20px;
		position: absolute;
		bottom: 0;
		z-index: 10;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
`;
