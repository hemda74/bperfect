"use client";

import Link from "next/link";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Grids/Grids";

export const SubHeading = styled.div`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	background: var(--secondary--color-3);
	padding-block: 20px 20px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
`;

export const SubHeadingLink = styled(Link)`
	color: black;

	&:hover {
		color: var(--accent--primary-1 #8f5cdb);
	}
`;

export const FaceBookIconStyles = styled.div`
	background: var(--accent--primary-1);
`;

export const NavLinks = styled(Link)`
	vertical-align: top;
	color: #222;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;

export const ServiceLinkContainer = styled.div`
	position: relative;

	&:hover > .links {
		display: block;
	}

	&:hover .ChevronIcon {
		transform: rotate(180deg);
		transition: all 0.3s;
	}
`;
export const ChevronIcon = styled.div`
	transition: all 0.3s;

	& svg path {
		stroke: black;
	}
`;

export const ServiceLink = styled.ul`
	position: absolute;
	left: -75%;
	display: none;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	border-radius: 24px;
	padding: 24px;
	z-index: 15;
	width: 250px;

	a {
		color: black;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		&:hover {
			color: var(--accent--primary-1);
			transition: color 0.3s ease;
		}
	}
`;

export const ServiceLinkMobile = styled.ul`
	padding: 24px;

	a {
		color: black;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		&:hover {
			color: var(--accent--primary-1);
			transition: color 0.3s ease;
		}
	}
`;

export const HeaderShell = styled.div`
	border-bottom: 1px solid var(--neutral--300);
`;

export const DesktopMenu = styled(Flexbox)`
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}
	li {
		:hover {
			color: var(--accent--primary-1);
		}
	}
`;

export const MobileMenu = styled.div`
	@media screen and (min-width: ${Breakpoints.lg}) {
		display: none;
	}

	& button {
		@media screen and (max-width: ${Breakpoints.md}) {
			display: none;
		}
	}

	& #menuButton {
		@media screen and (max-width: ${Breakpoints.lg}) {
			display: inline;
		}
	}
`;

export const HamburgerMenu = styled.div`
	transition: all 0.3s ease-in-out;

	& span {
		display: block;
		height: 3px;
		width: 32px;
		background: var(--neutral--800);
		transition: all 0.3s ease-in-out;

		&:first-child {
			transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(0deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
		}

		&:last-child {
			transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(0deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
		}

		&:not(:last-child) {
			margin-bottom: 12px;
			transition: all 0.3s ease-in-out;
		}
	}

	&.active span {
		&:first-child {
			transform: translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(135deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
			transition: all 0.3s ease-in-out;
		}

		&:last-child {
			transform: translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(45deg) skew(0deg, 0deg);
			transform-style: preserve-3d;

			transition: all 0.3s ease-in-out;
		}
	}
`;

export const MobileMenuLinks = styled.ul`
	transform: translateY(0px) translateX(0px);
	transition: transform 400ms ease 0s;
	border-top: 1px solid var(--neutral--300);
	border-bottom: 1px solid var(--neutral--300);
	background-color: var(--neutral--200);
	padding: 24px 24px 32px;
	z-index: 1555;
	position: absolute;
	left: 0;
	right: 0;
	li {
		margin-bottom: 1rem;
	}
`;

export const MobileLinkStyles = styled(Link)`
	font-size: 16px;
	font-weight: 400;
	line-height: 1.667em;
	color: black;
`;
export const LanguageDropDown = styled(Flexbox)<{ locale: string }>`
	position: relative;
	color: black;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	align-items: center;

	@media screen and (min-width: ${Breakpoints.md}) {
		margin-inline-end: 1rem;
	}

	& ul {
		display: none;
		padding: 1rem 0.75rem;
		border-radius: 0.25rem;
		border: 1px solid black;
		background: white;
		width: fit-content;
		position: absolute;
		z-index: 100000;
		top: 30px;
		left: 25%;
		min-width: 130px;

		@media screen and (max-width: ${Breakpoints.lg}) {
			left: ${({ locale }) => locale === "en" && 0};
			right: ${({ locale }) => locale === "ar" && 0};
			top: 28px;
		}

		& li {
			user-select: none;

			& > button {
				cursor: pointer;
				border: none;
				background: transparent;
				color: var(--Text-primary, #102d18);
				padding: 0.5rem;
				font-size: 1.125rem;
				font-style: normal;
				font-weight: 500;
				line-height: 150%;
				position: relative;
				font-family: var(--serif-font), serif;
			}

			& > p {
				cursor: not-allowed;
			}

			&:not(:last-child) {
				margin-bottom: 1rem;
			}

			& a {
				display: inline-block;
				padding: 0;
				width: fit-content;
			}
		}
	}
	&:hover {
		ul {
			display: block;
		}
	}
`;
