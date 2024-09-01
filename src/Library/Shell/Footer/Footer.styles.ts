"use client";

import styled from "styled-components";
import { Flexbox, Section } from "@/Library/Grids/Grids";

export const FooterShell = styled.footer`
	background-color: var(--neutral--200);
`;

export const FooterStyles = styled(Section)`
	padding-top: 140px;
`;

export const FooterCaption = styled.ul`
	font-size: 20px;
	line-height: 1.1em;
	font-weight: 700;
	color: var(--neutral--800);
	margin-bottom: 40px;
`;

export const FooterLink = styled.li`
	color: var(--neutral--600);
	transform-style: preserve-3d;
	font-size: 18px;
	line-height: 1.112em;
	text-decoration: none;
	transition:
		transform 0.3s,
		color 0.3s;
	font-weight: 400;
	list-style-type: none;
	margin-bottom: 18px;
	:hover {
		color: var(--accent--primary-1);
	}
	a {
		text-decoration: none;
		color: var(--neutral--600);
	}

	& .Footer-link-Bold {
		line-height: 1.667em;
		font-size: 18px;
		color: var(--neutral--800);
		font-weight: 500;
	}
`;

export const CopyRightsSection = styled(Flexbox)`
	background-color: var(--neutral--300);
	text-align: center;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	padding: 30px 35px;
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 400;
	line-height: 1.667em;
	align-items: center;
	justify-content: space-between;
	margin-top: 140px;

	@media screen and (max-width: 992px) {
		flex-direction: column;
		gap: 16px;
	}
`;

export const LinkFooterStyles = styled.div`
	line-height: 1.667em;
	font-size: 18px;

	& .phoneNumber {
		display: block;
	}
`;
