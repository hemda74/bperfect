import React from "react";
import { Locale } from "@/Library/Globals";
import AppointmentWrapper from "@/Library/_Pages/SendUsMessage/Appointment/AppointmentWrapper";
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
