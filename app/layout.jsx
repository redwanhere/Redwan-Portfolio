import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/ui/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Redwanul Haque — Media Buyer & Web Analytics Expert",
  description: "Professional Media Buyer and Web Analytics Expert. Unlocking revenue for DTC Brands through high-performing Paid Advertising, Web Analytics, Strategy, and Conversion Rate Optimization (CRO).",
  keywords: "Media Buying, Paid Ads, DTC Marketing, Web Analytics, GA4, CRO, Redwanul Haque, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-dmSans antialiased bg-[#0A0D14] text-[#F9FAFB]`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
