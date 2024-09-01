import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { firstName, lastName, email, phone, subject } = await req.json();

		if (!firstName || !lastName || !email) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		const smtpHost = "smtp.gmail.com";
		const smtpPort = 587;
		const smtpUser = "bperfectclinic3@gmail.com";
		const smtpPass = "fzmzqsrjesdpywlk";

		let transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: false,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		const mailOptionsToAdmin = {
			from: `"Bperfect" <${smtpUser}>`,
			to: "Bperfecthr@gmail.com",
			subject: `New contact message from ${firstName} ${lastName}`,
			html: `
         <div style="text-align: center; margin-right: 15rem;margin-left: 15rem;">
                      <img src="https://www.bperfect.clinic/_next/image?url=%2FLogo.png&w=256&q=75" alt="logo" />
            <p>Hello BPerfect ADMIN</p>
            <p>New contact message received:</p>
            <p>Name: ${firstName} ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Subject: ${subject}</p>
          </div>
            `,
		};

		const mailOptionsToUser = {
			from: `"Bperfect" <${smtpUser}>`,
			to: email,
			subject: "Thank you for contacting us",
			html: `
         <div style="text-align: center; margin-right: 15rem;margin-left: 15rem;">
            <img src="https://www.bperfect.clinic/_next/image?url=%2FLogo.png&w=256&q=75" alt="logo" />
                <h2>Dear ${firstName} ${lastName},</h2>
                <h4>Thank you for reaching out. We have received your message and our team will get back to you shortly.</h4>
                <h4>For more information, please contact <a href="mailto:bperfectclinic3@gmail.com">bperfectclinic3@gmail.com</a></h4>
                <h4>Best regards,<br/>BPerfect</h4>
          </div>
        `,
		};
		await transporter.sendMail(mailOptionsToUser);
		await transporter.sendMail(mailOptionsToAdmin);
		return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
	} catch (error: any) {
		console.error("Nodemailer Error:", error);
		return NextResponse.json(
			{ error: "Error sending emails", details: error.message },
			{ status: 500 },
		);
	}
}
