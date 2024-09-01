import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Row, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import { FooterLink, LinkFooterStyles } from "@/Library/Shell/Footer/Footer.styles";
import { Display2, Display3 } from "@/Library/Typography/Typography";
import Location24 from "@/Library/UI/IconGraphy/Location24/Location24";
import PhoneIcon24 from "@/Library/UI/IconGraphy/PhoneIcon24/PhoneIcon24";
import Email24 from "@/Library/UI/IconGraphy/mail24/email24";
import {
	ComeAndVisitUsBody,
	ComeAndVisitUsHeading,
	ComeAndVisitUsImage,
	ComeAndVisitUsParagraph,
	Divider,
	LinkContainer,
	LinksStyles,
} from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs.styles";

const ComeAndVisitUs = () => {
	const t = useTranslations("ContactUs.ComeAndVisitUs");
	return (
		<>
			<Section className={`${styles.paddingTop200} ${styles.paddingBottom114}`}>
				<ComeAndVisitUsHeading>
					<Display2>
						{t("Heading.Heading1")} <span>{t("Heading.Heading2")}</span>
						<ComeAndVisitUsBody>{t("Body")}</ComeAndVisitUsBody>
					</Display2>
				</ComeAndVisitUsHeading>

				<Row ColumnGab={3.75} className={styles.paddingTop110} aligncenter={"center"}>
					<Col md={12} lg={6}>
						<div>
							<ComeAndVisitUsImage width={768} height={688} src={t("Caption1.Image")} alt={""} />
						</div>
					</Col>
					<Col md={12} lg={6} className={styles.paddingTop48}>
						<Display3>{t("Caption1.Heading")}</Display3>
						{/* <ComeAndVisitUsParagraph>{t("Caption1.Body")}</ComeAndVisitUsParagraph> */}

						<Row className={styles.marginTop40}>
							<Col md={12} lg={6}>
								<FooterLink>
									<LinkContainer>
										<Location24 />
										<LinksStyles
											target={"_blank"}
											href={"https://maps.app.goo.gl/wHLwUjhyriYiGQhV9"}
										>
											<span className={"Footer-link-Bold"}>{t("Caption1.Links.Link1.Link")}</span>
										</LinksStyles>
									</LinkContainer>
								</FooterLink>
							</Col>{" "}
							<Col md={12} lg={6}>
								<FooterLink>
									<LinkContainer>
										<Email24 />
										<LinksStyles href={`mailto:${t("Caption1.Links.Link2.Link")}`}>
											<span className={"Footer-link-Bold"}>{t("Caption1.Links.Link2.Link")}</span>
										</LinksStyles>
									</LinkContainer>
								</FooterLink>
								<FooterLink>
									<LinkContainer>
										<PhoneIcon24 />
										<LinkFooterStyles>
											<Link
												className={"phoneNumber Footer-link-Bold"}
												href={`tel:+${t("Caption1.Links.Link3.Numbers.Number1")}`}
											>
												{t("Caption1.Links.Link3.Numbers.Number1")}
											</Link>
											<Link
												className={"phoneNumber Footer-link-Bold"}
												href={`tel:+${t("Caption1.Links.Link3.Numbers.Number2")}`}
											>
												{t("Caption1.Links.Link3.Numbers.Number2")}
											</Link>
											<Link
												className={"phoneNumber Footer-link-Bold"}
												href={`tel:+${t("Caption1.Links.Link3.Numbers.Number3")}`}
											>
												{t("Caption1.Links.Link3.Numbers.Number3")}
											</Link>
										</LinkFooterStyles>
									</LinkContainer>
								</FooterLink>
							</Col>
						</Row>
						<Divider />
						<Display3>{t("Caption2.Heading")}</Display3>
						{/* <ComeAndVisitUsParagraph>{t("Caption2.Body")}</ComeAndVisitUsParagraph> */}
						<Row className={styles.marginTop40}>
							<Col md={12} lg={6}>
								<FooterLink>
									<LinkContainer>
										<Location24 />
										<LinksStyles
											target={"_blank"}
											href={"https://maps.app.goo.gl/j2szZzhjJxL6Gk2V6"}
										>
											<span className={"Footer-link-Bold"}>{t("Caption2.Links.Link1.Link")}</span>
										</LinksStyles>
									</LinkContainer>
								</FooterLink>
							</Col>{" "}
							<Col md={12} lg={6}>
								<FooterLink>
									<LinkContainer>
										<Email24 />
										<LinksStyles href={`mailto:${t("Caption2.Links.Link2.Link")}`}>
											<span className={"Footer-link-Bold"}>{t("Caption2.Links.Link2.Link")}</span>
										</LinksStyles>
									</LinkContainer>
								</FooterLink>
								<FooterLink>
									<LinkContainer>
										<PhoneIcon24 />
										<LinkFooterStyles>
											<Link
												className={"phoneNumber Footer-link-Bold"}
												href={`tel:+${t("Caption2.Links.Link3.Numbers.Number1")}`}
											>
												{t("Caption2.Links.Link3.Numbers.Number1")}
											</Link>
											<Link
												className={"phoneNumber Footer-link-Bold"}
												href={`tel:+${t("Caption2.Links.Link3.Numbers.Number2")}`}
											>
												{t("Caption2.Links.Link3.Numbers.Number2")}
											</Link>
										</LinkFooterStyles>
									</LinkContainer>
								</FooterLink>
							</Col>
						</Row>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default ComeAndVisitUs;
