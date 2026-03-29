import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onboarding Program — Goma Stakepool",
  description:
    "Formation gratuite d'initiation au Web 3.0 et à la Blockchain pour les jeunes de Goma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f5faff] font-sans text-[#0f2744]">
        {children}
      </body>
    </html>
  );
}
