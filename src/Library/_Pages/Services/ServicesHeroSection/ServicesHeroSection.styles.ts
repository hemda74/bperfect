"use client";
import styled from "styled-components";

export const ServicesHero = styled.section`
	padding-block: 80px 240px;
`;
export const ServicesHeroSectionTitle = styled.p`
	text-align: center;
	color: var(--accent--primary-1);
	letter-spacing: 0.06em;
	text-transform: uppercase;
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.111em;

	& ~ h1 {
		font-family: Onest, sans-serif;
		text-align: center;
		max-width: 900px;
		margin-block: 16px 56px;

		span {
			display: inline-block;
			position: relative;

			&:before {
				content: "";
				background-image: url("/shape.svg");
				background-position: 50% 100%;
				background-repeat: no-repeat;
				background-size: 100%;
				width: 100%;
				height: 20px;
				position: absolute;
				left: 0;
				bottom: 0;
				z-index: 30;
			}
		}
	}
`;
