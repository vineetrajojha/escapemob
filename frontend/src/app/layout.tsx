import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// ✅ Correct font usage (Poppins has 'weight' not 'variable' for single weight usage)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // you can include multiple if needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EscapeMob",
  description: "EscapeMob - Your Ultimate Escape to growth.",
};

// ✅ RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
