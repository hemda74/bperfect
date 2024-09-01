"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const AboutThisServiceCaption = styled.div`
	border-radius: 20px;
	padding: 80px 32px;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);

	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 40px;
	}

	& > div {
		max-width: 660px;
		margin: auto;

		ul {
			margin-top: 16px;
			margin-bottom: 33px;
			padding-inline-start: 40px;

			li {
				list-style-type: disc;
				margin-bottom: 8px;
				padding-inline-start: 8px;
				display: list-item;
				text-align: -webkit-match-parent;
				unicode-bidi: isolate;
				color: var(--neutral--600);
				font-family: Onest, sans-serif;
				font-size: 18px;
				font-weight: 400;
				line-height: 1.667em;
			}
		}
	}

	h2 {
		color: var(--neutral--800);
		font-size: 50px;
		line-height: 1.2em;
		font-weight: 500;
		margin-bottom: 16px;
	}

	h3 {
		color: var(--neutral--800);
		font-size: 32px;
		line-height: 1.438em;
		font-weight: 500;
		margin-top: 48px;
		margin-bottom: 16px;
	}

	p {
		color: var(--neutral--600);
		font-family: Onest, sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.667em;
	}
`;

export const AboutThisServiceForm = styled.div`
	width: 100%;
	background-color: var(--neutral--200);
	padding: 53px 32px 78px;
	position: sticky;
	top: 0;
	border-radius: 20px;
	margin-bottom: 200px;
	@media screen and (max-width: ${Breakpoints.lg}) {
		margin-bottom: 0;
	}

	p {
		color: var(--neutral--600);
		font-family: Onest, sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.667em;
	}

	margin-bottom: 48px;
`;
export const AboutHeaders = styled.h3`
	color: var(--accent--primary-1) !important;
`;
