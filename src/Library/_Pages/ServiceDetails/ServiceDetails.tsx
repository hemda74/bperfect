import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Flexbox, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display1, Subtitle } from "@/Library/Typography/Typography";
import {
	ServiceDetailsBody,
	ServiceDetailsContainer,
	ServiceDetailsIcon,
} from "@/Library/_Pages/ServiceDetails/ServiceDetails.styles";

const ServiceDetails = ({
	Heading,
	Body,
	Icon,
	Img,
}: {
	Heading: string;
	Body?: string;
	Icon: string;
	Img: string;
}) => {
	const t = useTranslations("ServicesDetails.HeroSection");
	return (
		<Section className={`${styles.paddingTop72} ${styles.paddingBottom48}`}>
			<Flexbox
				aligncenter={"end"}
				justify={"space-between"}
				className={`${styles.marginBottom72} `}
			>
				<ServiceDetailsContainer>
					<ServiceDetailsIcon src={Icon} alt={""} width={113} height={113} />
					<div>
						<Subtitle>{t("Title")}</Subtitle>
						<Display1
							style={{ textAlign: "start" }}
							className={`${styles.marginTop12} ${styles.marginBottom16}`}
						>
							{Heading}
						</Display1>
						<ServiceDetailsBody>{Body}</ServiceDetailsBody>
					</div>
				</ServiceDetailsContainer>
			</Flexbox>

			<Image
				src={Img}
				alt={""}
				width={1230}
				height={692}
				style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "20px" }}
			/>
		</Section>
	);
};

export default ServiceDetails;
