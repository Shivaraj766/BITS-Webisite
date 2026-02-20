import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PHProvider from "./posthog-provider";

export const metadata: Metadata = {
  title: "BITS Adoni - Bharat Institute of Technology & Science",
  description:
    "BITS Adoni is a premier engineering institution in Andhra Pradesh offering undergraduate programs in engineering and technology. Affiliated to JNTUA, approved by AICTE.",
  keywords:
    "BITS Adoni, engineering college, Andhra Pradesh, JNTUA, AICTE, BTech, admissions",
  openGraph: {
    title: "BITS Adoni - Bharat Institute of Technology & Science",
    description:
      "Premier engineering institution in Andhra Pradesh offering world-class education",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1b4b" />
      </head>
      <body className="antialiased">
        <PHProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PHProvider>
      </body>
    </html>
  );
}
