import type { Metadata } from "next";
import { Alex_Brush, Montserrat } from "next/font/google";
import { Header } from "@/components";
import "./globals.css";
import { SessionContextProvider } from "@/contexts/SessionContext";
import getCurrentUser from "@/actions/getCurrentUser";

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

interface RootLayoutProps {
  children: Readonly<React.ReactNode>
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={`${alexBrush.variable} ${montserrat.variable} relative`}>
        <SessionContextProvider>
          <Header currentUser={currentUser} />
          {children}
        </SessionContextProvider>
      </body>
    </html>
  );
}
