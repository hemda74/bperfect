import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import React from "react";
import {
	DoctorCardContainer,
	DoctorInfoContainer,
	DoctorName,
	DoctorTitle,
	ImageContainer,
	OurTeamImage,
} from "@/Library/_Pages/About/OurTeam/OurTeamCard.styles";

const OurTeamCard = ({
	image,
	name,
	title,
	href,
}: {
	image: string | StaticImport;
	name: string;
	title: string;
	href: string;
}) => {
	return (
		<DoctorCardContainer>
			<Link href={href}>
				<ImageContainer>
					<OurTeamImage width={391} height={403} src={image} alt={""} />
				</ImageContainer>

				<DoctorInfoContainer>
					<DoctorName as={"h4"}>{name}</DoctorName>
					<DoctorTitle>{title}</DoctorTitle>
				</DoctorInfoContainer>
			</Link>
		</DoctorCardContainer>
	);
};

export default OurTeamCard;
