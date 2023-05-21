import React from "react";
import Menu from "./Menu";
import {FaBars, FaTimes} from "react-icons/fa";

interface MobileHeaderProps {
    isOpen: boolean;
    onClose: () => void;
    appName: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isOpen, onClose, appName }) => {
    return (
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a
                    href="index.html"
                    className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                >
                    {appName}
                </a>
                <button
                    onClick={onClose}
                    className="text-white text-3xl focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <nav className="flex flex-col pt-4">
                    <Menu />
                </nav>
            )}
        </header>
    );
};

export default MobileHeader;
