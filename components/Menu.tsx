"use client";
import React, { useState, useRef, useEffect } from "react";
import MenuLink from "./MenuLink";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState("");
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

    const menuLinks = [
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
            <div className="flex items-center pb-4 sm:px-5">
                <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Cerca..."
                    className="mx-auto border rounded w-full py-1 px-3 text-md font-normal bg-blue-600 placeholder:text-gray-200 text-white"
                />
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
                    />
                ))
            )}
        </>
    );
};

export default Menu;
