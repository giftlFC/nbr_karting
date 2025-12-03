import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Zen_Dots } from "next/font/google";
 

export const metadata: Metadata = {
  title: "NBR Racing Team",
  description: "NBR Racing Team - karting, events, gallery, news and contact",
};

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header  />
        <main className={zenDots.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
