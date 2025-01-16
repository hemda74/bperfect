"use client";
import styled from "styled-components";

export const MainButton = styled.button<{
	size?: "Small" | "Default" | "Large" | "fullWidth";
	variant?: "primary1" | "primary2" | "secondary1" | "secondary2";
}>`
	border: 1px solid
		${({ variant }) => {
			switch (variant) {
				case "primary1":
					return "var(--accent--primary-1)";
				case "primary2":
					return "var(--secondary--color-2)";
				case "secondary1":
					return "var(--neutral--300)";
				case "secondary2":
					return "var(--neutral--300)";
				default:
					return "var(--accent--primary-1)";
			}
		}};

	width: ${({ size }) => {
		switch (size) {
			case "fullWidth":
				return "100%";

			default:
				return "";
		}
	}};

	background-color: ${({ variant }) => {
		switch (variant) {
			case "primary1":
				return "var(--accent--primary-1)";
			case "primary2":
				return "var(--neutral--100)";
			case "secondary1":
				return "var(--neutral--100)";
			case "secondary2":
				return "transparent";
			default:
				return "var(--accent--primary-1)";
		}
	}};
	color: ${({ variant }) => {
		switch (variant) {
			case "primary1":
				return "var(--neutral--100)";
			case "primary2":
				return "var(--accent--primary-1)";
			case "secondary1":
				return "var(--neutral--800)";
			case "secondary2":
				return "var(--neutral--100)";
			default:
				return "var(--neutral--100)";
		}
	}};
	text-align: center;
	transform-style: preserve-3d;
	border-radius: 15px;
	justify-content: center;
	padding: ${({ size }) => {
		switch (size) {
			case "Small":
				return "18px 24px";
			case "Default":
				return "26px 38px";
			case "Large":
				return "28px 56px;";
			case "fullWidth":
				return "14px 20px;";
			default:
				return "26px 38px";
		}
	}};
	font-size: ${({ size }) => {
		switch (size) {
			case "Large":
				return "20px;";
			case "Default":
				return "18px";
			case "Small":
				return "16px";

			default:
				return "20px";
		}
	}};
	font-weight: ${({ variant }) => {
		switch (variant) {
			case "primary1":
				return "700";
			case "primary2":
				return "700";
			case "secondary1":
				return "400";
			case "secondary2":
				return "400";
			default:
				return "700";
		}
	}};
	line-height: ${({ size }) => {
		switch (size) {
			case "Large":
				return "1.1em";
			case "Small":
				return "1.125em";
			default:
				return "1.1em";
		}
	}};
	text-decoration: none;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		border-color: ${({ variant }) => {
			switch (variant) {
				case "primary1":
					return "var(--secondary--color-1)";
				case "primary2":
					return "var(--secondary--color-2)";
				case "secondary1":
					return "var(--accent--primary-1)";
				case "secondary2":
					return "var(--neutral--100)";
				default:
					return "var(--secondary--color-1)";
			}
		}};
		background-color: ${({ variant }) => {
			switch (variant) {
				case "primary1":
					return "var(--secondary--color-1)";
				case "primary2":
					return "var(--secondary--color-2)";
				case "secondary1":
					return "var(--accent--primary-1)";
				case "secondary2":
					return "var(--neutral--100)";
				default:
					return "var(--secondary--color-1)";
			}
		}};
		color: ${({ variant }) => {
			switch (variant) {
				case "primary1":
					return "var(--neutral--100)";
				case "primary2":
					return "var(--accent--primary-1)";
				case "secondary1":
					return "var(--neutral--100)";
				case "secondary2":
					return "var(--neutral--800)";
				default:
					return "var(--neutral--100)";
			}
		}};
		transform: translate3d(0, -3px, 0.01px);
	}
`;
