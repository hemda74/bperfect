"use client";
import styled from "styled-components";
import { Display1 } from "@/Library/Typography/Typography";

export const DetailsSection = styled.section`
	background-color: rgba(255, 242, 230, 0.5);
	padding-block: 108px 118px;
`;
export const DetailsHeader = styled.div`
	max-width: 1015px;
	margin: auto;
	text-align: center;
`;
export const DetailsHeroBody = styled.p`
	max-width: 734px;
	margin: auto;
`;
export const DetailsHeroHeading = styled(Display1)`
	margin-block: 12px 16px;
`;
export const DetailsButton = styled.button`
	background-color: transparent;
	color: var(--accent--primary-1);
	border: 2px solid var(--accent--primary-1);
	border-radius: 12px;
	padding: 14px 22px;
	font-size: 18px;
	line-height: 1.111em;
	display: inline-block;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		border-color: var(--accent--primary-1);
		background-color: var(--accent--primary-1);
		color: var(--neutral--100);
		transform: scale(0.8);
	}
`;
export const DetailsDate = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 1.111em;
	color: var(--neutral--700);
`;
