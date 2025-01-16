import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
	try {
		// Point to the data folder in the root
		const filePath = path.join(process.cwd(), "data", "blogs.json");

		// Read the content of the JSON file
		const data = await fs.readFile(filePath, "utf-8");

		// Parse JSON and return response
		return NextResponse.json(JSON.parse(data));
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
	}
}
