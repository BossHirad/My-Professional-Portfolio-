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
  title: "Haji - Web Developer & UI/UX Designer",
  description: "Professional portfolio of Haji, a web developer and UI/UX designer specializing in modern web applications and user experience design.",
  keywords: ["web developer", "UI/UX designer", "React", "Next.js", "JavaScript", "portfolio"],
  authors: [{ name: "Haji" }],
  creator: "Haji",
  openGraph: {
    title: "Haji - Web Developer & UI/UX Designer",
    description: "Professional portfolio showcasing web development and UI/UX design projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
