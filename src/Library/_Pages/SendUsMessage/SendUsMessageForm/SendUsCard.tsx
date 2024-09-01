import Image from "next/image";
import Link from "next/link";
import React from "react";
import uuid from "@/Library/UUID";
import {
	SendUsCardBody,
	SendUsCardContainer,
	SendUsCardTitle,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsCard.styles";

const SendUsCard = ({
	Img,
	Title,
	Body,
}: {
	Img: string;
	Title: string;
	Body: { name: string; href: string }[];
}) => {
	return (
		<SendUsCardContainer>
			<Image className={"image-card"} src={Img} alt={Title} height={50} width={50} />
			<div>
				<SendUsCardTitle>{Title}</SendUsCardTitle>
				<SendUsCardBody>
					{Body.map(item => (
						<Link href={item.href} key={uuid()}>
							{item.name}
						</Link>
					))}
				</SendUsCardBody>
			</div>
		</SendUsCardContainer>
	);
};

export default SendUsCard;
