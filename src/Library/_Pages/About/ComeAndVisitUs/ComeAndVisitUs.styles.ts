"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const ComeAndVisitUsHeading = styled.div`
	text-align: center;
	max-width: 616px;
	margin: auto;

	@media screen and (max-width: ${Breakpoints.lg}) {
	}
`;

export const ComeAndVisitUsBody = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const ComeAndVisitUsParagraph = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const ComeAndVisitUsImage = styled(Image)`
	object-fit: fill;
	width: 100%;
	height: 100%;
	border-radius: 32px;
`;

export const LinkContainer = styled(Flexbox)`
	gap: 10px;
	transition: all 0.4s ease-in-out;
	margin-inline-end: 0.5rem;
	margin-top: 20px;

	&:hover {
		margin-inline-start: 0.5rem;
		margin-inline-end: 0;
		transition: all 0.4s ease-in;
		p {
			color: var(--accent--primary-1);
		}

		//& a {
		//}
	}
`;

export const LinksStyles = styled(Link)`
	line-height: 1.667em;
	font-size: 18px;
	color: black;

	& .phoneNumber {
		display: block;
	}
`;

export const Divider = styled.div`
	margin-top: 58px;
	margin-bottom: 37px;
	height: 1px;
	background-color: var(--neutral--400);
`;

export const ArrowContainer = styled.div`
	width: 50px;
	height: 50px;
	min-height: 50px;
	min-width: 50px;
	font-size: 23px;
	background: gray;
	border-radius: 50%;
	text-align: center;
`;
