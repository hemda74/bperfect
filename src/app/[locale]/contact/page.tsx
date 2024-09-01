import React from "react";
import { Locale } from "@/Library/Globals";
import ComeAndVisitUs from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs";
import Faq from "@/Library/_Pages/SendUsMessage/FAQSection/FAQ";
import SendUsMessageWrapper from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsMessageWrapper";

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
