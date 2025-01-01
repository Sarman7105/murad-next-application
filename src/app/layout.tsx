import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FaRegCopyright } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Official Melbet Agent in Bangladesh | Trusted & Secure Online Betting",
  description:
    "Bet securely with the trusted official Melbet agent in Bangladesh. Enjoy fast, reliable services and exclusive benefits tailored for Bangladeshi users. Contact us now!",
  keywords:
    "Melbet, betting agent, melbet agent, secure betting, fast betting services, online betting, trusted agent, betting in Bangladesh, online betting, Bangladeshi betting agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main className="bg-white">{children}</main>
        <footer className="bg-slate-900 py-10 px-16 sm:px-4 flex justify-center">
          <div className="flex gap-x-1 items-center text-zinc-50">
            <FaRegCopyright size={16} />
            <p className="text-zinc-50 text-center">
              2024 Melbet Agent All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
