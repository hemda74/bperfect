import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./../../../Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import { Display4, MutedText } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import {
	AboutThisServiceCaption,
	AboutThisServiceForm,
} from "@/Library/_Pages/AboutThisService/AboutThisService.styles";
import InputComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent";

const CraftProjects = () => {
	const data = [
		"Lorem ipsum dolor sit amet consectetur aliquam quam amet aliquam.",
		"Mauris aliquet iaculis dui vitae ullamco adipiscing sodales nisl.",
		"Posuere enim mi pharetra neque proin dic nunc odio in egestas.",
	];
	return (
		<>
			<Section className={`${styles.marginBottom200}`}>
				<Row>
					<Col lg={8}>
						<AboutThisServiceCaption>
							<div>
								<h2>Try arts and craft projects</h2>
								<MutedText className={`${styles.marginTop16}`}>
									{" "}
									Amet mauris lectus a facilisi elementum ornare id sed sed aliquet dolor elementum
									magnis quisque id ultrices viverra cursus nunc odio in egestas consectetur cras
									consequat sodales netus pretium feugiat nulla semper senectus bibendum. Ornare sit
									adipiscing ut atid viverra donec nunc, donec pulvinar enim ac habitasse fermentum
									amet nunc praesent atac elementum id sed nibh diam ultrices nibh enim volutpat
									varius et est sed vestibulum neque.
								</MutedText>
								<ul>
									{data.map(text => {
										return (
											<>
												<li key={uuid()}>{text}</li>
											</>
										);
									})}
								</ul>
								<h3>Cook or bake their favorite dish together</h3>
								<MutedText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</MutedText>
								<MutedText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</MutedText>

								<Image
									src={"/Fee_grandparents-and-grandson-elderlycare-x-webflow-template.jpeg"}
									alt={""}
									width={660}
									height={348}
									style={{ width: "100%", objectFit: "cover", borderRadius: "20px" }}
								/>
								<h3>Entertrain your grandchildren with family photos</h3>
								<MutedText>
									Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
									culpa qui officia deserunt mollit anim id est laborum.
								</MutedText>

								<ul>
									{data.map(text => {
										return (
											<>
												<li key={uuid()}>{text}</li>
											</>
										);
									})}
								</ul>
							</div>
						</AboutThisServiceCaption>
					</Col>
					<Col lg={4}>
						<AboutThisServiceForm>
							<Display4>Subscribe to our newsletter</Display4>
							<InputComponent Label={""} type={"email"} placeHolder={"Enter Your Email"} />

							<Link href={"/appointment"}>
								<Button Body={"Subscribe"} variant={"primary1"} size={"Default"} />
							</Link>
						</AboutThisServiceForm>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default CraftProjects;
