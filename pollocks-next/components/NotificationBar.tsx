"use client";

import { useState } from "react";

export default function NotificationBar() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="alert-sub-bar">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mx-auto w-full md:w-auto text-center md:text-left">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <span className="notification-pill group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-[12px]">
                            campaign
                        </span>
                        Application Openings
                    </span>
                    <p className="text-[12px] font-medium text-slate-500 tracking-wide text-center md:text-left leading-relaxed">
                        Spring 2026 Admissions now live for{" "}
                        <span className="text-primary font-bold">
                            Early Years &amp; Secondary
                        </span>
                    </p>
                </div>
                <div className="h-3 w-[1px] bg-sky-200 hidden md:block opacity-40"></div>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <span className="notification-pill border-sky-200 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-[12px]">
                            timer
                        </span>
                        Upcoming Deadlines
                    </span>
                    <p className="text-[12px] font-medium text-slate-500 tracking-wide text-center md:text-left leading-relaxed">
                        Scholarship applications close{" "}
                        <span className="text-primary font-black underline decoration-sky-300/60 decoration-wavy underline-offset-2">
                            November 15th
                        </span>
                    </p>
                </div>
            </div>
            <button
                onClick={() => setVisible(false)}
                className="absolute right-8 text-slate-300 hover:text-primary transition-colors"
            >
                <span className="material-symbols-outlined text-xs">close</span>
            </button>
        </div>
    );
}
