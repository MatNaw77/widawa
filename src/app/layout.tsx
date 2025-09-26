import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar/Navbar";
import { Footer } from "@/Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KS Widawa Wrocław",
    description: "Strona klubu sportowego KS Widawa Wrocław",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="h-full">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1 flex flex-col items-center w-full">{children}</main>
                    <Footer />
                </div>
                <Toaster />
            </body>
        </html>
    );
}
