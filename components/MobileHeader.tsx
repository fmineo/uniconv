"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface MobileHeaderProps {
    isOpen: boolean;
    appName: string;
}

const MobileHeader: React.FC<{ appName: string }> = ({ appName }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <header
            className={`w-full bg-sidebar px-6 sm:hidden h-fit ${
                isSidebarOpen ? "sidebar-open" : ""
            }`}
        >
            <div className="flex items-center justify-between sticky top-0 z-10 bg-sidebar">
                <a
                    href="/"
                    className="text-white py-4 text-3xl font-semibold uppercase hover:text-gray-300 bg-sidebar"
                >
                    <Image className="inline-block mr-4" src={"/apple-touch-icon.png"} alt="logo" width={36} height={36}/> 
                    {appName}
                </a>
                <button
                    onClick={toggleSidebar}
                    className="text-white text-3xl focus:outline-none"
                    aria-label="Menu"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isSidebarOpen && (
                <nav className="flex flex-col pt-4 min-h-[100px]">
                    <Menu onClose={toggleSidebar} />
                </nav>
            )}
        </header>
    );
};

export default MobileHeader;
