"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import Button from "@/Library/UI/Button/Button";
import {
	NextButton,
	TeamArticlesSection,
} from "@/Library/_Pages/Team/TeamArticles/TeamArticles.styles";
import TeamArticlesCard from "@/Library/_Pages/Team/TeamArticles/TeamArticlesCard";

interface Blog {
	id: string;
	title: string;
	title_ar: string;
	imageUrl: string;
}

const TeamArticles = ({ locale }: Locale) => {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get("/api/blogs");
				setBlogs(response.data);
			} catch (error) {
				// eslint-disable-next-line
				console.log(error);
			}
		};

		fetchBlogs();
	}, []);

	return (
		<TeamArticlesSection>
			<Section>
				<Row as={"ul"} justify={"space-around"}>
					{blogs.map(blog => (
						<Col md={6} as={"a"} key={blog.id} href={`/blogs/${blog.id}`}>
							<TeamArticlesCard
								id={blog.id}
								CardLink={`Read more`}
								Heading={locale === "en" ? blog.title : blog.title_ar}
								Img={blog.imageUrl}
								locale={locale}
							/>
						</Col>
					))}
				</Row>

				<NextButton>
					<Link href={"/blogs"}>
						<Button Body={"See more articles"} size={"Small"} />
					</Link>
				</NextButton>
			</Section>
		</TeamArticlesSection>
	);
};

export default TeamArticles;
