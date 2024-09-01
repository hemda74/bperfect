"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const SendUsContainer = styled.section`
	padding-block: 190px 164px;
	@media screen and (max-width: 576px) {
		padding-block: 60px 100px;
	}
`;

export const SendUsParagraph = styled.p`
	color: var(--neutral--600);
	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	margin-bottom: 40px;
	@media screen and (max-width: 576px) {
		text-align: center;
	}
`;

export const FormContainer = styled.div`
	padding-inline: 48px;
	padding-block: 72px;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	border-radius: 24px;
	position: relative;
	@media screen and (max-width: ${Breakpoints.md}) {
		padding-inline: 24px;
	}
`;

export const PurpleContainer = styled.div`
	opacity: 1;
	z-index: -1;
	width: 406px;
	min-height: 344px;
	background-color: var(--secondary--color-3);
	border-radius: 32px;
	top: 80px;
	bottom: auto;
	left: auto;
	right: -107px;
	position: absolute;
	display: inline;
	@media screen and (max-width: ${Breakpoints.lg}) {
		right: -21px;
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		right: -25px;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 80%;
		right: -25px;
	}
`;

export const BrownContainer = styled.div`
	opacity: 1;
	z-index: -1;
	width: 406px;
	min-height: 394px;
	background-color: var(--secondary--color-2);
	border-radius: 32px;
	top: auto;
	bottom: -218px;
	left: -133px;
	right: auto;
	position: absolute;

	@media screen and (max-width: ${Breakpoints.lg}) {
		left: -21px;
		width: 80%;
	}
`;

export const AppointmentShell = styled.section`
	background-image: linear-gradient(to top, white 55%, var(--neutral--200) 55%);
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -2;
`;
