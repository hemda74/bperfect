import { Metadata } from "next";
import React from "react";
import { Blog } from "../../../../../BlogType";
import CraftProjects from "@/Library/_Pages/Details/CraftProjects/CraftProjects";
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

	const res = await fetch(
		`https://blog-admin-brown.vercel.app/api/32ed4982-2c04-4e37-8b73-75384a47ed5f/Blog/${id}`,
	);

	if (!res.ok) {
		// Handle error (e.g., 404)
		return <p>Error loading blog.</p>;
	}

	const blog: Blog = await res.json();

	return <CraftProjects blog={blog} />;
};

export default Page;
