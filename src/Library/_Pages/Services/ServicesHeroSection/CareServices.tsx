import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Locale } from "@/Library/Globals";
import { Flexbox } from "@/Library/Grids/Grids";
import { Display3 } from "@/Library/Typography/Typography";
import {
	CareServicesCaption,
	CareServicesImageContainer,
	CareServicesInner,
} from "@/Library/_Pages/Services/ServicesHeroSection/CareServices.styles";
import Link from "@/Library/_Pages/Services/ServicesHeroSection/Link";

const CareServices = ({
	Img,
	Icon,
	Heading,
	LinkBody,
	locale,
}: {
	Img: string | StaticImport;
	Icon: string;
	Heading: string;
	LinkBody: string;
} & Locale) => {
	return (
		<CareServicesInner>
			<CareServicesImageContainer>
				<Image
					src={Img}
					alt={""}
					width={500}
					height={386}
					style={{ width: "100%", objectFit: "cover", background: "#fff2e6" }}
				/>
			</CareServicesImageContainer>

			<CareServicesCaption locale={locale}>
				<Image src={Icon} alt={""} width={70} height={70} />
				<Display3>{Heading}</Display3>
				{/* <CareServicesBody>{Body}</CareServicesBody> */}
				<Flexbox aligncenter={"center"}>
					<Link href={LinkBody} locale={locale} Body={LinkBody} />
				</Flexbox>
			</CareServicesCaption>
		</CareServicesInner>
	);
};

export default CareServices;
