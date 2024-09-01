import React, { ReactNode } from "react";
import ButtonServiceGroup from "@/Library/Carousal/CarousalServices/ButtonserviceGroup";
import { CarousalServicesShell } from "@/Library/Carousal/CarousalServices/CarousalServices.styles";
import "react-multi-carousel/lib/styles.css";

// const responsive = {
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// };

const CarousalServices = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<CarousalServicesShell
				arrows={false}
				// centerMode
				draggable
				infinite={true}
				focusOnSelect={false}
				minimumTouchDrag={80}
				partialVisible
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				// @ts-ignore
				customButtonGroup={<ButtonServiceGroup />}
				responsive={{
					desktop: {
						breakpoint: {
							max: 2000,
							min: 991,
						},
						items: 2,
						partialVisibilityGutter: 24,
					},
					mobile: {
						breakpoint: {
							max: 991,
							min: 0,
						},
						items: 1,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				slidesToSlide={1}
				swipeable
			>
				{children}
			</CarousalServicesShell>
		</>
	);
};

export default CarousalServices;
