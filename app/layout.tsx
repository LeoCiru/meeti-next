import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meeti - Next",
  description: "Proyecto Meeti Next.js con DrizzleORM",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
