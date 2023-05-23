"use client";
import React, { useState, useRef, useEffect } from "react";
import MenuLink from "./MenuLink";

const Menu = ({ onClose }: { onClose: () => void }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isCommand, setIsCommand] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            searchInputRef.current?.focus();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    useEffect(() => {
        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        const isIOS = () => {
            return (
                [
                    "iPad Simulator",
                    "iPhone Simulator",
                    "iPod Simulator",
                    "iPad",
                    "iPhone",
                    "iPod",
                ].includes(navigator.platform) ||
                (navigator.userAgent.includes("Mac") &&
                    "ontouchend" in document)
            );
        };
        setIsCommand(isMac || isIOS);
    }, []);

    const menuLinks = [
        {
            href: "currency",
            title: "Convertitore Valuta",
            from: "Valuta",
            to: "Valuta",
        },
        {
            href: "mi2km",
            title: "Da Miglia a Chilometri",
            from: "Miglia",
            to: "Chilometri",
        },
        {
            href: "km2mi",
            title: "Da Chilometri a Miglia",
            from: "Chilometri",
            to: "Miglia",
        },
        {
            href: "text2ascii",
            title: "Da Testo ad ASCII",
            from: "Testo",
            to: "ASCII",
        },
        {
            href: "ascii2text",
            title: "Da ASCII a testo",
            from: "ASCII",
            to: "Testo",
        },
        {
            href: "urlencode",
            title: "URL Encoder",
            from: "URL",
            to: "Encode",
        },
        {
            href: "urldecode",
            title: "URL Decoder",
            from: "URL",
            to: "Decode",
        },
        {
            href: "btoa",
            title: "Base64 Encoder",
            from: "Base64",
            to: "Encode",
        },
        {
            href: "atob",
            title: "Base64 Decoder",
            from: "Base64",
            to: "Decode",
        },
        
    ];

    const filteredMenuLinks = menuLinks.filter((link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center pb-4 sm:px-5 sticky top-16 z-10 bg-sidebar">
                <label className="relative text-gray-400 focus-within:text-gray-600 block w-full">
                    <span className="hidden pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-1 py-1 text-xs border rounded sm:block text-white px-1 font-light ">
                        {isCommand ? (
                            <svg
                                className="inline-block"
                                width="13px"
                                height="13px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                            >
                                <rect x="8" y="8" width="8" height="8"></rect>
                                <path d="M5,2H5A3,3,0,0,0,2,5H2A3,3,0,0,0,5,8H8V5A3,3,0,0,0,5,2Z"></path>
                                <path d="M22,5h0a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3V8h3A3,3,0,0,0,22,5Z"></path>
                                <path d="M2,19H2a3,3,0,0,0,3,3H5a3,3,0,0,0,3-3V16H5A3,3,0,0,0,2,19Z"></path>
                                <path d="M19,22h0a3,3,0,0,0,3-3h0a3,3,0,0,0-3-3H16v3A3,3,0,0,0,19,22Z"></path>
                            </svg>
                        ) : (
                            "CTRL"
                        )}{" "}
                        + K
                    </span>

                    <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Cerca..."
                        className="mx-auto border rounded w-full py-1 px-3 text-md font-normal bg-blue-600 placeholder:text-gray-200 text-white"
                    />
                </label>
            </div>
            {filteredMenuLinks.length === 0 ? (
                <p className="text-sm text-center text-white">
                    Nessun risultato trovato.
                </p>
            ) : (
                filteredMenuLinks.map((link) => (
                    <MenuLink
                        key={link.href}
                        href={link.href}
                        title={link.title}
                        from={link.from}
                        to={link.to}
                        onClose={onClose}
                    />
                ))
            )}
        </>
    );
};

export default Menu;
