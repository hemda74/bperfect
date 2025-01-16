"use client";
import styled, { css } from "styled-components";

export const Breakpoints = {
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1280px",
};

export const getContainerMediaQueries = () => css`
	${Object.entries(Breakpoints).map(
		// eslint-disable-next-line
		([key, value]) => `
        @media (min-width: ${value}) {
            max-width: ${value} !important;
        }
    `,
	)}
`;

export const Section = styled.section`
	width: 100%;
	padding-right: 1.25rem;
	padding-left: 1.25rem;
	margin-right: auto;
	margin-left: auto;
	${getContainerMediaQueries()}
`;

type FLex = {
	aligncenter?: "center" | "start" | "end" | "flex-end";
	justify?: "space-between" | "center" | "space-around" | "end";
	gap?: number | null;
	direction?: "column" | "row" | "column-reverse" | "row-reverse";
	ColumnGab?: number;
};

const getFlexStyles = (props: FLex) => css`
	display: flex;
	align-items: ${props.aligncenter ?? ""};
	justify-content: ${props.justify ?? ""};
	gap: ${`${props.gap ?? ""}px`};
	flex-direction: ${props.direction};

	& > * {
		box-sizing: border-box;
	}

	& svg,
	& * > svg {
		flex-shrink: 0;
	}
`;

export const Flexbox = styled.div<FLex>`
	${getFlexStyles}
`;

export const Row = styled.div<FLex>`
	${getFlexStyles};

	flex-wrap: wrap;
	margin-right: ${({ ColumnGab }) => `calc(${ColumnGab || 1.5}rem * -0.5)`};
	margin-left: ${({ ColumnGab }) => `calc(${ColumnGab || 1.5}rem * -0.5)`};

	& > * {
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100%;
		max-width: 100%;
		padding-right: ${({ ColumnGab }) => `calc(${ColumnGab || 1.5}rem * 0.5)`};
		padding-left: ${({ ColumnGab }) => `calc(${ColumnGab || 1.5}rem * 0.5)`};
	}
`;

type ColProps = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
};

export const Col = styled.div<ColProps>`
	flex: 0 0 auto;
	width: ${({ xs }: ColProps) =>
		xs === undefined || xs <= 0 ? "" : `${(xs / 12) * 100}%`} !important;

	@media (min-width: 576px) {
		width: ${({ sm }: ColProps) =>
			sm === undefined || sm <= 0 ? "" : `${(sm / 12) * 100}%`} !important;
	}

	@media (min-width: 768px) {
		flex: 0 0 auto !important;
		width: ${({ md }: ColProps) =>
			md === undefined || md <= 0 ? "" : `${(md / 12) * 100}%`} !important;
	}

	@media (min-width: 992px) {
		flex: 0 0 auto !important;
		width: ${({ lg }: ColProps) =>
			lg === undefined || lg <= 0 ? "" : `${(lg / 12) * 100}%`} !important;
	}

	@media (min-width: 1200px) {
		flex: 0 0 auto !important;
		width: ${({ xl }: ColProps) =>
			xl === undefined || xl <= 0 ? "" : `${(xl / 12) * 100}%`} !important;
	}

	@media (min-width: 1400px) {
		width: ${({ xxl }: ColProps) =>
			xxl === undefined || xxl <= 0 ? "" : `${(xxl / 12) * 100}%`} !important;
	}
`;
