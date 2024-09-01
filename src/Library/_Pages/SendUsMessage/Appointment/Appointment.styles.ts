"use client";

import styled from "styled-components";
import { Row } from "@/Library/Grids/Grids";
import { SendUsParagraph } from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsMessage.styles";

export const ContactShell = styled.div`
	text-align: center;

	h1 {
		span {
			position: relative;

			&:before {
				content: "";
				background-image: url("/shape.svg");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
				width: 100%;
				height: 20px;
				position: absolute;
				bottom: 0;
			}
		}
	}
`;

export const SendUsCaption = styled(SendUsParagraph)`
	max-width: 490px;
	text-align: center;
	margin-inline: auto;
`;

export const CardContainer = styled(Row)`
	max-width: 740px;
	margin: auto;
`;
