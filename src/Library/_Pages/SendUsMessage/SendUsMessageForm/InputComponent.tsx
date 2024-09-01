import React, { forwardRef } from "react";
import { InputStyles, LabelName, ErrorMessage } from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent.styles";

const InputComponent = forwardRef<HTMLInputElement, {
	Label: string;
	type: string;
	name?: string;
	placeHolder: string;
	error?: string;
}>(({
	Label,
	type,
	placeHolder,
	error,
	name,
	...rest
}, ref) => (
	<div>
		{error && <ErrorMessage>{error}</ErrorMessage>}
		<LabelName htmlFor={Label}>{Label}</LabelName>
		<InputStyles
			id={Label}
			type={type}
			placeholder={placeHolder}
			hasError={!!error}
			ref={ref}
			name={name}
			{...rest} />
	</div>
));

InputComponent.displayName = 'InputComponent';

export default InputComponent;
