import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prismadb from "@/lib/prismadb";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { firstName, lastName, email, phone, subject } = body;

		// Validate input
		if (!firstName || !lastName || !email || !phone || !subject) {
			return NextResponse.json({ message: "All fields are required" }, { status: 400 });
		}

		// Save the appointment data to the database
		const appointment = await prismadb.appointment.create({
			data: {
				firstName,
				lastName,
				email,
				phone,
				subject,
			},
		});

		// Respond with the created appointment
		return NextResponse.json(
			{ message: "Appointment saved successfully", appointment },
			{ status: 201 },
		);
	} catch (error) {
		console.error("Error saving appointment:", error);
		return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
	}
}
