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

	// Determine the path to the JSON file
	const filePath = path.join(process.cwd(), "data", "blogs.json");

	// Read and parse the JSON data
	const fileData = await fs.readFile(filePath, "utf-8");
	const blogs: Blog[] = JSON.parse(fileData);

	// Find the blog with the matching ID
	const blog = blogs.find((blog) => blog.id === id);

	if (!blog) {
		// Handle error (e.g., blog not found)
		return <p>Error loading blog: Blog not found.</p>;
	}

	return <CraftProjects blog={blog} />;
};

export default Page;
