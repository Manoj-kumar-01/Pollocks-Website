"use client";

import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    currentPage?: string;
}

export default function MobileMenu({
    isOpen,
    onClose,
    currentPage = "dashboard",
}: MobileMenuProps) {
    const isDashboard = currentPage === "dashboard";

    return (
        <div
            className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 xl:hidden flex flex-col`}
        >
            <div className="flex items-center justify-end p-6 border-b border-sky-100">
                <button
                    onClick={onClose}
                    className="text-slate-500 hover:text-primary p-2"
                >
                    <span className="material-symbols-outlined text-3xl">close</span>
                </button>
            </div>
            <div className="flex flex-col gap-6 p-8 overflow-y-auto">
                {!isDashboard && (
                    <Link
                        href="/dashboard"
                        onClick={onClose}
                        className="text-2xl font-medium text-slate-800 hover:text-primary transition-colors font-display flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">home</span>Home
                    </Link>
                )}
                <Link
                    href="/heritage"
                    onClick={onClose}
                    className="text-2xl font-medium text-slate-800 hover:text-primary transition-colors font-display"
                >
                    Heritage
                </Link>
                <Link
                    href="/curriculum"
                    onClick={onClose}
                    className="text-2xl font-medium text-slate-800 hover:text-primary transition-colors font-display"
                >
                    Curriculum
                </Link>
                <Link
                    href="/admissions"
                    onClick={onClose}
                    className="text-2xl font-medium text-slate-800 hover:text-primary transition-colors font-display"
                >
                    Admissions
                </Link>
                <Link
                    href="/scrapbook"
                    onClick={onClose}
                    className="text-2xl font-medium text-slate-800 hover:text-primary transition-colors font-display"
                >
                    Life at Pollocks
                </Link>

                <div className="h-px bg-sky-100 my-4"></div>

                <button className="flex items-center justify-center sketch-border bg-primary text-white py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-all rounded-xl shadow-lg shadow-primary/30">
                    Inquire Now
                </button>
            </div>
        </div>
    );
}
