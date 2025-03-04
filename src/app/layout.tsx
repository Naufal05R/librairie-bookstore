import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const font_display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});
const font_body = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Librairie",
  description: "A modern web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font_display.className} ${font_body.className}`}>
        {children}
      </body>
    </html>
  );
}
