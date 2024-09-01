"use client";
import styled from "styled-components";

export const LabelName = styled.label`
	color: var(--neutral--800);
	margin-bottom: 12px;
	font-weight: 700;
	line-height: 1.111em;
	display: block;
`;

export const InputStyles = styled.input<{ hasError?: boolean }>`
	min-height: 72px;
	width: 100%;
	border: 1px solid ${({ hasError }) => (hasError ? "red" : "var(--neutral--300)")};
	background-color: var(--neutral--100);
	box-shadow: 0 4px 20px 0 var(--general--shadow-02);
	color: var(--neutral--800);
	border-radius: 16px;
	margin-bottom: 0;
	padding: 16px 24px;
	font-size: 18px;
	line-height: 1.111em;
	transition:
		box-shadow 0.3s,
		color 0.3s,
		border-color 0.3s;

	&:hover {
		border-color: ${({ hasError }) => (hasError ? "red" : "var(--neutral--400)")};
		box-shadow: 0 2px 12px 0 var(--general--shadow-03);
	}
`;

export const ErrorMessage = styled.span`
	color: red;
	font-size: 14px;
	margin-bottom: 8px;
	display: block;
`;
