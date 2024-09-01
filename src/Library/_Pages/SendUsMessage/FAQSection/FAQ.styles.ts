"use client";

import Image from "next/image";
import styled from "styled-components";
import { Flexbox } from "@/Library/Grids/Grids";

export const FaqHeading = styled.h2`
	color: var(--neutral--800);
	margin-top: 0;
	margin-bottom: 16px;
	font-size: 46px;
	font-weight: 500;
	line-height: 1.261em;
`;

export const QuestionShell = styled(Flexbox)`
	flex-direction: column;
	gap: 24px;
`;

export const FaqContainer = styled(Flexbox)`
	order: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	border-radius: 24px;
	margin-bottom: 0;
	padding: 36px 28px;

	overflow: hidden;
`;

export const IconContainer = styled.div`
	width: 45px;
	height: 45px;
	min-height: 45px;
	min-width: 45px;
	box-shadow: 0 4px 4px 0 var(--general--shadow-05);
	border-style: none;
	font-size: 22px;
	background-color: rgb(255, 255, 255);
	transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
		skew(0deg, 0deg);
	transform-style: preserve-3d;
	color: rgb(98, 98, 112);

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-inline-end: 26px;
	transition: all 0.3s ease;

	&.active {
		//transform: rotate(90deg);
		box-shadow: 0 4px 4px 0 var(--general--shadow-05);
		background-color: var(--accent--primary-1);

		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
			rotateZ(90deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
		color: rgb(255, 255, 255);
		transition: all 0.3s ease;

		& svg path {
			stroke: #fff;
		}
	}
`;

export const QuestionContainer = styled(Flexbox)`
	flex-direction: column;
	gap: 4px;

	transition: all 3s;
	user-select: none;
`;

export const Question = styled.div`
	color: var(--neutral--800);
	font-size: 22px;
	font-weight: 500;
	line-height: 1.273em;
	transition: all 3s;
`;

export const Answer = styled.div`
	color: var(--neutral--600);
	cursor: pointer;
	transition: all 0.3s;
`;

export const FaqImage = styled(Image)`
	border-radius: 32px;
	object-fit: cover;
	width: 100%;
`;
