import { Metadata } from "next";
import React from "react";
import { Locale } from "@/Library/Globals";
import ComeAndVisitUs from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs";
import Faq from "@/Library/_Pages/SendUsMessage/FAQSection/FAQ";
import SendUsMessageWrapper from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsMessageWrapper";
export const metadata: Metadata = {
	title: "Contact Us - Bperfect",
	description:
		"Get in touch with Bperfect for inquiries, appointments, or more information about our services.",
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
			<SendUsMessageWrapper locale={locale} />
			<ComeAndVisitUs />
			<Faq />
		</>
	);
};

export default Page;
