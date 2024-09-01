"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const ButtonOne = styled.button`
	background: red;
	position: absolute;
	color: black;
	right: 0;

	width: 64px;
	height: 64px;
	min-height: 64px;
	min-width: 64px;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	color: var(--neutral--800);
	transform-style: preserve-3d;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	line-height: 1em;
	text-decoration: none;
	transition:
		border-color 0.3s,
		transform 0.3s,
		background-color 0.3s,
		color 0.3s;
	display: flex;

	&:hover {
		background-color: var(--accent--primary-1);

		& svg path {
			stroke: #fff;
		}
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		bottom: 0;
		right: 35%;
	}
`;
export const ButtonTwo = styled.button`
	background: red;
	color: black;
	position: absolute;
	left: 0;

	width: 64px;
	height: 64px;
	min-height: 64px;
	min-width: 64px;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	color: var(--neutral--800);
	transform-style: preserve-3d;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	line-height: 1em;
	text-decoration: none;
	transition:
		border-color 0.3s,
		transform 0.3s,
		background-color 0.3s,
		color 0.3s;
	display: flex;

	&:hover {
		background-color: var(--accent--primary-1);

		& svg path {
			stroke: #fff;
		}
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		bottom: 0;
		left: 35%;
	}
`;
