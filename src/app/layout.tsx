import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Jasa servis AC dan Menjual berbagai Furniture terpercaya di Bandung untuk rumah & kantor.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer theme="dark" />
        <Navbar/>
        {children}        
        <Footer/>
        <LiveChat/>
      </body>
    </html>
  );
}
