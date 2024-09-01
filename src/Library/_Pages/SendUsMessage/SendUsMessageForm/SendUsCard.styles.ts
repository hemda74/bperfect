"use client";

import styled from "styled-components";

export const SendUsCardContainer = styled.div`
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 2px 6px 0 var(--general--shadow-01);
	color: var(--neutral--800);
	transform-style: preserve-3d;
	border-radius: 14px;
	align-items: center;
	padding: 18px 45px 18px 18px;
	text-decoration: none;
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease-in-out;
	//transition:
	//	color 0.3s,
	//	transform 0.3s,
	//	box-shadow 0.3s;
	display: flex;
	margin-top: 24px;

	& .image-card {
		margin-inline-end: 1.5rem;
	}

	a {
		color: var(--neutral--800);
		transition: color 0.3s ease-in-out;
	}

	&:hover {
		transform: scale(0.9);

		a {
			color: var(--accent--primary-1);
		}
	}
`;

export const SendUsCardTitle = styled.p`
	color: var(--neutral--600);
	font-size: 18px;
	line-height: 1.111em;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

export const SendUsCardBody = styled.div`
	color: var(--neutral--800);
	word-break: break-all;
	font-size: 18px;
	line-height: 1.111em;
	font-weight: 500;

	& a:not(:last-child) {
		margin-bottom: 1rem;
	}

	& a {
		display: block;

		&:hover {
			text-decoration: underline;
		}
	}
`;
