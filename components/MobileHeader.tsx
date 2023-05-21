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
        <header className={`w-full bg-sidebar px-6 sm:hidden h-fit ${isOpen ? 'sidebar-open' : ''}`}>
            <div className="flex items-center justify-between sticky top-0 z-10 bg-sidebar">
                <a
                    href="/"
                    className="text-white py-4 text-3xl font-semibold uppercase hover:text-gray-300 bg-sidebar"
                >
                    {appName}
                </a>
                <button
                    onClick={onClose}
                    className="text-white text-3xl focus:outline-none"
                    aria-label="Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <nav className="flex flex-col pt-4 min-h-[100px]">
                    <Menu onClose={onClose}/>
                </nav>
            )}
        </header>
    );
};

export default MobileHeader;
