import React, { forwardRef } from "react";
import {
	ErrorMessage,
	LabelName,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent.styles";
import { TextArea } from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/TextAreaComponent.styles";

const TextAreaComponent = forwardRef<
	HTMLTextAreaElement,
	{
		Label: string;
		placeHolder: string;
		error?: string;
	}
>(({ Label, placeHolder, error, ...rest }, ref) => (
	<div>
		{error && <ErrorMessage>{error}</ErrorMessage>}
		<LabelName htmlFor={Label}>{Label}</LabelName>
		<TextArea id={Label} placeholder={placeHolder} hasError={!!error} ref={ref} {...rest} />
	</div>
));

TextAreaComponent.displayName = "TextAreaComponent";

export default TextAreaComponent;
