import React from "react";
import Menu from "./Menu";

interface SidebarProps {
    appName: string;
}

class Sidebar extends React.Component<SidebarProps> {
    onClose = () => {
        return false;
    }
    render() {
        const { appName } = this.props;

        return (
            <aside className="relative bg-sidebar h-screen w-96 hidden sm:block shadow-xl overflow-y-auto">
                <div className="p-5 sticky top-0 bg-sidebar z-10">
                    <a
                        href="/"
                        className="text-white text-2xl font-semibold uppercase hover:text-gray-300"
                    >
                        {appName}
                    </a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <Menu onClose={this.onClose}/>
                </nav>
            </aside>
        );
    }
}

export default Sidebar;
