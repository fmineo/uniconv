"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";

const inter = Inter({ subsets: ["latin"] });

const appName = "UniConv";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex bg-gray-100">
                    <Sidebar appName={appName}/>
                    <div className="relative w-full flex flex-col h-screen overflow-y-hidden">

                        <MobileHeader appName={appName} isOpen={isSidebarOpen} onClose={toggleSidebar}/>

                        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                            <main className="w-full flex-grow p-6">
                                <h1 className="text-3xl text-black pb-6">
                                    {children}
                                </h1>
                            </main>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
