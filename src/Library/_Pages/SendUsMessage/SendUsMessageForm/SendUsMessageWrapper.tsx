import React from "react";
import { ContactUsFormAr, ContactUsFormEN } from "../../../../../messages/data/ContactData";
import SendUsMessage from "./SendUsMessage";
import { Locale } from "@/Library/Globals";

interface SendUsMessageWrapperProps {
	locale: Locale;
}

const SendUsMessageWrapper: React.FC<SendUsMessageWrapperProps> = ({ locale }) => {
	const t = locale.locale === "en" ? ContactUsFormEN : ContactUsFormAr;

	return <SendUsMessage locale={locale} t={t} />;
};

export default SendUsMessageWrapper;
