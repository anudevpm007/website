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

export const metadata = {
  metadataBase: new URL("https://astraliva.com"),
  keywords:["Web Application Security Testing","Mobile Application Security Testing","API Security Testing","Thick Client Application Security Testing","POS Application testing"],
  title: {
    default:"ASTRALIVA",
    template:"%s | ASTRALIVA"
  },
  openGraph:{
    description: "Astraliva delivers next-generation cybersecurity solutions through customized strategies and research-oriented approach. We protect your entire digital ecosystem, from your core network to cloud infrastructure and all connected devices with proactive threat intelligence and robust security measures. Empower your business with the confidence to focus on achieving your core objectives. Explore our solutions.",
    
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
