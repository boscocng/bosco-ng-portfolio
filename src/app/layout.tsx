import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bosco Ng - Software Engineer & CS Student",
  description: "Portfolio of Bosco Ng, a software engineer and second-year CS student at Queen's University. Showcasing projects, experience, and technical skills in full-stack development.",
  keywords: ["Bosco Ng", "Software Engineer", "Computer Science", "Queen's University", "Portfolio", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Bosco Ng" }],
  creator: "Bosco Ng",
  openGraph: {
    title: "Hi, I'm Bosco",
    description: "Portfolio of Bosco Ng, a software engineer and second-year CS student at Queen's University. Showcasing projects, experience, and technical skills in full-stack development.",
    url: "https://boscong.me",
    siteName: "Bosco Ng Portfolio",
    images: [
      {
        url: "/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Bosco Ng Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Bosco",
    description: "Portfolio of Bosco Ng, a software engineer and second-year CS student at Queen's University.",
    images: ["/images/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${plexMono.variable} font-sans antialiased bg-white relative overflow-x-clip notebook-paper`}>
        {/* Corner gradient bleeds (bottom-left and bottom-right) */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-56 md:h-64 [background:radial-gradient(50rem_18rem_at_0%_100%,rgba(17,24,39,0.26),transparent_78%),radial-gradient(50rem_18rem_at_100%_100%,rgba(55,65,81,0.24),transparent_78%),linear-gradient(to_top,rgba(17,24,39,0.12),transparent),radial-gradient(2px_2px_at_10%_95%,rgba(0,0,0,0.035),transparent_70%),radial-gradient(2px_2px_at_90%_95%,rgba(0,0,0,0.035),transparent_70%)]"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
