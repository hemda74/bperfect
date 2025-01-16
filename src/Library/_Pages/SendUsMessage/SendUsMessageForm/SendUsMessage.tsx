"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { ContactDataAR, ContactDataEN } from "../../../../../messages/data/ContactData";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { Display1 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import { SpanStyles } from "@/Library/_Pages/HomeSection/HeroSection/HomeHeroSection.styles";
import InputComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent";
import SelectComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SelectComponent";
import SendUsCard from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsCard";
import {
	BrownContainer,
	FormContainer,
	PurpleContainer,
	SendUsContainer,
	SendUsParagraph,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsMessage.styles";
import TextAreaComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/TextAreaComponent";

interface SendUsMessageProps {
	locale: Locale;

	t: {
		FirstName: string;
		LastName: string;
		Email: string;
		Phone: string;
		Message: string;
		Subject: string;
		Option_cont_1: string;
		Option_cont_2: string;
		Option_cont_3: string;
		Title: string;
		SubTitle: string;
	};
}

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(11, "Phone number must be at least 11 digits"),
	message: z.string().min(1, "Message is required"),
});

const SendUsMessage: React.FC<SendUsMessageProps> = ({ locale, t }) => {
	const body = locale.locale === "en" ? ContactDataEN : ContactDataAR;
	type FormData = z.infer<typeof schema>;
	// eslint-disable-next-line
	const [subject, setSubject] = useState<string | undefined>(undefined);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = async formData => {
		const toastId = toast.loading("Sending message...");

		const finalData = { ...formData, subject };

		try {
			// Send email
			// eslint-disable-next-line
			const emailResponse = await axios.post(
				"https://www.bperfect.clinic/api/contact-send",
				finalData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			// eslint-disable-next-line
			console.log(emailResponse, "emailResponse");

			// eslint-disable-next-line
			// const saveResponse = await axios.post(
			// 	"https://www.bperfect.clinic/api/contact-save",
			// 	finalData,
			// 	{
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 	},
			// );
			// eslint-disable-next-line
			console.log("Email sent:", emailResponse.data.message);
			// eslint-disable-next-line
			// console.log("Data saved:", saveResponse.data.message);

			toast.success("Message sent successfully!");
		} catch (error) {
			// eslint-disable-next-line
			console.error("Appointment page Error:", error);
			toast.error("Error sending message!");
		} finally {
			toast.dismiss(toastId);
		}
	};

	const getErrorMessage = (error: FieldError | undefined): string | undefined => {
		return error?.message;
	};
	return (
		<SendUsContainer>
			<Section as={"div"}>
				<Row justify={"space-between"}>
					<Col lg={5} className={styles.marginBottom72}>
						<Display1>
							<SpanStyles>{t.Title}</SpanStyles>
						</Display1>
						<SendUsParagraph>{t.SubTitle}</SendUsParagraph>
						<div>
							{body.map(item => (
								<SendUsCard Body={item.body} Img={item.img} Title={item.title} key={uuid()} />
							))}
						</div>
					</Col>
					<Col lg={6}>
						<FormContainer>
							<PurpleContainer />
							<BrownContainer />
							<form onSubmit={handleSubmit(onSubmit)}>
								<Row ColumnGab={2}>
									<Col md={6} className={styles.marginBottom32}>
										<InputComponent
											Label={t.FirstName}
											type={"text"}
											placeHolder={t.FirstName}
											error={getErrorMessage(errors.firstName)}
											{...register("firstName")}
										/>
									</Col>
									<Col md={6} className={styles.marginBottom32}>
										<InputComponent
											Label={t.LastName}
											type={"text"}
											placeHolder={t.LastName}
											error={getErrorMessage(errors.lastName)}
											{...register("lastName")}
										/>
									</Col>
									<Col md={12} className={styles.marginBottom32}>
										<InputComponent
											Label={t.Email}
											type={"email"}
											placeHolder={t.Email}
											error={getErrorMessage(errors.email)}
											{...register("email")}
										/>
									</Col>
									<Col md={12} className={styles.marginBottom32}>
										<InputComponent
											Label={t.Phone}
											type={"phone"}
											placeHolder={t.Phone}
											error={getErrorMessage(errors.phone)}
											{...register("phone")}
										/>
									</Col>
									<Col md={12} className={styles.marginBottom32}>
										<SelectComponent Label={t.Subject} onChange={e => setSubject(e.target.value)}>
											<option value={""}>{t.Option_cont_1}</option>
											<option value={"Inquiry"}>{t.Option_cont_2}</option>
											<option value={"Complaint"}>{t.Option_cont_3}</option>
										</SelectComponent>
									</Col>
									<Col md={12} className={styles.marginBottom32}>
										<TextAreaComponent
											Label={t.Message}
											placeHolder={t.Message}
											error={getErrorMessage(errors.message)}
											{...register("message")}
										/>
									</Col>
									<Col md={12}>
										<Button Body={"Submit"} variant={"primary1"} size={"Default"} />
									</Col>
								</Row>
							</form>
						</FormContainer>
					</Col>
				</Row>
			</Section>
		</SendUsContainer>
	);
};

export default SendUsMessage;
