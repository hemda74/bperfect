"use client";
import React, { ReactNode } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ButtonGroup from "@/Library/Carousal/ButtonGroub";
import { Locale } from "@/Library/Globals";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const CarousalShell = ({ children, locale }: { children: ReactNode } & Locale) => {
	return (
		<>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				renderDotsOutside={true}
				infinite={true}
				pauseOnHover={true}
				rewind
				rewindWithAnimation
				rtl={locale !== "en"}
				arrows={false}
				customButtonGroup={<ButtonGroup />}
			>
				{children}
			</Carousel>
		</>
	);
};

export default CarousalShell;
