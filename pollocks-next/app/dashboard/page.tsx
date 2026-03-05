import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Pollocks Home: Crayon Professional Edition",
    description: "Defining the Future of Learning - Pollocks International School",
};

export default function DashboardPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar currentPage="dashboard" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[100svh] md:min-h-[850px] flex items-center justify-center px-4 overflow-hidden pb-16 md:pb-0">
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            className="w-full h-full object-cover object-center scale-105"
                            loop
                            muted
                            playsInline
                        >
                            <source
                                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-paper-white/70 to-paper-white"></div>
                    </div>
                    <div className="relative z-10 max-w-6xl w-full pt-[240px] md:pt-44">
                        <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 lg:p-24 sketch-border border-[3px] border-primary/30 text-center relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 sketch-border-subtle font-hand text-lg rotate-1 shadow-md">
                                Established 1985
                            </div>
                            <span className="inline-block text-primary-dark text-sm font-display font-bold tracking-[0.3em] uppercase mt-6 md:mt-0 mb-8">
                                Nurturing Global Minds
                            </span>
                            <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl lg:text-8xl font-black leading-[1.05] mb-10 font-display">
                                Defining the <br />
                                <span className="font-hand text-primary lowercase text-5xl md:text-7xl lg:text-9xl block mt-2 hand-scribble">
                                    Future of Learning
                                </span>
                            </h1>
                            <p className="text-slate-700 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto font-body">
                                A premier academic institution where traditional values meet modern
                                innovation, crafting the leaders of tomorrow with a creative spirit.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                                <button className="w-full md:w-auto flex items-center justify-center sketch-border bg-primary text-white h-16 px-14 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-all crayon-button">
                                    Admissions Open 2026
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                            Discover More
                        </span>
                        <span className="material-symbols-outlined text-primary text-4xl animate-bounce">
                            expand_more
                        </span>
                    </div>
                </section>

                {/* Principal Section */}
                <section className="py-16 md:py-24 lg:py-32 px-4 lg:px-24 paper-texture relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="aspect-[4/5] sketch-border overflow-hidden relative group p-3 bg-white shadow-xl rotate-1">
                                    <Image
                                        alt="Pollocks School Campus"
                                        className="w-full h-full object-cover sketch-border-subtle grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                                        src="/Pollocks.jpeg"
                                        width={600}
                                        height={750}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-sky-100 rounded-full flex items-center justify-center sketch-border-subtle -rotate-12 border-2 border-primary/20">
                                        <span className="font-hand text-primary text-center leading-tight">
                                            Join
                                            Our<br />Community
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-10 order-1 lg:order-2">
                                <div>
                                    <span className="text-primary font-hand text-3xl mb-3 block">
                                        From the Desk of the Principal
                                    </span>
                                    <h2 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display leading-tight">
                                        Cultivating <br />
                                        <span className="hand-scribble italic">
                                            Curiosity &amp; Character
                                        </span>
                                    </h2>
                                </div>
                                <div className="space-y-6 text-slate-700 text-2xl leading-relaxed font-body italic border-l-8 border-primary/10 pl-10 relative">
                                    <p>
                                        &quot;Our philosophy is simple: we believe every child is a unique
                                        masterpiece in progress. At Pollocks, we provide the canvas and the
                                        tools for them to paint their own brilliant future.&quot;
                                    </p>
                                    <span className="material-symbols-outlined absolute -top-8 -left-6 text-primary/10 text-7xl select-none">
                                        format_quote
                                    </span>
                                </div>
                                <div className="pt-6">
                                    <button className="group flex items-center gap-6 text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-primary-dark transition-all">
                                        Full Leadership Message
                                        <div className="w-12 h-12 flex items-center justify-center sketch-border-subtle bg-sky-50 group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Highlights */}
                <section className="py-16 md:py-24 lg:py-32 px-4 lg:px-24 paper-texture-blue relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
                            <div>
                                <h2 className="text-slate-900 text-5xl font-black tracking-tight font-display">
                                    Campus{" "}
                                    <span className="font-hand text-primary italic underline decoration-primary/20 decoration-wavy">
                                        Highlights
                                    </span>
                                </h2>
                                <p className="text-slate-500 mt-4 font-body text-xl max-w-md">
                                    Staying connected with the vibrant life and achievements of our students.
                                </p>
                            </div>
                            <a
                                className="group text-primary font-black flex items-center gap-3 transition-all uppercase text-[11px] tracking-[0.3em] sketch-border-subtle px-6 py-3 bg-white"
                                href="#"
                            >
                                Explore All News
                                <span className="material-symbols-outlined text-lg wax-stroke">
                                    history_edu
                                </span>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Card 1 */}
                            <div className="bg-white sketch-border p-3 group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                                <div className="relative h-64 overflow-hidden sketch-border-subtle mb-6">
                                    <Image
                                        alt="Academic Excellence"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGBIWZVh_oRWzLCWZevZM6UlZ8vgSfiHFMwm-vf0dinWw-v-7yQeAs4tW0LH6P9QBOaHpJNVOkL33FuFk_2nSWs_U_B1kX5X3c0XxzwMjBYKtiassHpJks6x7orc9Q-3HJGT4phIPKpKrtY-4Xyut6JcJeb8aeYcZ2AF92PwtLazCAASAVR8t83wNMIAO-mq6dIGIH3LCJeZi0uFnN6vzJilskDq0oTaKt36c5L_Vkri44RxAi0vnklNKvjqsVoouIe2GjH-8miNFw"
                                        width={400}
                                        height={256}
                                        unoptimized
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black px-4 py-1.5 sketch-border-subtle uppercase tracking-widest shadow-md">
                                        Academic
                                    </div>
                                </div>
                                <div className="px-4 pb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Oct 12, 2024</span>
                                    </div>
                                    <h3 className="text-slate-900 text-2xl font-black mb-4 group-hover:text-primary transition-colors font-display leading-tight">
                                        Science Olympiad Gold Medalists
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-body">
                                        Our senior innovators have brought home the gold in the Regional Science Exhibition, showcasing sustainable energy solutions.
                                    </p>
                                    <a className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 group/link" href="#">
                                        Read Full Story{" "}
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">edit_square</span>
                                    </a>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white sketch-border p-3 group -rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">
                                <div className="relative h-64 overflow-hidden sketch-border-subtle mb-6">
                                    <Image
                                        alt="Arts Fest"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxVeMMcVpJSltSToEuAOS66B5nUxan-U1jJxnDfMkMfWfJqr8d-wKQIFCEaK1rCbihJmd2kgxdzeZpmR8A8if98v5WwySTyqdpmdIgWCWXGfnrjUKQLUFncbsScRvt6sNLzL_4ipE06nVPy4FbfGFABZvAisEA3V3UCsge29Mc9NsfJPXO1jj5I1wp8KvSQxJjR8ZAGPpPkDweX2Lfo6FzVyY_UWrhF1TVE6hL1mc37nPBhL6MRYaropw0iG5QEXxH3p-UBqJ3A4Eo"
                                        width={400}
                                        height={256}
                                        unoptimized
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black px-4 py-1.5 sketch-border-subtle uppercase tracking-widest shadow-md">
                                        Arts &amp; Culture
                                    </div>
                                </div>
                                <div className="px-4 pb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Oct 08, 2024</span>
                                    </div>
                                    <h3 className="text-slate-900 text-2xl font-black mb-4 group-hover:text-primary transition-colors font-display leading-tight">
                                        Kaleidoscope 2024: Annual Arts Fest
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-body">
                                        A vibrant display of creativity and talent as our students prepare for the largest inter-school cultural gathering.
                                    </p>
                                    <a className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 group/link" href="#">
                                        Read Full Story{" "}
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">edit_square</span>
                                    </a>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white sketch-border p-3 group rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">
                                <div className="relative h-64 overflow-hidden sketch-border-subtle mb-6">
                                    <Image
                                        alt="Green Campus"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGGgLrdqZ9yXh1pq1qkSM-CVDo_WjCoynov_AfbcTFK4ZE5CU0A6_SfwIR9Pwd_Bzn4dMJs1XF6DRvQNOPHpsTT-Je_yfDHKFMv3Vzy6PnJU4QRr6IHPWZKZVF2I3a_34PI7Tde6mw3B72X-RZ834gjGKdtCTHImgU1bQRmhscZMBVUex_L-8e-M497txMJ_VjBL3rx5HjKv_Piv6zQJ5JQEPH03GQvhSELaEkMO4yIYXBZ8aIdiCIAy6JVKqScHOjLblbaJ2ciGtQ"
                                        width={400}
                                        height={256}
                                        unoptimized
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black px-4 py-1.5 sketch-border-subtle uppercase tracking-widest shadow-md">
                                        Community
                                    </div>
                                </div>
                                <div className="px-4 pb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Sep 30, 2024</span>
                                    </div>
                                    <h3 className="text-slate-900 text-2xl font-black mb-4 group-hover:text-primary transition-colors font-display leading-tight">
                                        Zero-Plastic Initiative Update
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-body">
                                        Our commitment to the environment grows stronger as we phase out single-use plastics from the entire campus.
                                    </p>
                                    <a className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 group/link" href="#">
                                        Read Full Story{" "}
                                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">edit_square</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calendar Events */}
                <section className="py-16 md:py-24 lg:py-32 px-4 lg:px-24 paper-texture relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <div className="sticky top-48">
                                    <h2 className="text-slate-900 text-5xl font-black mb-8 font-display leading-tight">
                                        Mark Your
                                        <br />
                                        <span className="font-hand text-primary italic">Calendars</span>
                                    </h2>
                                    <p className="text-slate-600 text-xl mb-12 font-body">
                                        Don&apos;t miss out on important dates, interactive workshops, and
                                        sporting events that define our school year.
                                    </p>
                                    <button className="w-full py-5 sketch-border text-primary font-black uppercase text-[11px] tracking-[0.2em] hover:bg-sky-50 transition-all crayon-button bg-white flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined text-lg">event_note</span>
                                        View Full Academic Year
                                    </button>
                                    <div className="mt-12 p-6 bg-sky-50 sketch-border-subtle rotate-1">
                                        <p className="font-hand text-xl text-primary mb-2">Did you know?</p>
                                        <p className="text-slate-600 text-sm font-body italic">
                                            Parents can sync the school calendar directly to their mobile devices
                                            via the parent portal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-8 space-y-10">
                                <div className="bg-white p-8 sketch-border-subtle flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50/50 -translate-y-1/2 translate-x-1/2 rotate-45 rounded-full"></div>
                                    <div className="flex flex-col items-center justify-center min-w-[120px] h-[120px] sketch-border bg-primary text-white shadow-lg transform group-hover:rotate-3 transition-transform">
                                        <span className="text-5xl font-hand leading-none">24</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                                            October
                                        </span>
                                    </div>
                                    <div className="flex-1 text-center md:text-left relative z-10">
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
                                            <span className="bg-sky-100 text-primary text-[9px] font-black px-3 py-1 sketch-border-subtle uppercase tracking-widest">
                                                Community
                                            </span>
                                        </div>
                                        <h4 className="text-slate-900 text-3xl font-black mb-4 font-display group-hover:text-primary transition-colors leading-tight">
                                            Annual Parent-Teacher Conclave
                                        </h4>
                                        <p className="text-slate-500 text-base flex flex-wrap items-center justify-center md:justify-start gap-5 font-body">
                                            <span className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                                09:00 AM - 04:00 PM
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                                Main Auditorium
                                            </span>
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary/30 text-3xl group-hover:text-primary transition-all">
                                        bookmark_add
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
