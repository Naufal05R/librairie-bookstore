import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { cookies } from "next/headers";
import "./globals.css";

const font_display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const font_body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Librairie",
  description: "A modern web application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = (await cookies()).get("theme")?.value || "system";

  return (
    <html lang="en" className={theme}>
      <body
        className={`${font_display.variable} ${font_body.variable} bg-white dark:bg-gray-900 min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
