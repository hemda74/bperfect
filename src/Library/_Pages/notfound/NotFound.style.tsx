"use client";
import styled from "styled-components";

export const NotFoundBox = styled.div`
	background-color: #ffffff;
	border: 1px solid rgb(216, 216, 216);
	border-radius: 20px;
	padding: 82px 84px 106px;
	overflow: hidden;

	& h1 {
		color: var(--secondary--color-1);
		font-size: 223px;
		font-weight: 700;
		line-height: 1em;

		transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		opacity: 1;
		transform-style: preserve-3d;
		text-align: center;
	}

	& h2 {
		color: var(--neutral--800);
		font-size: 72px;
		font-weight: 500;
		line-height: 1.167em;
		margin-bottom: 1rem;
		text-align: center;
	}

	& p {
		transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		opacity: 1;
		transform-style: preserve-3d;
		margin-bottom: 48px;

		color: var(--neutral--600);
		font-size: 18px;
		font-weight: 400;
		line-height: 1.667em;
		text-align: center;
	}
`;
