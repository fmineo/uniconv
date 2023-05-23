import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { FaArrowRight } from "react-icons/fa";

type Props = {
    href: string;
    from: string;
    to: string;
    title: string;
    onClose: () => void;
};

const MenuLink = (props: Props) => {
    const pathname = usePathname();
    const { onClose } = props;

    const isActive = (path: string): boolean => {
        if (path === "/currency" && pathname === "/") return true;
        return pathname === path;
    };

    const handleLinkClick = () => {
        onClose();
    };

    return (
        <Link
            className={`flex items-center text-white hover:opacity-75 py-3 pl-5 nav-item ${
                isActive("/" + props.href) ? "active-nav-link" : ""
            }`}
            href={props.href}
            title={props.title}
            onClick={handleLinkClick}
        >
            {props.from} <FaArrowRight className="mx-2 text-xs" /> {props.to}
        </Link>
    );
};

export default MenuLink;
