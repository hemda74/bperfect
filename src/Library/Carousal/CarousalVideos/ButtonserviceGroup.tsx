"use client";
import React from "react";

import {
	ButtonServiceOne,
	ButtonServiceTwo,
} from "@/Library/Carousal/CarousalServices/CarousalServices.styles";
import Leftarrow from "@/Library/UI/IconGraphy/LeftArrow/Leftarrow";
import RightArrow from "@/Library/UI/IconGraphy/RightArrow/RightArrow";

const ButtonSerciceGroup = (props: { next: () => void; previous: () => void }) => {
	// @ts-ignore
	const { next, previous, ...rest } = props;
	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className="carousel-button-group position-relative">
			<ButtonServiceOne className={currentSlide === 0 ? "disable" : ""} onClick={() => next()}>
				<RightArrow />
			</ButtonServiceOne>
			<ButtonServiceTwo onClick={() => previous()}>
				<Leftarrow />
			</ButtonServiceTwo>
		</div>
	);
};

export default ButtonSerciceGroup;
