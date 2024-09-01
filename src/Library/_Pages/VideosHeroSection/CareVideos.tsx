import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Flexbox } from "@/Library/Grids/Grids";
import { Display3 } from "@/Library/Typography/Typography";
import {
	CareServicesBody,
	CareServicesCaption,
	CareServicesImageContainer,
	CareServicesInner,
} from "@/Library/_Pages/Services/ServicesHeroSection/CareServices.styles";
import Link from "@/Library/_Pages/Services/ServicesHeroSection/Link";

const CareServices = ({
	Img,
	Icon,
	Heading,
	Body,
	LinkBody,
	locale,
}: {
	Img: string | StaticImport;
	Icon: string;
	Heading: string;
	Body: string;
	LinkBody: string;
} & Locale) => {
	return (
		<CareServicesInner>
			<CareServicesImageContainer>
				<Image
					src={Img}
					alt={""}
					width={530}
					height={386}
					style={{ width: "95%", objectFit: "cover", background: "#fff2e6" }}
				/>
			</CareServicesImageContainer>
		</CareServicesInner>
	);
};

export default CareServices;
