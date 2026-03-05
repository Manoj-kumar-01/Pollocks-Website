"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NotificationBar from "./NotificationBar";

interface NavbarProps {
    currentPage?: string;
}

export default function Navbar({ currentPage = "dashboard" }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/heritage", label: "Heritage" },
        { href: "/curriculum", label: "Curriculum" },
        { href: "/admissions", label: "Admissions" },
        { href: "/scrapbook", label: "Life at Pollocks" },
    ];

    return (
        <>
            <header className="fixed top-0 z-50 w-full transition-all duration-500 shadow-2xl shadow-sky-900/5">
                <div className="glass-nav-container">
                    <nav className="nav-inner-floating flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
                        <div className="flex items-center gap-12">
                            <Link className="flex items-center gap-3 group" href="/dashboard">
                                <Image
                                    src="/Logo.jpeg"
                                    alt="Pollocks School Logo"
                                    width={64}
                                    height={64}
                                    className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform drop-shadow-sm"
                                    priority
                                />
                            </Link>
                            <div className="hidden xl:flex items-center gap-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        className="text-slate-600 hover:text-primary text-[13px] font-bold transition-colors uppercase tracking-[0.2em] font-display relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary/30 hover:after:w-full after:transition-all"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <button className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors group">
                                <span className="material-symbols-outlined text-lg wax-stroke group-hover:scale-110 transition-transform">
                                    search
                                </span>
                                <span className="text-[12px] font-black uppercase tracking-widest">
                                    Explore
                                </span>
                            </button>
                            <button className="hidden lg:flex items-center justify-center sketch-border bg-white px-10 py-2.5 text-primary text-[13px] font-black uppercase tracking-[0.2em] hover:bg-sky-50 transition-all crayon-button">
                                Inquire Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="xl:hidden text-slate-600 hover:text-primary p-2 ml-4"
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </nav>
                </div>
                <NotificationBar />
            </header>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                currentPage={currentPage}
            />
        </>
    );
}
