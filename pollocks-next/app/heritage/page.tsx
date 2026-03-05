import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Heritage - Pollocks School",
    description: "A Legacy of Creative Excellence - Our founding story and core values since 1985.",
};

export default function HeritagePage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar currentPage="heritage" />

            <main className="pt-32">
                {/* Hero & Founding Story */}
                <section className="py-24 px-4 lg:px-24 paper-texture relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <span className="text-primary font-hand text-3xl mb-4 block">Our Story</span>
                        <h1 className="text-slate-900 text-4xl md:text-6xl lg:text-8xl font-black tracking-tight font-display mb-8">
                            A Legacy of <br />
                            <span className="hand-scribble italic text-primary">Creative Excellence</span>
                        </h1>
                        <p className="text-slate-600 text-xl font-body max-w-3xl mx-auto leading-relaxed">
                            From a small bungalow with twelve eager students to a premier institution, Pollocks has always
                            been more than a school—it&apos;s been a sanctuary for imagination.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-video sketch-border bg-white p-4 rotate-1 shadow-2xl relative group">
                                <Image
                                    alt="Original School Building Sketch"
                                    className="w-full h-full object-cover sketch-border-subtle"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0eNe6D7YccaYQ9ZumypGMpDKlw9tVjqjN7a2YLpzD2Ah8Wm1hek96bJaEr2PwnRiKVExnvRPPvJVVjJJ0Oe72psCiNwjQq6BKd1TEUdLKCqTrbHtgMJ_kFRM-nF6EUVpe8zzWtc_68oE5Rh4air_qEIAGbLLSCC2HHcuWyVKa1vQt4y8k502VNAcQeJBFGR7NOJ46qfv2BuUILQ2YA-Pis2oPxVoMCCJVvyTTOhIQv2pPNTu1nfdIo3CSLdRkmp4-XBkITS3GzO8U"
                                    width={600}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute -top-12 -left-12 w-48 h-48 flex items-center justify-center p-6 text-white text-center z-10">
                                    <div className="badge-1985 w-full h-full flex flex-col items-center justify-center shadow-lg border-2 border-white/20 bg-primary rounded-full">
                                        <span className="font-display font-black text-[10px] uppercase tracking-[0.3em] mb-1">Founded</span>
                                        <span className="font-hand text-4xl font-bold leading-none">1985</span>
                                        <span className="w-8 h-px bg-white/40 my-2"></span>
                                        <span className="font-display font-bold text-[8px] uppercase tracking-widest leading-tight">
                                            Foundation of <br />Greatness
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sky-50 -z-10 sketch-border-subtle opacity-50 rotate-12"></div>
                        </div>
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-block px-4 py-1 bg-sky-100 text-primary text-[10px] font-black uppercase tracking-[0.3em] sketch-border-subtle">
                                The Founding Story
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display leading-tight">
                                Where the First <span className="font-hand text-primary">Lines Were Drawn</span>
                            </h2>
                            <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-body">
                                <p>
                                    In the autumn of 1985, our founder envisioned a place where the rigid lines of
                                    traditional education could be softened by the fluid strokes of creativity. It began
                                    with a simple belief: that every child is an artist of their own destiny.
                                </p>
                                <p>
                                    The original building, a modest yet charming structure on Oak Street, still stands in our
                                    hearts as the place where the &quot;Pollocks Spirit&quot; was first ignited. Through decades of
                                    growth, we have maintained that same home-like warmth and artistic curiosity.
                                </p>
                            </div>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex flex-col">
                                    <span className="font-hand text-2xl text-primary">Dr. Alistair Pollock</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Visionary Founder</span>
                                </div>
                                <div className="h-10 w-px bg-sky-200"></div>
                                <span className="material-symbols-outlined text-4xl text-primary/40">signature</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-16 md:py-24 lg:py-32 px-4 lg:px-24 paper-texture-blue relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight font-display mb-4">
                                Our{" "}
                                <span className="relative inline-block font-hand text-primary">
                                    Core Values
                                    <svg className="absolute -bottom-5 md:-bottom-6 left-0 w-full" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "30px" }}>
                                        <path d="M0 24 C 18 -6, 42 54, 66 24 C 90 -6, 114 54, 138 24 C 162 -6, 186 54, 200 24" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.5" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-slate-500 font-body text-lg md:text-xl">The pigments that color our educational philosophy.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white sketch-border p-10 group hover:-translate-y-2 transition-all duration-500 shadow-sm text-center">
                                <div className="w-24 h-24 mx-auto mb-8 bg-sky-50 flex items-center justify-center sketch-border-subtle rotate-3 group-hover:rotate-0 transition-transform">
                                    <span className="material-symbols-outlined text-5xl text-primary wax-stroke">military_tech</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 font-display uppercase tracking-wider">Excellence</h3>
                                <p className="text-slate-600 font-body text-lg leading-relaxed">
                                    Striving for the highest mastery in every stroke of endeavor, from academics to character building.
                                </p>
                                <div className="mt-8 pt-6 border-t border-sky-50">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">The Golden Standard</span>
                                </div>
                            </div>
                            <div className="bg-white sketch-border p-10 group rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 shadow-sm text-center">
                                <div className="w-24 h-24 mx-auto mb-8 bg-sky-50 flex items-center justify-center sketch-border-subtle -rotate-3 group-hover:rotate-0 transition-transform">
                                    <span className="material-symbols-outlined text-5xl text-primary wax-stroke">palette</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 font-display uppercase tracking-wider">Innovation</h3>
                                <p className="text-slate-600 font-body text-lg leading-relaxed">
                                    Embracing the new and the bold, teaching our students to see possibilities where others see limits.
                                </p>
                                <div className="mt-8 pt-6 border-t border-sky-50">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Fresh Perspectives</span>
                                </div>
                            </div>
                            <div className="bg-white sketch-border p-10 group -rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 shadow-sm text-center">
                                <div className="w-24 h-24 mx-auto mb-8 bg-sky-50 flex items-center justify-center sketch-border-subtle rotate-6 group-hover:rotate-0 transition-transform">
                                    <span className="material-symbols-outlined text-5xl text-primary wax-stroke">self_improvement</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 font-display uppercase tracking-wider">Character</h3>
                                <p className="text-slate-600 font-body text-lg leading-relaxed">
                                    Building the moral fiber that sustains success, rooted in empathy, integrity, and shared humanity.
                                </p>
                                <div className="mt-8 pt-6 border-t border-sky-50">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Inner Strength</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-16 md:py-24 lg:py-32 px-4 lg:px-24 paper-texture relative text-center overflow-hidden">
                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="material-symbols-outlined text-primary/10 text-9xl absolute -top-16 left-0 select-none">format_quote</span>
                        <h2 className="text-4xl md:text-5xl font-hand text-slate-800 leading-relaxed mb-12">
                            &quot;We do not just teach students to read and write; we teach them to{" "}
                            <span className="text-primary italic underline decoration-sky-200/50 decoration-wavy">
                                illustrate the world
                            </span>{" "}
                            with their own unique vision.&quot;
                        </h2>
                        <button className="sketch-border bg-primary text-white px-14 py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-all crayon-button">
                            Download Heritage Book
                        </button>
                    </div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44.7,-76.4C58.2,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.6,-16.2,88.4,-0.4C86.2,15.5,77.5,31,67.6,44.2C57.7,57.4,46.7,68.3,33.5,74.7C20.4,81.1,5,83,-11.6,81.7C-28.2,80.4,-45.9,76,-59.4,66.1C-72.9,56.2,-82.1,40.8,-86.6,24.3C-91.1,7.8,-90.8,-9.7,-84.9,-25.1C-79,-40.5,-67.4,-53.8,-53.8,-60.9C-40.2,-68.1,-24.5,-69.1,-9.5,-73.4C5.5,-77.7,20.5,-85.2,44.7,-76.4Z"
                                fill="#0ea5e9"
                                transform="translate(100 100)"
                            ></path>
                        </svg>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
