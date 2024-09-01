"use client";
import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";

export const DoctorCardContainer = styled.div`
	position: relative;
	//overflow: hidden;
	padding-bottom: 66px;
	width: fit-content;
	margin: auto;

	&:hover {
		& img {
			scale: 1.1;
			transition: all 0.2s ease-in;
		}
	}
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	border-radius: 26px;
`;

export const OurTeamImage = styled(Image)`
	object-fit: cover;
	width: 100%;
	border-radius: 26px;
	transition: all 0.2s ease-out;

	height: 100%;
`;

export const DoctorInfoContainer = styled.div`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	border-radius: 24px;
	width: 88%;
	max-width: 294px;
	border-top-left-radius: 0;
	padding: 34px 36px 40px;
	position: absolute;
	bottom: 0;
	transform: translateY(-0%);
`;

export const DoctorName = styled(Display1)`
	//font-size: 24px;
	font-size: 19px !important;
	font-weight: 700;
	line-height: 1.583em;
	margin-bottom: 4px;
	color: rgb(9, 7, 23);
	text-align: start !important;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 20px !important;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 24px !important;
	}
`;

export const DoctorTitle = styled.p`
	font-weight: 400;
	color: var(--accent--primary-1);
	font-size: 16px;
	line-height: 1.111em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px !important;
	}
`;
