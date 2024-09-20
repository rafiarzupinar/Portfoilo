import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/Navbar";
import Navigation from "@/app/component/Navigation";


const inter=Inter({subsets:['latin']})


export const metadata: Metadata = {
  title: "Webchain Dev",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        {children}
        <Navigation/>
        </body>
    </html>
  );
}
