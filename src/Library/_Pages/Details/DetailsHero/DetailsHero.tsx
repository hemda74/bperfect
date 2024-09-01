import Image from "next/image";
import React from "react";
import styles from "../../../Grids/Spaces.module.css";
import { Flexbox, Section } from "@/Library/Grids/Grids";
import {
	DetailsButton,
	DetailsDate,
	DetailsHeader,
	DetailsHeroBody,
	DetailsHeroHeading,
	DetailsSection,
} from "@/Library/_Pages/Details/DetailsHero/DetailsHero.styles";

const DetailsHero = ({ Img, Heading, Body }: { Img: string; Heading: string; Body: string }) => {
	return (
		<>
			<DetailsSection>
				<Section as={"section"}>
					<DetailsHeader className={`${styles.marginBottom56}`}>
						<Flexbox justify={"center"} aligncenter={"center"} gap={16}>
							<DetailsButton>Articles</DetailsButton>
							<DetailsDate>Nov 7, 2023</DetailsDate>
						</Flexbox>
						<DetailsHeroHeading>{Heading}</DetailsHeroHeading>
						<DetailsHeroBody>{Body}</DetailsHeroBody>
					</DetailsHeader>

					<Image
						src={Img}
						alt={""}
						width={1230}
						height={692}
						style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "20px" }}
					/>
				</Section>
			</DetailsSection>
		</>
	);
};

export default DetailsHero;
