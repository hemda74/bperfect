import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { firstName, lastName, email, phone, subject } = body;

		if (!firstName || !lastName || !email || !phone || !subject) {
			return NextResponse.json({ message: "All fields are required" }, { status: 400 });
		}

		const appointment = await prismadb.appointment.create({
			data: {
				firstName,
				lastName,
				email,
				phone,
				subject,
			},
		});

		return NextResponse.json(
			{ message: "Appointment saved successfully", appointment },
			{ status: 201 },
		);
	} catch (error) {
		// eslint-disable-next-line
		console.log(error, "appointment api error");
		return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
	}
}
