import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/CustomCursor";
import ScheduleMeet from "@/components/ScheduleMeet";

import Preloader from "@/components/Preloader";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EscapeMob",
  description: "Escape the norm with our saas agency.",
  icons: {
    icon: "./logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <CustomCursor />
          <ScheduleMeet />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
