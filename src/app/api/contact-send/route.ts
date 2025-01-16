import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { firstName, lastName, email, subject, message } = await req.json();

		if (!firstName || !lastName || !email || !message) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		const smtpHost = "smtp.gmail.com";
		const smtpPort = 587;
		const smtpUser = "bperfectclinic3@gmail.com";
		const smtpPass = "fzmzqsrjesdpywlk";

		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: false,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		const mailOptionsToAdmin = {
			from: `"Bperfect" <${smtpUser}>`,
			to: "bperfectclinic3@gmail.com",
			subject: `New contact message from ${firstName} ${lastName}`,
			html: `<!DOCTYPE html>

<html lang="en" o="urn:schemas-microsoft-com:office:office" v="urn:schemas-microsoft-com:vml">
<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <!--[if mso]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            <o:AllowPNG/>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            0;
            0;
        }

        a[x-apple-data-detectors] {
            inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            none;
            max-height: 0px;
            hidden;
        }

        .image_block img + div {
            none;
        }

        @media (max-width: 768px) {
            .desktop_hide table.icons-inner {
                inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                0 auto;
            }

            .mobile_hide {
                none;
            }

            .row-content {
                100% !important;
            }

            .stack .column {
                100%;
                block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                table !important;
                max-height: none !important;
            }
        }
    </style>
</head>
<body style="background-color: #ecf2f5; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
       style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ecf2f5;" width="100%">
    <tbody>
    <tr>
        <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation"
                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                    <td style={background:#fff}>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
                               role="presentation"
                               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; border-radius: 8px; color: #000; width: 795px; margin: 0 auto;"
                               width="795">
                            <tbody>
                            <tr>
                                <td class="column column-1"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 35px; padding-top: 35px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                    width="100%">
                                    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1"
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:center;width:100%;">
                                                <h2 style="margin: 0; color: #18223b; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 25px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;">
                                                    <strong> Hello BPerfect Admin You Have New Contact Us Form Submisstion</strong></h2>
                                            </td>
                                        </tr>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-2"
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:left;">
                                                <div align="left" class="alignment"><!--[if mso]>
                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                 href="https://www.exemple.com/"
                                                                 style="height:42px;width:717px;v-text-anchor:middle;"
                                                                 arcsize="79%" stroke="false" fillcolor="#fffff">
                                                        <w:anchorlock/>
                                                        <v:textbox inset="0px,0px,0px,0px">
                                                            <center style="color:#18223b; font-family:Arial, sans-serif; font-size:16px">
                                                    <![endif]--><a href="https://www.exemple.com/"
                                                                   style="text-decoration:none;display:block;color:#18223b;background-color:#fffff;border-radius:3px;width:95%;border-top:0px solid #8a3b8f;font-weight:400;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:5px;padding-bottom:5px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                   target="_blank"><span
                                                            style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                            style="word-break: break-word; line-height: 32px;">Email ${email}</span></span></a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                            </td>
                                        </tr>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-4"
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:left;">
                                                <div align="left" class="alignment"><!--[if mso]>
                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                 href="https://www.exemple.com/"
                                                                 style="height:42px;width:717px;v-text-anchor:middle;"
                                                                 arcsize="79%" stroke="false" fillcolor="#fffff">
                                                        <w:anchorlock/>
                                                        <v:textbox inset="0px,0px,0px,0px">
                                                            <center style="color:#18223b; font-family:Arial, sans-serif; font-size:16px">
                                                    <![endif]--><a href="https://www.exemple.com/"
                                                                   style="text-decoration:none;display:block;color:#18223b;background-color:#fffff;border-radius:3px;width:95%;border-top:0px solid #8a3b8f;font-weight:400;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:5px;padding-bottom:5px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                   target="_blank"><span
                                                            style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                            style="word-break: break-word; line-height: 32px;">Name${firstName} ${lastName}</span></span></a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                            </td>
                                        </tr>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-5"
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:left;">
                                                <div align="left" class="alignment"><!--[if mso]>
                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                 href="https://www.exemple.com/"
                                                                 style="height:42px;width:717px;v-text-anchor:middle;"
                                                                 arcsize="79%" stroke="false" fillcolor="#fffff">
                                                        <w:anchorlock/>
                                                        <v:textbox inset="0px,0px,0px,0px">
                                                            <center style="color:#18223b; font-family:Arial, sans-serif; font-size:16px">
                                                    <![endif]--><a href="https://www.exemple.com/"
                                                                   style="text-decoration:none;display:block;color:#18223b;background-color:#fffff;border-radius:3px;width:95%;border-top:0px solid #8a3b8f;font-weight:400;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:5px;padding-bottom:5px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                   target="_blank"><span
                                                            style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                            style="word-break: break-word; line-height: 32px;">Requsted Service ${subject}rs</span></span></a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                            </td>
                                        </tr>
                                    </table>
									   <table border="0" cellpadding="0" cellspacing="0" class="button_block block-4"
                                           // eslint-disable-next-line no-irregular-whitespace
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:left;">
                                                <div align="left" class="alignment"><!--[if mso]>
                                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                                                 xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                 href="https://www.exemple.com/"
                                                                 style="height:42px;width:717px;v-text-anchor:middle;"
                                                                 arcsize="79%" stroke="false" fillcolor="#fffff">
                                                        <w:anchorlock/>
                                                        <v:textbox inset="0px,0px,0px,0px">
                                                            <center style="color:#18223b; font-family:Arial, sans-serif; font-size:16px">
                                                    <![endif]--><a href="https://www.exemple.com/"
                                                                   style="text-decoration:none;display:block;color:#18223b;background-color:#fffff;border-radius:3px;width:95%;border-top:0px solid #8a3b8f;font-weight:400;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:5px;padding-bottom:5px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                   target="_blank"><span
                                                            style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                            style="word-break: break-word; line-height: 32px;">Message${message}</span></span></a>
                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
                <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
                               role="presentation"
                               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 795px; margin: 0 auto;"
                               width="795">
                            <tbody>
                            <tr>
                                <td class="column column-1"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                    width="100%">
                                    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1"
                                           role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                           width="100%">
                                        <tr>
                                            <td class="pad"
                                                style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                <table cellpadding="0" cellspacing="0" role="presentation"
                                                       style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                       width="100%">
                                                    <tr>
                                                        <td class="alignment"
                                                            style="vertical-align: middle; text-align: center;">
                                                            <!--[if vml]>
                                                            <table align="left" cellpadding="0" cellspacing="0"
                                                                   role="presentation"
                                                                   style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                                            <![endif]-->
                                                            <!--[if !vml]><!-->
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>`,
		};

		const mailOptionsToUser = {
			from: `"Bperfect" <${smtpUser}>`,
			to: email,
			subject: "Thank You for Contacting Us",
			html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: inherit;
      font-size: 14px;
    }
    body {
      color: #fff;
    }
    body a {
      color: #000000;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet"><style>
    body {font-family: 'Barlow', sans-serif;}
</style><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#fff" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFF;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
            <tr>
              <td valign="top" bgcolor="#FFFFFF" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p>Welcome to Tailored Solutions! We're thrilled that you've reached out for a quote, and we can't wait to assist you.</p>
      </td>
    </tr>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="713179b4-c60e-442b-bdf0-63b5bc7f9fe4" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:5px 5px 5px 5px; line-height:22px; text-align:inherit; background-color:#FFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: right"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space-collapse: preserve; text-wrap: wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; color: #ffffff"><a href="{{weblink}}"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; outline-color: initial; outline-style: none; outline-width: initial; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; transition-property: color; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space-collapse: preserve; text-wrap: wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; color: #0061ff"></span><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space-collapse: preserve; text-wrap: wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; color: #0061ff"></span></a></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:25px 0px 25px 0px;" bgcolor="#f3eefb" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="600" style="width:600px;  border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ac5266f8-1184-470c-bd41-3db79ca994ff">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:50% !important; width:50%; height:auto !important;" width="300" alt="" data-proportionally-constrained="true" data-responsive="true" src="https://www.bperfect.clinic/_next/image?url=%2FLogo.png&w=256&q=75">
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table>
  <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="891172e8-d811-4c68-a3b7-a9236a2d0912.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:40px 30px 20px 30px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 30px; font-family: inherit">Welcome ${firstName} ${lastName}</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(217, 217, 227); border-right-color: rgb(217, 217, 227); border-bottom-color: rgb(217, 217, 227); border-left-color: rgb(217, 217, 227); border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1px; --tw-scale-y: 1px; --tw-scroll-snap-strictness: proximity; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; margin-top: 1.25em; margin-right: 0px; margin-bottom: 1.25em; margin-left: 0px; font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space-collapse: preserve; text-wrap: wrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; color: #202020">Thank you for reaching out, We have received your message and our team will get back to you shortly.</span></div>
<div style="font-family: inherit; text-align: start"><span style="border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(217, 217, 227); border-right-color: rgb(217, 217, 227); border-bottom-color: rgb(217, 217, 227); border-left-color: rgb(217, 217, 227); border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1px; --tw-scale-y: 1px; --tw-scroll-snap-strictness: proximity; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; margin-top: 1.25em; margin-right: 0px; margin-bottom: 1.25em; margin-left: 0px; font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space-collapse: preserve; text-wrap: wrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; color: #202020">Best Regards,</span></div>
<div style="font-family: inherit; text-align: start"><br></div>
<div style="font-family: inherit; text-align: start"><span style="border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(217, 217, 227); border-right-color: rgb(217, 217, 227); border-bottom-color: rgb(217, 217, 227); border-left-color: rgb(217, 217, 227); border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1px; --tw-scale-y: 1px; --tw-scroll-snap-strictness: proximity; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; margin-top: 1.25em; margin-right: 0px; margin-bottom: 1.25em; margin-left: 0px; font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space-collapse: preserve; text-wrap: wrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; color: #202020">Bperfect Support Team</span></div>
<div style="font-family: inherit; text-align: inherit; font-size: 17px"><br></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="84f9e9f9-05c1-47ac-832e-d0b8251f8c2c">
    <tbody>
      <tr>
        <td valign="top" style="padding:0px 0px 0px 0px; font-size:6px; line-height:10px;" align="center">
          <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
            <tbody>
			<tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
      <a  href="https://www.facebook.com/BPerfectClinic" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#ffff; height:48px; width:48px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px;">
        <img role="social-icon" alt="Facebook" title="Facebook" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" style="height:48px; width:48px;" height="48" width="48">
      </a>
    </td>
	<td style="padding: 0px 5px;" class="social-icon-column">
      <a  href="https://www.instagram.com/bperfect.clinic/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#ffff; height:48px; width:48px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px;">
        <img role="social-icon" alt="Instagram" title="Instagram" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" style="height:48px; width:48px;" height="48" width="48">
      </a>
    </td>
	<td style="padding: 0px 5px;" class="social-icon-column">
      <a  href="https://www.tiktok.com/@bperfect.clinic" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#ffff; height:48px; width:48px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px;">
        <img role="social-icon" alt="WhatsApp" title="WhatsApp" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png" style="height:48px; width:48px;" height="48" width="48">
     </a>
    </td>
	<td style="padding: 0px 5px;" class="social-icon-column">
      <a  href="https://wa.me/+201028080800" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#ffff; height:48px; width:48px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px;">
        <img role="social-icon" alt="WhatsApp" title="WhatsApp" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-512.png" style="height:48px; width:48px;" height="48" width="48">
     </a>
    </td>
	</tr></tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" 
  style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;
  " data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"></p></div></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>

        `,
		};

		await transporter.sendMail(mailOptionsToUser);
		await transporter.sendMail(mailOptionsToAdmin);

		return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
		// eslint-disable-next-line
	} catch (error: any) {
		// eslint-disable-next-line
		console.log(error);
		return NextResponse.json(
			{ error: "Error sending emails", details: error.message },
			{ status: 500 },
		);
	}
}
