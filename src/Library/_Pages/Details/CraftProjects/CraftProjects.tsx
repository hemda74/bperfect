import Image from "next/image";
import React from "react";
import { Blog } from "../../../../../BlogType";
import { SpanStyles } from "../../HomeSection/HeroSection/HomeHeroSection.styles";
import styles from "./../../../Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import { Display1, Heading4, MutedText } from "@/Library/Typography/Typography";
import uuid from "@/Library/UUID";

type BlogInterface = {
	blog: Blog | null; // Handle null case
};

const CraftProjects: React.FC<BlogInterface> = ({ blog }) => {
	// Check if blog exists before rendering
	if (!blog) {
		return <p>Loading...</p>; // You can replace this with a loading spinner or message
	}

	return (
		<>
			<Section className={`${styles.marginBottom200}`}>
				<Row>
					<Col lg={10}>
						<div>
							<Display1>
								<SpanStyles>{blog.title}</SpanStyles>
							</Display1>
							{blog.imageUrl && (
								<Image
									src={blog.imageUrl}
									alt={blog.title}
									width={660}
									height={248}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										marginBlock: "1rem",
										borderRadius: "20px",
									}}
								/>
							)}
							<MutedText className={`${styles.marginTop16}`}>{blog.desc}</MutedText>

							{blog.BlogDetailes && blog.BlogDetailes.length > 0 && blog.BlogDetailes.map(detail => (
								<div key={detail.title}>
									<Heading4>{detail.title}</Heading4>
									{detail.BlogDetailesPoint && detail.BlogDetailesPoint.length > 0 && (
										<ul>
											{detail.BlogDetailesPoint.map(point => (
												<li key={uuid()}>
													<MutedText>{point.text}</MutedText>
												</li>
											))}
										</ul>
									)}
								</div>
							))}

						</div>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default CraftProjects;
