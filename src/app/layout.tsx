import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftAI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <title>SoftAI – Software Agency for MVPs, SaaS & AI Apps</title>
  <meta name="description" content="We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster." />

  <!-- Open Graph -->
  <meta property="og:title" content="SoftAI – Software Agency for MVPs, SaaS & AI Apps" />
  <meta property="og:description" content="We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster." />
  <meta property="og:image" content="/photo/Softtt.jpg" />
  <meta property="og:url" content="https://softai.site/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SoftAI – Software Agency for MVPs, SaaS & AI Apps" />
  <meta name="twitter:description" content="We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster." />
  <meta name="twitter:image" content="/photo/Softtt.jpg" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Graphical black and white background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* SVG pattern background */}
          <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="vercel-bg" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="black" />
                <circle cx="40" cy="40" r="1.5" fill="white" fillOpacity="0.07" />
                <circle cx="0" cy="0" r="1.5" fill="white" fillOpacity="0.07" />
                <circle cx="80" cy="80" r="1.5" fill="white" fillOpacity="0.07" />
                <circle cx="0" cy="80" r="1.5" fill="white" fillOpacity="0.07" />
                <circle cx="80" cy="0" r="1.5" fill="white" fillOpacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vercel-bg)" />
          </svg>
          {/* Optional blurred white gradient overlays for extra depth */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
