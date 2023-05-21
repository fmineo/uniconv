import React from "react";
import Menu from "./Menu";

interface SidebarProps {
    appName: string;
}

class Sidebar extends React.Component<SidebarProps> {
    render() {
        const { appName } = this.props;

        return (
            <aside className="relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl">
                <div className="p-5">
                    <a
                        href="/"
                        className="text-white text-2xl font-semibold uppercase hover:text-gray-300"
                    >
                        {appName}
                    </a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <Menu />
                </nav>
            </aside>
        );
    }
}

export default Sidebar;
