import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
	HeaderTranslationAR,
	HeaderTranslationEN,
} from "../../../../messages/Shell/HeaderTranslation";
import { Locale } from "@/Library/Globals";
import { Flexbox, Section } from "@/Library/Grids/Grids";
import styles from "@/Library/Grids/Spaces.module.css";
import {
	ChevronIcon,
	DesktopMenu,
	HamburgerMenu,
	HeaderShell,
	LanguageDropDown,
	MobileMenu,
	MobileMenuLinks,
	NavLinks,
	ServiceLink,
	ServiceLinkContainer,
	ServiceLinkMobile,
	SubHeading,
	SubHeadingLink,
} from "@/Library/Shell/Header/Header.styles";
import Button from "@/Library/UI/Button/Button";
import Chevron from "@/Library/UI/IconGraphy/Chevron/Chevron";
import EmailIcon from "@/Library/UI/IconGraphy/EmailIcon/EmailIcon";
import PhoneIcon from "@/Library/UI/IconGraphy/PhoneIcon/PhoneIcon";
import FaceBookIcon from "@/Library/UI/IconGraphy/SocialIcon/FaceBookIcon";
import InstagramIcon from "@/Library/UI/IconGraphy/SocialIcon/InstagramIcon";
import TiktokIcon from "@/Library/UI/IconGraphy/SocialIcon/TiktokIcon";

const Header = ({ locale }: Locale) => {
	const [open, setOpen] = useState(false);
	const [openService, setOpenService] = useState(false);
	const closeMobileMenu = (): void => {
		setOpenService(false);
		setOpen(false);
	};

	const pathname = usePathname();
	const originalPathname = pathname.replace(/^\/(en|ar)\//, "/");
	const router = useRouter();

	const t = locale === "en" ? HeaderTranslationEN : HeaderTranslationAR;

	const changeLang = async (lang: "en" | "ar") => {
		const destination = originalPathname === "/en" ? "/" : originalPathname;

		if (lang === "en") {
			await router.push(`/en${destination}`);
		} else {
			await router.push(`/ar${destination}`);
		}
		router.refresh();
		closeMobileMenu();
	};

	const handleLinkClick = async (href: string) => {
		await router.push(href);
		closeMobileMenu();
	};

	return (
		<header>
			<HeaderShell>
				<SubHeading>
					<Section className={"positionRelative"} as={"div"}>
						<Flexbox justify={"space-between"}>
							<Flexbox gap={24}>
								<Flexbox gap={6} aligncenter={"center"}>
									<EmailIcon />
									<SubHeadingLink href={`mailto:${t.subHeading.email}`}>
										{t.subHeading.email}
									</SubHeadingLink>
								</Flexbox>

								<Flexbox gap={6} aligncenter={"center"}>
									<PhoneIcon />
									<SubHeadingLink href={`tel:${t.subHeading.phone}`}>
										{t.subHeading.phone}
									</SubHeadingLink>
								</Flexbox>
							</Flexbox>

							<Flexbox gap={12}>
								<Link target={"_blank"} rel="noreffer" href={"https://facebook.com/BPerfectClinic"}>
									<FaceBookIcon />
								</Link>
								<Link
									target={"_blank"}
									rel="noreffer"
									href={"https://www.instagram.com/bperfect.clinic/"}
								>
									<InstagramIcon />
								</Link>
								<Link
									target={"_blank"}
									rel="noreffer"
									href={"https://www.tiktok.com/@bperfect.clinic"}
								>
									<TiktokIcon />
								</Link>
							</Flexbox>
						</Flexbox>
					</Section>
				</SubHeading>
				<Section as={"div"}>
					<Flexbox
						className={`${styles.paddingTop32} ${styles.paddingBottom32}`}
						justify={"space-between"}
						aligncenter={"center"}
					>
						<Link href={"/"}>
							<Image
								width={215}
								height={32}
								src={"/Logo.png"}
								alt={""}
								style={{ objectFit: "cover", height: "100%" }}
							/>
						</Link>
						<nav>
							<DesktopMenu aligncenter={"center"}>
								<Flexbox as={"ul"} gap={32}>
									<li>
										<NavLinks href={"/"}>{t.header.links.home}</NavLinks>
									</li>
									<ServiceLinkContainer as={"li"}>
										<Flexbox gap={8} aligncenter={"center"}>
											<NavLinks href={"/services"}>{t.header.links.services.services}</NavLinks>
											<ChevronIcon className={"ChevronIcon"}>
												<Chevron />
											</ChevronIcon>
										</Flexbox>

										<ServiceLink className={"links"}>
											<li>
												<Link href={"/services/body-reshaping"}>
													{t.header.links.services.bodyReshaping}
												</Link>
											</li>
											<li>
												<Link href={"/services/fillers-botox"}>
													{t.header.links.services.fillersBotox}
												</Link>
											</li>
											<li>
												<Link href={"/services/hair-treatments"}>
													{t.header.links.services.hairTreatment}
												</Link>
											</li>
											<li>
												<Link href={"/services/laser-hair-removal"}>
													{t.header.links.services.laserHairRemoval}
												</Link>
											</li>
											<li>
												<Link href={"/services/facial-treatment"}>
													{t.header.links.services.facialTreatment}
												</Link>
											</li>
										</ServiceLink>
									</ServiceLinkContainer>

									<li>
										<NavLinks href={"/about"}>{t.header.links.about}</NavLinks>
									</li>
									<li>
										<NavLinks href={"/blogs"}>{t.header.links.blog}</NavLinks>
									</li>

									<li>
										<NavLinks href={"/contact"}>{t.header.links.contact}</NavLinks>
									</li>

									<LanguageDropDown locale={locale}>
										<p>{t.Lang}</p>
										<svg
											width="16px"
											height="16px"
											strokeWidth="1.5"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											color="#102d18"
										>
											<path
												d="M6 9L12 15L18 9"
												stroke="#102d18"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<ul>
											<li>
												{locale === "en" ? (
													<p>English</p>
												) : (
													<button onClick={() => changeLang("en")}>English</button>
												)}
											</li>
											<li>
												{locale === "ar" ? (
													<p>عربي</p>
												) : (
													<button onClick={() => changeLang("ar")}>عربي</button>
												)}
											</li>
										</ul>
									</LanguageDropDown>
								</Flexbox>
								<div className={`${styles.marginLeft24}`}>
									<Link href={"/appointment"}>
										<Button size={"Small"} Body={t.header.buttonBody} />
									</Link>
								</div>
							</DesktopMenu>
							<MobileMenu>
								<HamburgerMenu
									onClick={() => setOpen(prev => !prev)}
									id={"menuButton"}
									className={` ${open ? "active" : undefined}  ${styles.marginLeft24}`}
								>
									<span></span>
									<span></span>
								</HamburgerMenu>
							</MobileMenu>
						</nav>
					</Flexbox>
					<MobileMenuLinks className={open ? "" : "displayNone"}>
						<li>
							<NavLinks onClick={() => handleLinkClick("/")} href={"/"}>
								{t.header.links.home}
							</NavLinks>
						</li>

						<ServiceLinkContainer as={"li"}>
							<Flexbox gap={8} aligncenter={"center"}>
								<NavLinks onClick={() => handleLinkClick("/services")} href={"/services"}>
									{t.header.links.services.services}
								</NavLinks>

								<ChevronIcon
									className={"ChevronIcon"}
									onClick={() => setOpenService(prev => !prev)}
								>
									<Chevron />
								</ChevronIcon>
							</Flexbox>

							<ServiceLinkMobile className={`links ${openService ? "" : "displayNone"}`}>
								<li>
									<Link
										onClick={() => handleLinkClick("/services/body-reshaping")}
										href={"/services/body-reshaping"}
									>
										{t.header.links.services.bodyReshaping}
									</Link>
								</li>
								<li>
									<Link
										onClick={() => handleLinkClick("/services/fillers-botox")}
										href={"/services/fillers-botox"}
									>
										{t.header.links.services.fillersBotox}
									</Link>
								</li>
								<li>
									<Link
										onClick={() => handleLinkClick("/services/hair-treatments")}
										href={"/services/hair-treatments"}
									>
										{t.header.links.services.hairTreatment}
									</Link>
								</li>
								<li>
									<Link
										onClick={() => handleLinkClick("/services/laser-hair-removal")}
										href={"/services/laser-hair-removal"}
									>
										{t.header.links.services.laserHairRemoval}
									</Link>
								</li>
								<li>
									<Link
										onClick={() => handleLinkClick("/services/skin-treatments")}
										href={"/services/skin-treatments"}
									>
										{t.header.links.services.skinTreatments}
									</Link>
								</li>
							</ServiceLinkMobile>
						</ServiceLinkContainer>

						<li>
							<NavLinks onClick={() => handleLinkClick("/about")} href={"/about"}>
								{t.header.links.about}
							</NavLinks>
						</li>

						<li>
							<NavLinks onClick={() => handleLinkClick("/blogs")} href={"/blog"}>
								{t.header.links.blog}
							</NavLinks>
						</li>

						<li>
							<NavLinks onClick={() => handleLinkClick("/contact")} href={"/contact"}>
								{t.header.links.contact}
							</NavLinks>
						</li>

						<LanguageDropDown locale={locale}>
							<p>{t.Lang}</p>
							<svg
								width="16px"
								height="16px"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#102d18"
							>
								<path
									d="M6 9L12 15L18 9"
									stroke="#102d18"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
							<ul>
								<li>
									{locale === "en" ? (
										<p>English</p>
									) : (
										<button onClick={() => changeLang("en")}>English</button>
									)}
								</li>
								<li>
									{locale === "ar" ? (
										<p>عربي</p>
									) : (
										<button onClick={() => changeLang("ar")}>عربي</button>
									)}
								</li>
							</ul>
						</LanguageDropDown>

						<div className={`${styles.marginLeft24}`}>
							<Link onClick={() => handleLinkClick("/appointment")} href={"/appointment"}>
								<Button size={"Small"} Body={t.header.buttonBody} />
							</Link>
						</div>
					</MobileMenuLinks>
				</Section>
			</HeaderShell>
		</header>
	);
};

export default Header;
