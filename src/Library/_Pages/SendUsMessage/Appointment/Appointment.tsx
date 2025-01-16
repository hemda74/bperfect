"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { ContactDataAR, ContactDataEN } from "../../../../../messages/data/ContactData";
import { SpanStyles } from "../../HomeSection/HeroSection/HomeHeroSection.styles";
import styles from "./../../../Grids/Spaces.module.css";
import { ContactShell } from "./Appointment.styles";
import { Locale } from "@/Library/Globals";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import { Display1 } from "@/Library/Typography/Typography";
import Button from "@/Library/UI/Button/Button";
import uuid from "@/Library/UUID";
import InputComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/InputComponent";
import SelectComponent from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SelectComponent";
import SendUsCard from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsCard";
import {
	AppointmentShell,
	BrownContainer,
	FormContainer,
	PurpleContainer,
	SendUsParagraph,
} from "@/Library/_Pages/SendUsMessage/SendUsMessageForm/SendUsMessage.styles";

interface AppointmentProps {
	locale: Locale;

	t: {
		FirstName: string;
		LastName: string;
		Email: string;
		Phone: string;
		Subject: string;
		Option_app_1: string;
		Option_app_2: string;
		Option_app_3: string;
		Option_app_4: string;
		Option_app_5: string;
		Option_app_6: string;
		Title: string;
		SubTitle: string;
		bottom: string;
	};
}

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(11, "Phone number must be at least 11 digits"),
});

const Appointment: React.FC<AppointmentProps> = ({ locale, t }) => {
	const data = locale.locale === "en" ? ContactDataEN : ContactDataAR;

	type FormData = z.infer<typeof schema>;

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
				"https://www.bperfect.clinic/api/appointment-send",
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
			// 	"https://www.bperfect.clinic/api/appointment-save",
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
		<section className={"positionRelative"}>
			<AppointmentShell />
			<Section
				as={"div"}
				className={`positionRelative ${styles.paddingTop72} ${styles.paddingBottom200}`}
			>
				<Row justify="center">
					<ContactShell>
						<Display1>
							<SpanStyles>{t.Title}</SpanStyles>
						</Display1>
						<SendUsParagraph>{t.SubTitle}</SendUsParagraph>
					</ContactShell>
					<Col lg={8}>
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
									<Col className={styles.marginBottom32}>
										<SelectComponent Label={t.Subject} onChange={e => setSubject(e.target.value)}>
											<option disabled selected>
												{t.Option_app_1}
											</option>
											<option value={"Body Reshaping"}>{t.Option_app_2}</option>
											<option value={"Fillers and Botox"}>{t.Option_app_3}</option>
											<option value={"Hair Treatment"}>{t.Option_app_4}</option>
											<option value={"Laser Hair Removal"}>{t.Option_app_5}</option>
											<option value={"Skin Treatment"}>{t.Option_app_6}</option>
										</SelectComponent>
									</Col>
									<Col md={12}>
										<Button Body={t.bottom} variant={"primary1"} size={"Default"} />
									</Col>
								</Row>
							</form>
						</FormContainer>
						<Row as={"ul"} justify={"space-between"} ColumnGab={2}>
							{data.map(item => {
								return (
									<Col as={"li"} key={uuid()} xl={6} className={`${styles.marginBottom16}`}>
										<SendUsCard Body={item.body} Img={item.img} Title={item.title} />
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</Section>
		</section>
	);
};

export default Appointment;
