import { Metadata } from "next";
import React from "react";
import { Blog } from "../../../../../BlogType";
import CraftProjects from "@/Library/_Pages/Details/CraftProjects/CraftProjects";
import path from "path";
import { promises as fs } from "fs";

export const metadata: Metadata = {
	title: "Blogs - Bperfect",
	description:
		"Stay updated with the latest insights, trends, and tips in beauty and dermatology from Bperfect.",
};

interface PageProps {
	params: {
		id: string;
	};
}

const Page = async ({ params }: PageProps) => {
	const { id } = params;

	try {
		// Path to the JSON file
		const filePath = path.join(process.cwd(), "data", "blogs.json");

		// Read and parse JSON data
		const fileData = await fs.readFile(filePath, "utf-8");
		const blogs: Blog[] = JSON.parse(fileData);

		// Find the blog with the matching ID
		const blog = blogs.find(blog => blog.id === id);

		if (!blog) {
			// Return a 404-like error page if the blog is not found
			return <p style={{ textAlign: "center", marginTop: "2rem" }}>Blog not found. Please check the URL and try again.</p>;
		}

		// Render the blog details
		return <CraftProjects blog={blog} />;
	} catch (error) {
		// Handle unexpected errors
		console.error("Error loading blog:", error);
		return <p style={{ textAlign: "center", marginTop: "2rem" }}>An error occurred while loading the blog.</p>;
	}
};

export default Page;
