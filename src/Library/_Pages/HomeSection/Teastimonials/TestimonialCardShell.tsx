import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Flexbox } from "@/Library/Grids/Grids";
import {
	ReviewImage,
	TestimonialCaption,
	TestimonialCard,
	TestimonialName,
	TestimonialTitle,
} from "@/Library/_Pages/HomeSection/Teastimonials/Testimonial.styles";

const TestimonialCardShell = ({
	description,
	name,
	job,
	locale,
	img,
}: {
	description: string;
	name: string;
	job: string;
	img: StaticImport | string;
} & Locale) => {
	return (
		<TestimonialCard locale={locale}>
			<Image width={54} height={41} src={"/QutationMarkIcon.svg"} alt={""} />

			<TestimonialCaption>{description}</TestimonialCaption>

			<Flexbox gap={16}>
				<ReviewImage src={img} alt={""} width={64} height={64} />
				<div>
					<TestimonialName locale={locale}>{name}</TestimonialName>
					<TestimonialTitle locale={locale}>{job}</TestimonialTitle>
				</div>
			</Flexbox>
		</TestimonialCard>
	);
};

export default TestimonialCardShell;
