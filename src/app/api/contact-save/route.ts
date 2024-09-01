import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prismadb from "@/lib/prismadb";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { firstName, lastName, email, phone, subject, message } = body;

		// Validate input
		if (!firstName || !lastName || !email || !phone || !subject || !message) {
			return NextResponse.json({ message: "All fields are required" }, { status: 400 });
		}

		// Save the contact data to the database
		const contact = await prismadb.contact.create({
			data: {
				firstName,
				lastName,
				email,
				phone,
				subject,
				message,
			},
		});

		// Respond with the created contact
		return NextResponse.json({ message: "contact saved successfully", contact }, { status: 201 });
	} catch (error) {
		console.error("Error saving contact:", error);
		return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
	}
}
