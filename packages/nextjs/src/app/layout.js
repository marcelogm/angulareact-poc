'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { AngularProvider } from "./components/AngularProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AngularProvider>
        <body className={inter.className}>{children}</body>
      </AngularProvider>
    </html>
  );
}
