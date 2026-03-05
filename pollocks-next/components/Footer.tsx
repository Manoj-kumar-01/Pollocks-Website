export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-100 pt-32 pb-12 px-4 lg:px-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30"></div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[150%] h-20 bg-slate-900 sketch-border-subtle border-slate-700/50"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">
                <div className="space-y-10">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-5xl text-primary wax-stroke transform rotate-12">
                            school
                        </span>
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase font-hand leading-none">
                                Pollocks
                            </h2>
                            <p className="text-[9px] tracking-[0.4em] text-primary-dark font-bold uppercase mt-1">
                                Excellence Hub
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xs font-body italic">
                        &quot;Empowering the next generation with knowledge, empathy, and
                        the courage to create.&quot;
                    </p>
                </div>
                <div className="md:pt-4">
                    <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] font-display flex items-center gap-2">
                        Navigation <span className="h-px w-8 bg-primary/40"></span>
                    </h4>
                    <ul className="space-y-6 text-slate-400 text-sm font-display font-medium">
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-[12px] wax-stroke">
                                    draw
                                </span>{" "}
                                Our Philosophy
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-[12px] wax-stroke">
                                    draw
                                </span>{" "}
                                Academic Calendar
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:pt-4">
                    <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] font-display flex items-center gap-2">
                        For Parents <span className="h-px w-8 bg-primary/40"></span>
                    </h4>
                    <ul className="space-y-6 text-slate-400 text-sm font-display font-medium">
                        <li>
                            <a
                                className="hover:text-primary transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-[12px] wax-stroke">
                                    draw
                                </span>{" "}
                                Admission Guide
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:pt-4">
                    <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] font-display flex items-center gap-2">
                        Get In Touch <span className="h-px w-8 bg-primary/40"></span>
                    </h4>
                    <div className="space-y-8 text-slate-400 text-sm font-display">
                        <p className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary wax-stroke">
                                location_on
                            </span>
                            123 Academic Way, <br />
                            Innovation District, NY 10001
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
                <p>
                    © 2024 Pollocks International School. Designed with a creative edge.
                </p>
            </div>
        </footer>
    );
}
