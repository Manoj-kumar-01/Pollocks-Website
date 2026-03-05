import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Curriculum - Pollocks School",
    description: "A Curriculum for Brilliant Minds - Academic excellence and extra-curricular enrichment.",
};

export default function CurriculumPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar currentPage="curriculum" />

            <main className="flex-1 pt-52 md:pt-40">
                {/* Hero */}
                <section className="px-4 md:px-8 lg:px-24 mb-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="text-primary font-hand text-3xl mb-4 block">Academic Life</span>
                        <h1 className="text-slate-900 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight font-display mb-8">
                            A Curriculum for <br />
                            <span className="hand-scribble italic text-primary">Brilliant Minds</span>
                        </h1>
                        <p className="text-slate-600 text-xl font-body max-w-3xl mx-auto leading-relaxed">
                            At Pollocks, we blend rigorous academic standards with creative expression. Our curriculum is
                            designed to spark curiosity, foster critical thinking, and build a foundation for lifelong learning.
                        </p>
                    </div>
                </section>

                {/* Core Subjects */}
                <section className="py-24 px-4 md:px-8 lg:px-24 paper-texture-blue relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-slate-900 text-4xl font-black font-display uppercase tracking-tight">Core Subjects</h2>
                            <div className="flex-1 pencil-divider"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: "biotech", title: "Science & Inquiry", desc: "Exploring the wonders of the physical and biological world through hands-on laboratory discovery.", bgIcon: "magnification_small" },
                                { icon: "calculate", title: "Mathematics", desc: "Building logical foundations and problem-solving skills that transcend the classroom.", bgIcon: "functions", rotate: "-rotate-6" },
                                { icon: "auto_stories", title: "Humanities", desc: "Understanding our global heritage and the stories that shape our modern civilization.", bgIcon: "public" },
                                { icon: "translate", title: "Linguistics", desc: "Mastering the art of communication across multiple languages and cultures.", bgIcon: "pen_size_2", rotate: "-rotate-6" },
                            ].map((subject) => (
                                <div key={subject.title} className="glossy-card p-8 group hover:-translate-y-2 transition-all duration-500">
                                    <div className={`w-16 h-16 bg-white sketch-border-subtle flex items-center justify-center mb-6 text-primary group-hover:${subject.rotate || "rotate-6"} transition-transform`}>
                                        <span className="material-symbols-outlined text-4xl">{subject.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 font-display">{subject.title}</h3>
                                    <p className="text-slate-600 font-body text-lg leading-snug mb-6">{subject.desc}</p>
                                    <div className="w-24 h-24 absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-[100px]">{subject.bgIcon}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Extra-Curricular */}
                <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-24 paper-texture relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <span className="text-primary font-hand text-3xl">Beyond the Books</span>
                                <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight font-display leading-tight">
                                    Extra-Curricular <br />Enrichment
                                </h2>
                                <p className="text-slate-600 text-xl font-body leading-relaxed">
                                    Pollocks believes in the holistic development of every child. Our enrichment programs
                                    range from elite competitive sports to sophisticated performing arts, all mentored by
                                    professionals in their respective fields.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { icon: "palette", title: "Fine Arts & Design", desc: "Professional studio environments for painting, digital arts, and sculpture." },
                                        { icon: "sports_tennis", title: "Elite Athletics", desc: "State-of-the-art facilities for tennis, swimming, and team sports." },
                                        { icon: "theater_comedy", title: "Performing Arts", desc: "World-class theater productions and conservatory-grade music instruction." },
                                    ].map((item) => (
                                        <div key={item.title} className="flex items-start gap-6 group">
                                            <div className="p-3 sketch-border-subtle bg-sky-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-display font-bold text-lg text-slate-900">{item.title}</h4>
                                                <p className="font-body text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="sketch-border overflow-hidden aspect-[3/4] p-2 bg-white rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <Image alt="Art Workshop" className="w-full h-full object-cover sketch-border-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0eNe6D7YccaYQ9ZumypGMpDKlw9tVjqjN7a2YLpzD2Ah8Wm1hek96bJaEr2PwnRiKVExnvRPPvJVVjJJ0Oe72psCiNwjQq6BKd1TEUdLKCqTrbHtgMJ_kFRM-nF6EUVpe8zzWtc_68oE5Rh4air_qEIAGbLLSCC2HHcuWyVKa1vQt4y8k502VNAcQeJBFGR7NOJ46qfv2BuUILQ2YA-Pis2oPxVoMCCJVvyTTOhIQv2pPNTu1nfdIo3CSLdRkmp4-XBkITS3GzO8U" width={300} height={400} unoptimized />
                                    </div>
                                    <div className="sketch-border overflow-hidden aspect-square p-2 bg-white -rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <Image alt="Tennis Academy" className="w-full h-full object-cover sketch-border-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGBIWZVh_oRWzLCWZevZM6UlZ8vgSfiHFMwm-vf0dinWw-v-7yQeAs4tW0LH6P9QBOaHpJNVOkL33FuFk_2nSWs_U_B1kX5X3c0XxzwMjBYKtiassHpJks6x7orc9Q-3HJGT4phIPKpKrtY-4Xyut6JcJeb8aeYcZ2AF92PwtLazCAASAVR8t83wNMIAO-mq6dIGIH3LCJeZi0uFnN6vzJilskDq0oTaKt36c5L_Vkri44RxAi0vnklNKvjqsVoouIe2GjH-8miNFw" width={300} height={300} unoptimized />
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="sketch-border overflow-hidden aspect-square p-2 bg-white -rotate-1 hover:rotate-0 transition-transform duration-500">
                                        <Image alt="Music Hall" className="w-full h-full object-cover sketch-border-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxVeMMcVpJSltSToEuAOS66B5nUxan-U1jJxnDfMkMfWfJqr8d-wKQIFCEaK1rCbihJmd2kgxdzeZpmR8A8if98v5WwySTyqdpmdIgWCWXGfnrjUKQLUFncbsScRvt6sNLzL_4ipE06nVPy4FbfGFABZvAisEA3V3UCsge29Mc9NsfJPXO1jj5I1wp8KvSQxJjR8ZAGPpPkDweX2Lfo6FzVyY_UWrhF1TVE6hL1mc37nPBhL6MRYaropw0iG5QEXxH3p-UBqJ3A4Eo" width={300} height={300} unoptimized />
                                    </div>
                                    <div className="sketch-border overflow-hidden aspect-[3/4] p-2 bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <Image alt="STEM Club" className="w-full h-full object-cover sketch-border-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGGgLrdqZ9yXh1pq1qkSM-CVDo_WjCoynov_AfbcTFK4ZE5CU0A6_SfwIR9Pwd_Bzn4dMJs1XF6DRvQNOPHpsTT-Je_yfDHKFMv3Vzy6PnJU4QRr6IHPWZKZVF2I3a_34PI7Tde6mw3B72X-RZ834gjGKdtCTHImgU1bQRmhscZMBVUex_L-8e-M497txMJ_VjBL3rx5HjKv_Piv6zQJ5JQEPH03GQvhSELaEkMO4yIYXBZ8aIdiCIAy6JVKqScHOjLblbaJ2ciGtQ" width={300} height={400} unoptimized />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learning Journey */}
                <section className="py-24 px-4 md:px-8 lg:px-24 paper-texture-blue">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black font-display text-slate-900 mb-4">The Learning Journey</h2>
                            <div className="w-40 h-1 bg-primary/20 mx-auto pencil-divider"></div>
                        </div>
                        <div className="space-y-16">
                            {[
                                { stage: "Early Years", ages: "Ages 3 - 6", desc: "Focus on sensory exploration, social-emotional development, and the joy of discovery through play-based learning and literacy." },
                                { stage: "Primary School", ages: "Ages 7 - 11", desc: "Developing core academic competencies in STEM and Humanities while fostering independent research skills and creative writing." },
                                { stage: "Secondary Level", ages: "Ages 12 - 18", desc: "Rigorous college-preparatory coursework, specialized electives, and leadership development preparing students for the global stage." },
                            ].map((level) => (
                                <div key={level.stage} className="flex flex-col md:flex-row gap-12 items-center">
                                    <div className="w-full md:w-1/3 text-center md:text-right">
                                        <span className="font-hand text-primary text-4xl block mb-2">{level.stage}</span>
                                        <h4 className="font-display font-black text-xl text-slate-800 uppercase tracking-widest">{level.ages}</h4>
                                    </div>
                                    <div className="hidden md:block w-px h-24 bg-sky-200 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary sketch-border-subtle"></div>
                                    </div>
                                    <div className="w-full md:w-2/3 bg-white/60 p-8 sketch-border-subtle hover:bg-white transition-colors">
                                        <p className="font-body text-xl text-slate-600">{level.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
