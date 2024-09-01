import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	FooterTranslationAR,
	FooterTranslationEN,
} from "../../../../messages/Shell/FooterTranslation";
import { Locale } from "@/Library/Globals";
import { Col, Flexbox, Row } from "@/Library/Grids/Grids";
import {
	CopyRightsSection,
	FooterCaption,
	FooterLink,
	FooterShell,
	FooterStyles,
	LinkFooterStyles,
} from "@/Library/Shell/Footer/Footer.styles";
import FaceBookIcon from "@/Library/UI/IconGraphy/SocialIcon/FaceBookIcon";
import Location24 from "@/Library/UI/IconGraphy/Location24/Location24";
import PhoneIcon24 from "@/Library/UI/IconGraphy/PhoneIcon24/PhoneIcon24";
import Email24 from "@/Library/UI/IconGraphy/mail24/email24";
import {
	LinkContainer,
	LinksStyles,
} from "@/Library/_Pages/About/ComeAndVisitUs/ComeAndVisitUs.styles";
import TiktokIcon from "@/Library/UI/IconGraphy/SocialIcon/TiktokIcon";
import InstagramIcon from "@/Library/UI/IconGraphy/SocialIcon/InstagramIcon";

const Footer = ({ locale }: Locale) => {
	const getYear = new Date().getFullYear();
	const t = locale === "en" ? FooterTranslationEN : FooterTranslationAR;
	return (
		<FooterShell>
			<FooterStyles>
				<Row ColumnGab={1.5} justify={"space-between"}>
					<Col sm={6} md={4} lg={3}>
						<FooterCaption>{t.menu.menu}</FooterCaption>

						<ul>
							<FooterLink>
								<Link href={"/"}>{t.menu.home}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/about"}>{t.menu.about}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/services"}>{t.menu.services}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/contact"}>{t.menu.contact}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/blog"}>{t.menu.blog}</Link>
							</FooterLink>
						</ul>
					</Col>
					<Col sm={6} md={4} lg={3}>
						<FooterCaption>{t.services.services}</FooterCaption>
						<ul>
							<FooterLink>
								<Link href={"/services/body-reshaping"}>{t.services.bodyReshaping}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/services/fillers-botox"}>{t.services.fillersBotox}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/services/hair-treatments"}>{t.services.hairTreatment}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/services/laser-hair-removal"}>{t.services.laserHairRemoval}</Link>
							</FooterLink>
							<FooterLink>
								<Link href={"/services/skin-treatments"}>{t.services.skinTreatments}</Link>
							</FooterLink>
						</ul>
					</Col>
					<Col sm={6} md={4} lg={3}>
						<FooterCaption>{t.ourSocialMedia.ourSocialMedia}</FooterCaption>

						<ul>
							<FooterLink>
								<Flexbox gap={8} aligncenter={"center"}>

									<FaceBookIcon />
									<Link target={"_blank"} rel="noreffer" href={"https://facebook.com/BPerfectClinic"}>
										{t.ourSocialMedia.facebook}
									</Link>
								</Flexbox>
							</FooterLink>
							<FooterLink>
								<Flexbox gap={8} aligncenter={"center"}>
									<InstagramIcon />
									<Link target={"_blank"} rel="noreffer" href={"https://www.instagram.com/bperfect.clinic/"}>
										{t.ourSocialMedia.instagram}
									</Link>
								</Flexbox>
							</FooterLink>
							<FooterLink>
								<Flexbox gap={8} aligncenter={"center"}>
									<TiktokIcon />
									<Link target={"_blank"} rel="noreffer" href={"https://www.tiktok.com/@bperfect.clinic"}>
										{t.ourSocialMedia.twitter}</Link>
								</Flexbox>
							</FooterLink>
						</ul>
					</Col>

					<Col sm={6} md={12} lg={3}>
						<FooterCaption>{t.contactUs.contactUs}</FooterCaption>

						<ul>
							<FooterLink>
								<LinkContainer>
									<Location24 />
									<LinksStyles target="_blank" rel="noreferr" href={"https://maps.app.goo.gl/UFJv3NxisJLSKdrq9"}>
										<p>{t.contactUs.location1.location}</p>
										<span className={"Footer-link-Bold"}>{t.contactUs.location1.locationBody}</span>
									</LinksStyles>
								</LinkContainer>
							</FooterLink>
							<FooterLink>
								<LinkContainer>
									<Location24 />

									<LinksStyles target="_blank" rel="noreferr" href={"https://maps.app.goo.gl/Lw5PCN1HuUX8v1yS8"}>
										<p>{t.contactUs.location2.location}</p>
										<span className={"Footer-link-Bold"}>{t.contactUs.location2.locationBody}</span>
									</LinksStyles>
								</LinkContainer>
							</FooterLink>
							<FooterLink>
								<LinkContainer>
									<Email24 />
									<LinksStyles href={`mailto:${t.contactUs.email.emailBody}`}>
										<p>{t.contactUs.email.email}</p>
										<span className={"Footer-link-Bold"}>{t.contactUs.email.emailBody}</span>
									</LinksStyles>
								</LinkContainer>
							</FooterLink>
							<FooterLink>
								<LinkContainer>
									<PhoneIcon24 />
									<LinkFooterStyles>
										<p>{t.contactUs.phone.phone}</p>

										<Link
											className={"phoneNumber Footer-link-Bold"}
											href={`tel:+${t.contactUs.phone.phones.phone1}`}
										>
											{" "}
											{t.contactUs.phone.phones.phone1}{" "}
										</Link>
										<Link
											className={"phoneNumber Footer-link-Bold"}
											href={`tel:+${t.contactUs.phone.phones.phone2}`}
										>
											{" "}
											{t.contactUs.phone.phones.phone2}{" "}
										</Link>
										<Link
											className={"phoneNumber Footer-link-Bold"}
											href={`tel:+${t.contactUs.phone.phones.phone3}`}
										>
											{" "}
											{t.contactUs.phone.phones.phone3}{" "}
										</Link>
									</LinkFooterStyles>
								</LinkContainer>
							</FooterLink>
						</ul>
					</Col>
				</Row>

				<CopyRightsSection>
					<Image
						width={216}
						height={33}
						src={"/Logo.png"}
						alt={""}
						style={{ objectFit: "cover", height: "100%" }}
					/>

					<Flexbox gap={5}>
						<div>
							<p>
								{" "}
								{getYear} {t.copyright1} &copy; {t.copyright2}
							</p>
						</div>

						<Flexbox gap={5}>
							<Link href={"/privacy-policy"}>{t.policy}</Link>
							<Link href={"/terms"}>{t.terms}</Link>
						</Flexbox>
					</Flexbox>
				</CopyRightsSection>
			</FooterStyles>
		</FooterShell>
	);
};

export default Footer;
