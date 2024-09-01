"use client";
import React, { useState } from "react";
import {
	Answer,
	FaqContainer,
	IconContainer,
	Question,
	QuestionContainer,
} from "@/Library/_Pages/SendUsMessage/FAQSection/FAQ.styles";

const FaqComponent = ({ question, answer }: { question: string; answer: string }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<FaqContainer onClick={() => setOpen(prev => !prev)}>
				<IconContainer className={open ? "active" : ""}>
					<svg
						width="22px"
						height="22px"
						strokeWidth="1.8"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						color="#000000"
					>
						<path
							d="M9 6L15 12L9 18"
							stroke="#000000"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</IconContainer>

				<QuestionContainer>
					<Question>{question}</Question>

					<Answer className={open ? "" : "displayNone"}>{answer}</Answer>
				</QuestionContainer>
			</FaqContainer>
		</>
	);
};

export default FaqComponent;
