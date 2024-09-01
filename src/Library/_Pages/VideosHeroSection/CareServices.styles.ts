"use client";
import styled from "styled-components";
import { Locale } from "@/Library/Globals";
import { Breakpoints } from "@/Library/Grids/Grids";

export const CareServicesInner = styled.div`
	overflow: hidden;
	padding-inline-start: 24px;

	&:hover {
		:first-child img {
			transform: scale(1.1);
		}

		:last-child {
			:last-child p {
				margin-inline-end: 6px;
			}
		}
	}

	&:hover h3 {
		color: var(--accent--primary-1);
	}
	@media screen and (max-width: ${Breakpoints.lg}) {
		padding-inline-start: 0;
	}
`;

export const CareServicesImageContainer = styled.div`
	border-radius: 20px;
	overflow: hidden;

	img {
		transition: all 0.2s ease-in-out;
		object-fit: cover;
		//width: 100%;
		//height: 100%;
	}
`;
export const CareServicesCaption = styled.div<Locale>`
	width: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);

	padding: 45px 36px;
	margin: ${({ locale }) => (locale === "en" ? "-112px 40px 0 0" : " -112px 0 0 40px")};

	position: relative;

	border: 1px solid var(--neutral--300);
	border-radius: 24px;

	border-top-left-radius: ${({ locale }) => (locale === "en" ? "0" : "")};
	border-top-right-radius: ${({ locale }) => (locale === "en" ? "" : "0")};

	a {
		font-size: 18px;
	}

	h3 {
		transition: all 0.2s ease-in-out;
	}

	img {
		border-radius: 50%;
		position: absolute;
		top: 0;
		transform: translateY(-50%);
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		h3 {
			font-size: 28px;
		}
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		h3 {
			font-size: 24px;
		}
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		h3 {
			font-size: 22px;
		}
	}
`;
export const CareServicesBody = styled.p`
	margin-block: 0.5rem 1.5rem;
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;

	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 16px;
	}
`;
