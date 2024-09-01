"use client";
import React from "react";
import { ButtonOne, ButtonTwo } from "@/Library/Carousal/ButtonCarouse.styles";
import Leftarrow from "@/Library/UI/IconGraphy/LeftArrow/Leftarrow";
import RightArrow from "@/Library/UI/IconGraphy/RightArrow/RightArrow";

// eslint-disable-next-line
// @ts-ignore
const ButtonGroup = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className="carousel-button-group">
			<ButtonOne className={currentSlide === 0 ? "disable" : ""} onClick={() => previous()}>
				<RightArrow />
			</ButtonOne>
			<ButtonTwo onClick={() => next()}>
				<Leftarrow />
			</ButtonTwo>
		</div>
	);
};

export default ButtonGroup;
