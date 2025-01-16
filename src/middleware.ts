import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const isDevelopment: boolean = process.env.NODE_ENV === "development";

// Define locales and default locale
const intlMiddleware = createMiddleware({
	locales: ["en", "ar"], // Supported locales
	defaultLocale: "ar", // Default locale
	localePrefix: "as-needed", // Use locale prefix only when needed
});

export async function middleware(request: NextRequest): Promise<NextResponse> {
	const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

	// Content Security Policy (CSP) definition
	const cspHeader = `
    default-src 'self';
    script-src 'self' ${isDevelopment ? "'unsafe-eval'" : ""} 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
	const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

	// Clone and modify request headers
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-nonce", nonce);
	requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

	// Initialize response with updated headers
	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	// Set additional security headers in the response
	response.headers.set("x-nonce", nonce);
	response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);
	response.headers.set("Access-Control-Allow-Credentials", "true");
	response.headers.set("Access-Control-Allow-Methods", "GET, DELETE, POST, PUT, OPTIONS");
	response.headers.set(
		"Cache-Control",
		"max-age=0, max-stale=0, must-revalidate, no-cache, no-store, post-check=0, pre-check=0, private",
	);
	response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	response.headers.set("X-Content-Type-Options", "nosniff");
	response.headers.set("X-Frame-Options", "DENY");
	response.headers.set("X-DNS-Prefetch-Control", "off");
	response.headers.set("X-XSS-Protection", "1; mode=block");
	response.headers.set("X-Download-Options", "noopen");
	response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
	response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
	response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
	response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

	// Return the intl middleware with the processed request
	return intlMiddleware(request);
}

// Configuration for Next.js middleware matching
export const config = {
	matcher: [
		"/", // Root route
		"/(ar|en)/:path*", // Locale-specific routes
		"/((?!api|_next|_vercel|.*\\..*).*)", // Exclude specific paths like API and assets
	],
};
