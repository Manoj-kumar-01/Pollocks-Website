import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Admissions - Pollocks School",
    description: "The Path to Excellence Starts Here - Apply to Pollocks International School.",
};

export default function AdmissionsPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar currentPage="admissions" />

            <main className="flex-1 pt-32">
                {/* Hero */}
                <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <span className="font-hand text-2xl text-primary mb-4 block italic">Join Our Legacy</span>
                        <h1 className="text-slate-900 text-4xl md:text-6xl lg:text-7xl font-black mb-6 font-display leading-[1.1]">
                            The Path to{" "}
                            <span className="relative inline-block text-primary italic font-hand">
                                Excellence
                                <svg className="absolute -bottom-5 md:-bottom-6 left-0 w-full" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "30px" }}>
                                    <path d="M0 24 C 18 -6, 42 54, 66 24 C 90 -6, 114 54, 138 24 C 162 -6, 186 54, 200 24" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.5" />
                                </svg>
                            </span>{" "}
                            Starts Here
                        </h1>
                        <p className="text-slate-600 text-xl font-body max-w-2xl mx-auto mb-10">
                            We invite you to discover a learning environment where your child&apos;s unique talents are celebrated and nurtured by world-class educators.
                        </p>
                        <button className="flex items-center gap-3 mx-auto px-8 py-4 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs crayon-button wax-glow">
                            <span className="material-symbols-outlined">download</span>
                            Download Prospectus 2026
                        </button>
                    </div>
                </section>

                {/* Admissions Timeline */}
                <section className="py-24 px-4 lg:px-24 paper-texture-blue relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black text-slate-900 font-display">
                                Admissions <span className="font-hand text-primary">Timeline</span>
                            </h2>
                            <p className="text-slate-500 font-body text-xl mt-2">A guided journey through our application process</p>
                        </div>
                        <div className="relative py-12">
                            <div className="chalk-path absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                                {[
                                    { num: "01", title: "Online Inquiry", desc: "Begin by filling out our digital expression of interest form.", highlight: false },
                                    { num: "02", title: "Campus Visit", desc: "Experience our vibrant atmosphere firsthand with a guided tour.", highlight: false },
                                    { num: "03", title: "Assessment", desc: "Student interactions designed to understand their potential.", highlight: true },
                                    { num: "04", title: "Dialogue", desc: "A meaningful conversation between parents and the leadership.", highlight: false },
                                    { num: "05", title: "Welcome", desc: "Final confirmation and joining the Pollocks family legacy.", highlight: false },
                                ].map((step) => (
                                    <div key={step.num} className="flex flex-col items-center text-center">
                                        {step.highlight ? (
                                            <div className="w-20 h-20 bg-primary flex items-center justify-center sketch-border text-white shadow-2xl scale-110 mb-6 relative">
                                                <span className="font-black text-xl">{step.num}</span>
                                                <div className="absolute -top-2 -right-2 bg-yellow-400 w-4 h-4 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                                            </div>
                                        ) : (
                                            <div className="w-16 h-16 bg-white flex items-center justify-center sketch-border-subtle rounded-full mb-6 shadow-xl relative group">
                                                <span className="text-primary font-black text-lg">{step.num}</span>
                                                <div className="absolute inset-0 bg-sky-400/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                        )}
                                        <h3 className={`font-display font-bold ${step.highlight ? "text-primary" : "text-slate-900"} text-sm uppercase tracking-widest mb-2`}>
                                            {step.title}
                                        </h3>
                                        <p className={`${step.highlight ? "text-slate-700 font-bold" : "text-slate-500"} text-[13px] font-body px-4`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inquiry Form */}
                <section className="py-24 px-4 lg:px-24 paper-texture">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-12 sketch-border shadow-2xl relative">
                            <div className="absolute -top-6 left-12 bg-primary text-white px-8 py-3 sketch-border-subtle font-display font-black text-xs uppercase tracking-widest">
                                Admissions Inquiry Form
                            </div>
                            <div className="flex items-center justify-between mb-16 border-b border-sky-100 pb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-900">Student Info</span>
                                </div>
                                <div className="h-px w-12 bg-sky-200"></div>
                                <div className="flex items-center gap-4 opacity-30">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold">2</div>
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Parent Details</span>
                                </div>
                                <div className="h-px w-12 bg-sky-200"></div>
                                <div className="flex items-center gap-4 opacity-30">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold">3</div>
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Submit</span>
                                </div>
                            </div>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Student&apos;s Full Name</label>
                                        <input className="w-full bg-transparent crayon-input-border px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:outline-none font-body text-xl placeholder-slate-300" placeholder="e.g. Alexander Pollock" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Date of Birth</label>
                                        <input className="w-full bg-transparent crayon-input-border px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:outline-none font-body text-xl" type="date" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Applying for Grade</label>
                                        <select className="w-full bg-transparent crayon-input-border px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:outline-none font-body text-xl appearance-none">
                                            <option>Select Grade</option>
                                            <option>Nursery / Early Years</option>
                                            <option>Grade 1 - 5 (Primary)</option>
                                            <option>Grade 6 - 8 (Middle)</option>
                                            <option>Grade 9 - 12 (Secondary)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Previous School</label>
                                        <input className="w-full bg-transparent crayon-input-border px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:outline-none font-body text-xl placeholder-slate-300" placeholder="Current School Name" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Special Interests or Talents</label>
                                    <textarea className="w-full bg-transparent crayon-input-border px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:outline-none font-body text-xl placeholder-slate-300" placeholder="Tell us what makes your child unique..." rows={4}></textarea>
                                </div>
                                <div className="pt-8 flex justify-end">
                                    <button className="group flex items-center gap-6 text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-primary-dark transition-all" type="button">
                                        Next Step: Parent Details
                                        <div className="w-14 h-14 flex items-center justify-center sketch-border-subtle bg-sky-50 group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-4 lg:px-24 paper-texture-blue">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-20 items-start">
                            <div className="lg:w-1/3 sticky top-48">
                                <h2 className="text-5xl font-black text-slate-900 font-display leading-tight mb-6">
                                    Common<br /><span className="font-hand text-primary italic">Questions</span>
                                </h2>
                                <p className="text-slate-600 font-body text-xl mb-10">
                                    Everything you need to know about joining the Pollocks community. Can&apos;t find an answer? Our admissions team is just a call away.
                                </p>
                                <div className="p-6 glass-card bg-primary/5 border-primary/20 rotate-1">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <span className="material-symbols-outlined">contact_support</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest">Live Support</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-700">Admission Office: +1 (555) 012-3456</p>
                                </div>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                                {[
                                    { q: "What is the student-to-teacher ratio?", a: "We maintain a strict 12:1 ratio in Early Years and 18:1 in Secondary levels to ensure personalized attention for every student.", rotate: "" },
                                    { q: "Are scholarships available for new students?", a: "Yes, we offer Merit Scholarships and Talent-Based Awards for students entering Grade 6 and above. Applications close Nov 15th.", rotate: "-rotate-1" },
                                    { q: "Does the school provide transport?", a: "We operate a premium fleet of air-conditioned buses covering all major residential districts with real-time GPS tracking for parents.", rotate: "" },
                                    { q: "How are extracurriculars integrated?", a: "Arts, sports, and community service are core pillars. Two hours every afternoon are dedicated to elective clubs and professional coaching.", rotate: "rotate-1" },
                                ].map((faq) => (
                                    <div key={faq.q} className={`glass-card p-8 group hover:bg-white/60 transition-all cursor-pointer ${faq.rotate}`}>
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-bold text-slate-900 font-display">{faq.q}</h3>
                                            <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">expand_more</span>
                                        </div>
                                        <p className="text-slate-600 font-body text-lg">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
