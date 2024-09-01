import React, { ChangeEventHandler, forwardRef, ReactNode } from "react";
import {
	LabelName,
	ErrorMessage,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent.styles";
import {
	SelectShell,
	SelectStyle,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SelectComponent.styles";

const SelectComponent = forwardRef<
	HTMLSelectElement,
	{
		Label: string;
		children: ReactNode;
		error?: string;
		onChange?: ChangeEventHandler<HTMLSelectElement>;
	}
>(({ Label, children, error, onChange, ...rest }, ref) => (
	<SelectShell>
		{error && <ErrorMessage>{error}</ErrorMessage>}
		<LabelName htmlFor={Label}>{Label}</LabelName>
		<SelectStyle id={Label} hasError={!!error} ref={ref} {...rest} onChange={onChange}>
			{children}
		</SelectStyle>
		<svg
			width="16px"
			height="16px"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
		>
			<path
				d="M6 9L12 15L18 9"
				stroke="#000000"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	</SelectShell>
));

SelectComponent.displayName = "SelectComponent";

export default SelectComponent;
