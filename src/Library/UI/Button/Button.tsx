import React from "react";
import { MainButton } from "@/Library/UI/Button/Button.styles";

const Button = ({
	Body,
	size,
	variant,
	type
}: {
	Body: string;
	size?: "Small" | "Default" | "Large" | "fullWidth";
	variant?: "primary1" | "primary2" | "secondary1" | "secondary2";
	type?: 'button' | 'submit' | 'reset';
}) => {
	return (
		<MainButton variant={variant} type={type} size={size}>
			{Body}  		</MainButton>
	);
};


export default Button;
