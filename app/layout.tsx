import type { Metadata } from "next"
import { Alex_Brush, Montserrat } from "next/font/google"
import { SessionContextProvider } from "@/providers/SessionProvider"
import { ToasterProvider } from "@/providers/ToastProvider"
import { ModalProvider } from "@/contexts/ModalContext"
import { Header, LoginModal, SignupModal } from "@/components"
import "./globals.css"

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
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} ${montserrat.variable} relative`}>
        <SessionContextProvider>
          <ToasterProvider />
          <ModalProvider>
            <LoginModal />
            <SignupModal />
            <Header />
            {children}
          </ModalProvider>
        </SessionContextProvider>
      </body>
    </html>
  );
}
