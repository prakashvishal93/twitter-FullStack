import type { Metadata } from "next";
import { Inter,Quicksand} from "next/font/google";
import "./globals.css";
import {GoogleOAuthProvider} from '@react-oauth/google'
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="644485617517-5clo9t0n7s87prff7icnmqfkvurj1i1b.apps.googleusercontent.com">
        {children}
        <Toaster />
        </GoogleOAuthProvider>

        </body>
    </html>
  );
}
