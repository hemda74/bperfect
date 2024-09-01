import Link from "next/link";
import React from "react";
import { VideoContainer } from "../OurFacilites/OurFacilities.styles";
import CarousalServices from "@/Library/Carousal/CarousalServices/CarousalServices";
import { Section } from "@/Library/Grids/Grids";
import ContactInfo from "@/Library/_Pages/HomeSection/ContactInfo/ContactInfo";
import { OurServicesShell } from "@/Library/_Pages/HomeSection/OurServices/OurServices.styles";

export const videoLinks = [
	{
		link: "https://www.youtube.com/embed/mvpv6pWXAM4",
		title: "Video Card1",
	},
	{
		link: "https://www.youtube.com/embed/1LWyYQl78gI",
		title: "Video Card2",
	},
	{
		link: "https://www.youtube.com/embed/AaRbXvLNaDs",
		title: "Video Card3",
	},
	{
		link: "https://www.youtube.com/embed/Eo2GNdKG3iE",
		title: "Video Card4",
	},
	{
		link: "https://www.youtube.com/embed/VDKjCncL89o",
		title: "Video Card5",
	},
	{
		link: "https://www.youtube.com/embed/LREvIYaEo-Y",
		title: "Video Card6",
	},
	{
		link: "https://www.youtube.com/embed/Mm7ViFKsGdo",
		title: "Video Card7",
	},
	{
		link: "https://www.youtube.com/embed/libgLEqb0JY",
		title: "Video Card8",
	},
	{
		link: "https://www.youtube.com/embed/LAIV1jyrtl8",
		title: "Video Card9",
	},
];

const OurVideos = () => {
	// const t = useTranslations("Home.OurVideos");

	return (
		<>
			<ContactInfo />
			<OurServicesShell contactInfo={false}>
				<Section as="div">
					<CarousalServices>
						{videoLinks.map((video, index) => (
							<Link key={index} href={video.link} passHref>
								<VideoContainer>
									<iframe
										width="900"
										height="506"
										src={video.link}
										title={video.title}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									></iframe>
								</VideoContainer>
							</Link>
						))}
					</CarousalServices>
				</Section>
			</OurServicesShell>
		</>
	);
};

export default OurVideos;
