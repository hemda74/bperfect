import styled from "styled-components";

export const SelectShell = styled.div`
	position: relative;

	svg {
		position: absolute;
		top: 55%;
		right: 8px;
	}
`;

export const SelectStyle = styled.select<{ hasError?: boolean }>`
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
	-webkit-appearance: none;
	-moz-appearance: none;

	&:hover {
		border-color: ${({ hasError }) => (hasError ? "red" : "var(--neutral--400)")};
		box-shadow: 0 2px 12px 0 var(--general--shadow-03);
	}
`;
