import { Metadata } from "next";
import React from "react";
import { Locale } from "@/Library/Globals";
import AppointmentWrapper from "@/Library/_Pages/SendUsMessage/Appointment/AppointmentWrapper";
export const metadata: Metadata = {
	title: "Book an Appointment - Bperfect",
	description:
		"Schedule an appointment with Bperfect for high-quality beauty and dermatology services.",
};
interface PageParams {
	params: {
		locale: "en" | "ar";
	};
}
const Page: React.FC<PageParams> = ({ params }) => {
	const locale: Locale = { locale: params.locale };

	return (
		<>
			<AppointmentWrapper locale={locale} />
		</>
	);
};

export default Page;
