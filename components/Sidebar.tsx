import React from "react";
import Menu from "./Menu";

const Sidebar: React.FC = () => {
    return (
        <aside className="relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl">
            <div className="p-5">
                <a
                    href="/"
                    className="text-white text-2xl font-semibold uppercase hover:text-gray-300"
                >
                    Convertitore
                </a>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <Menu />
            </nav>
        </aside>
    );
};

export default Sidebar;
