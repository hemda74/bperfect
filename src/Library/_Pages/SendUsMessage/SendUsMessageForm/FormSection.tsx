import { useTranslations } from "next-intl";
import React from "react";
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

const SendUsMessage = ({ locale }: Locale) => {
	const t = useTranslations("ContactUs.ContactUsHeroSection");
	const data = locale === "en" ? ContactDataEN : ContactDataAR;

	return (
		<SendUsContainer>
			<Section as={"div"}>
				<Row justify={"space-between"}>
					<Col lg={5} className={styles.marginBottom72}>
						<Display1>
							{t("Heading.Heading1")} <SpanStyles>{t("Heading.Heading2")}</SpanStyles>
						</Display1>
						<SendUsParagraph>{t("Body")}</SendUsParagraph>

						<div>
							{data.map(item => {
								return (
									<SendUsCard Body={item.body} Img={item.img} Title={item.title} key={uuid()} />
								);
							})}
						</div>
					</Col>
					<Col lg={6}>
						<FormContainer>
							<PurpleContainer />
							<BrownContainer />
							<Row ColumnGab={2}>
								<Col md={6} className={styles.marginBottom32}>
									<InputComponent
										Label={t("Form.Inputs.Input1.Label")}
										type={"text"}
										placeHolder={t("Form.Inputs.Input1.PlaceHolder")}
									/>
								</Col>
								<Col md={6} className={styles.marginBottom32}>
									{" "}
									<InputComponent
										Label={t("Form.Inputs.Input2.Label")}
										type={"text"}
										placeHolder={t("Form.Inputs.Input2.PlaceHolder")}
									/>{" "}
								</Col>{" "}
								<Col md={12} className={styles.marginBottom32}>
									<InputComponent
										Label={t("Form.Inputs.Input3.Label")}
										type={"email"}
										placeHolder={t("Form.Inputs.Input3.PlaceHolder")}
									/>
								</Col>
								<Col md={12} className={styles.marginBottom32}>
									{" "}
									<InputComponent
										Label={t("Form.Inputs.Input4.Label")}
										type={"tel"}
										placeHolder={t("Form.Inputs.Input4.PlaceHolder")}
									/>{" "}
								</Col>
								<Col md={12} className={styles.marginBottom32}>
									<SelectComponent Label={t("Form.Inputs.Input5.Label")}>
										<option disabled selected>
											{t("Form.Inputs.Input5.Options.Option1")}
										</option>
										<option value={t("Form.Inputs.Input5.Options.Option2")}>
											{t("Form.Inputs.Input5.Options.Option2")}
										</option>
										<option value={t("Form.Inputs.Input5.Options.Option3")}>
											{t("Form.Inputs.Input5.Options.Option3")}
										</option>
									</SelectComponent>
								</Col>
								<Col md={12} className={styles.marginBottom32}>
									<TextAreaComponent
										Label={t("Form.Inputs.Input6.Label")}
										placeHolder={t("Form.Inputs.Input6.PlaceHolder")}
									/>
								</Col>
								<Col md={12}>
									<Button Body={t("Button")} variant={"primary1"} size={"Default"} />
								</Col>
							</Row>
						</FormContainer>
					</Col>
				</Row>
			</Section>
		</SendUsContainer>
	);
};

export default SendUsMessage;
