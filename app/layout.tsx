import type { Metadata } from "next";
import { Alex_Brush, Montserrat } from "next/font/google";
import { Header } from "@/components";
import "./globals.css";

const alexBrush = Alex_Brush({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alexBrush"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Invoice Scanner",
  description: "Invoice Scanner App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} ${montserrat.variable} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
