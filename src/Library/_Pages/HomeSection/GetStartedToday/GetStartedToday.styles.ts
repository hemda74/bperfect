"use client";
import Image from "next/image";
import styled from "styled-components";

export const GetStartShell = styled.div`
	border-radius: 32px;
	// padding: 17.5% 40px;
	color: var(--neutral--100);
	background-color: var(--accent--primary-1);
	overflow: hidden;
	/* min-height: 100vh; */
	margin-block: 62px 240px;
`;

export const GetStartImageContainer = styled.div`
	position: relative;
`;

export const GetStartImage = styled(Image)`
	position: absolute;
	top: 50%;
	left: 0;
	bottom: 0;
	right: 0;
`;

export const GetStartContainer = styled.div`
	padding: 24.5% 40px;
`;

export const GetStartSubTitle = styled.div`
	color: var(--neutral--100);
	letter-spacing: 0.06em;
	text-transform: uppercase;
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.111em;
`;

export const GetStartHeading = styled.div`
	margin-bottom: 16px;
	font-size: 50px;
	font-weight: 500;
	line-height: 1.2em;
	color: var(--neutral--100);
`;

export const GetStartCaption = styled.p`
	margin-bottom: 40px;

	color: var(--neutral--100);

	font-family: Onest, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
`;
