"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdOutlineDesignServices, MdWeb } from "react-icons/md";

const NavMenu = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const menuRef = useRef<HTMLLIElement>(null);

    const solutions = [
        {
            href: "/solutions/web-developement",
            icon: <MdWeb className="h-6 w-6 mr-2" />,
            label: "Web Development",
        },
        {
            href: "/solutions/mobile-development",
            icon: <TbDeviceMobileCode className="h-6 w-6 mr-2" />,
            label: "Mobile Development",
        },
        {
            href: "/solutions/ui-ux",
            icon: <MdOutlineDesignServices className="h-6 w-6 mr-2" />,
            label: "UI & UX Design",
        },
        {
            href: "/solutions/data-analysis",
            icon: <BsDatabaseAdd className="h-6 w-6 mr-2" />,
            label: "Data Analysis",
        },
    ];

    const menuItems = [
        { href: "/case-study", label: "Case Study" },
        { href: "/about-us", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/blog", label: "Blog" },
    ];

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSolutionsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggle = () => setIsSolutionsOpen((prev) => !prev);

    return (
        <nav className="">
        <ul className="lg:flex md:flex hidden space-x-6 items-center">
            <li className="relative" ref={menuRef}>
                <button
                    className="text-textPrimary hover:text-gray-500 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isSolutionsOpen}
                    onClick={handleToggle}
                    title="Our Solutions"
                >
                    Our Solutions
                </button>
                {isSolutionsOpen && (
                    <div className="absolute top-full mt-2 bg-gray-600 shadow-lg rounded-lg p-4 w-64 z-50">
                        <ul className="space-y-4 p-2 bg-red-600">
                            {solutions.map((solution) => (
                                <li key={solution.href}>
                                    <Link href={solution.href} onClick={() => setIsSolutionsOpen(false)}>
                                        <span className="flex justify-start items-center text-textPrimary hover:text-primary">
                                            {solution.icon}
                                            {solution.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </li>
            {menuItems.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>
                        <span className="text-textPrimary hover:text-primary">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
        </nav>
    );
};

export default NavMenu;
