import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { FaArrowRight } from "react-icons/fa";

type Props = {
    href: string;
    from: string;
    to: string;
    title: string;
};

const MenuLink = (props: Props) => {
    const pathname = usePathname();

    const isActive = (path: string): boolean => {
        if (path === "/mi2km" && pathname === "/") return true;
        return pathname === path;
    };

    return (
        <Link
            className={`flex items-center text-white opacity-75 hover:opacity-100 py-3 pl-5 nav-item ${
                isActive("/" + props.href) ? "active-nav-link" : ""
            }`}
            href={props.href}
            title={props.title}
        >
            {props.from} <FaArrowRight className="mx-2 text-xs" /> {props.to}
        </Link>
    );
};

export default MenuLink;
