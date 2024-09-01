"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Grids/Grids";

export const TeamJoinCommunityTitle = styled.div`
	max-width: 37.76875rem;
`;

export const TeamJoinCommunityContainer = styled(Flexbox)`
	background-color: var(--accent--primary-1);
	background-image: linear-gradient(86deg, rgba(143, 92, 219, 0.81), var(--transparent) 41%),
		linear-gradient(to bottom, var(--accent--primary-1), var(--transparent) 52%), url("/Flower.svg"),
		url("/Flower.svg");
	background-position:
		0 0,
		0 0,
		0 30%,
		0 30%;
	background-repeat: repeat, repeat, repeat, repeat;
	background-size: auto, auto, auto, auto;
	border-radius: 28px;
	padding: 84px 40px;
	gap: 28px;
`;
export const ButtonContainer = styled.div`
	:first-child {
		margin-inline-end: 24px;
	}
`;
