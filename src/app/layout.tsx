import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth Tutorial",
  description: "Learn NextAuth.js by Dave Gray",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <AuthProvider>
        <Navbar />
        <main className="flex justify-center items-start p-6 min-h-screen">
          {children}
        </main>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
