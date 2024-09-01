"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/Grids/Grids";

export const LinkParagraph = styled.p<{ direction: string }>`
	color: var(--accent--primary-1);
	line-height: 1.111em;
	font-weight: 700;
	transition: all 0.3s ease-in-out;
	font-size: 18px;
	margin-inline-end: 0.5rem;
	& ~ svg {
		transform: ${({ direction }) => (direction === "en" ? "rotate(0)" : "rotate(180deg)")};
	}
	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 16px;
	}
`;
