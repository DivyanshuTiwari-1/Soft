import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Plus Jakarta Sans - Similar to Cal.com's aesthetic
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-cal-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Inter as a fallback/secondary font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Softmvp – Software Agency for MVPs, SaaS & AI Apps",
  description: "We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster.",
  openGraph: {
    title: "Softmvp – Software Agency for MVPs, SaaS & AI Apps",
    description: "We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster.",
    images: ["/photo/Softtt.jpg"],
    url: "https://softmvp.site/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softmvp – Software Agency for MVPs, SaaS & AI Apps",
    description: "We build high-quality MVPs, SaaS platforms, and AI-powered apps to help founders and businesses scale faster.",
    images: ["/photo/Softtt.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${inter.variable} font-cal antialiased text-base leading-relaxed`}
      >
        {/* Clean grid background for white theme */}
        <div 
          className="fixed inset-0 -z-10 pointer-events-none bg-white"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
        
        {children}
      </body>
    </html>
  );
}