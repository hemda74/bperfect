import styled from "styled-components";

export const ButtonContainer = styled.div`
	position: fixed;
	bottom: 80px;
	left: 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	z-index: 1000;
`;

export const WhatsAppButton = styled.button`
	background-color: #25d366;
	color: white;
	border: none;
	padding: 12px;
	border-radius: 50%;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #128c7e;
	}
`;

export const CallButton = styled.button`
	background-color: #b89c6c;
	color: white;
	border: none;
	padding: 12px;
	border-radius: 50%;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #ffa794;
	}
`;
