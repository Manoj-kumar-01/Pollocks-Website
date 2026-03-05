import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Life at Pollocks - ScrapBook",
    description: "Moments of Joy - Our School Scrapbook capturing vibrant campus life.",
};

export default function ScrapBookPage() {
    return (
        <div className="scrapbook-bg text-slate-800 min-h-screen font-display">
            <Navbar currentPage="scrapbook" />

            <div className="h-48 md:h-32"></div>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-16 relative">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-200/50 rounded-full blur-3xl"></div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 relative z-10 w-full overflow-hidden">
                        <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 font-handwritten text-xl -rotate-2 mb-2">
                                Moments of Joy
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-2 mb-4 leading-tight break-words text-slate-900 font-display">
                                Our School <br />
                                <span className="font-hand text-primary italic hand-scribble">Scrapbook</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium">
                                A professional look into our vibrant campus life, captured through the eyes of our community.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-0 mt-6 md:mt-0">
                            <button className="crayon-tab-blue px-6 md:px-10 py-3 md:py-4 rounded-t-2xl text-white font-black text-base md:text-lg shadow-lg -rotate-1 md:translate-y-2 hover:translate-y-0 transition-transform flex items-center gap-2">
                                <span className="material-symbols-outlined">menu_book</span>
                                Academics
                            </button>
                            <button className="crayon-tab-yellow px-6 md:px-10 py-3 md:py-4 rounded-t-2xl text-white font-black text-base md:text-lg shadow-lg rotate-1 md:translate-y-2 hover:translate-y-0 transition-transform flex items-center gap-2">
                                <span className="material-symbols-outlined">palette</span>
                                Culturals
                            </button>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full mt-[-8px] relative z-0"></div>
                </div>

                {/* Learning in Action */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-4xl text-crayon-blue">science</span>
                        <h3 className="text-2xl sm:text-3xl font-black font-handwritten text-slate-700">Learning in Action</h3>
                        <div className="flex-grow h-0.5 bg-slate-200 border-b border-dashed border-slate-400"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-7 relative group">
                            <div className="tape-effect"></div>
                            <div className="polaroid -rotate-1 group-hover:rotate-0">
                                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                    <Image
                                        alt="Modern Science Laboratory"
                                        className="polaroid-inner"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdKYVdF-x6E37HXQpapnNo3gkYb-ggbzky-gufy0iyND6JkpC7Gts62Iik5OyuuFjC3o4lAcyrKId9V7_9jNtTXnn7naMNA1pj47Z_eYZS0dAqYeuDCEV6nYcZS7h21wi8JB0oVUwelqbtBpG-0GRPi75r8-Z7tYrGkRNZdgr3A00WQYD-NZDcYtNPKvy7UlveL-7BSZCNHdDEiUHiNlvx-Jt5qHhtcpF1_SDuyuzW8fEmIqiTS2NGEOZUAtjeNmn8EJTUU0HNRZl5"
                                        width={700}
                                        height={525}
                                        unoptimized
                                    />
                                </div>
                                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                                    <p className="font-handwritten text-xl md:text-2xl text-slate-700 break-words">Future Scientists at Work! ⚗️</p>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Physics Wing / 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 flex flex-col gap-8">
                            <div className="relative group">
                                <div className="polaroid rotate-2 group-hover:rotate-0">
                                    <div className="aspect-video overflow-hidden rounded-sm">
                                        <Image
                                            alt="Digital Library"
                                            className="polaroid-inner"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNHXXqxngAEwx0FD3ty3PiarfWN1skc5uoiZn9O1rUeYES3WJJPBWaznHVYDQmTIAx5JoMxpYcIHu09T0GIIbaxOOzNxtzIHHahnPkz2IQ0_0ILPb00wsuH443x_x-GhOgb9jB3D9MkihbA3XETZ6adtW2w91UVeKCzqFezhpsBos33okNY4GfH6bp9inHGQqULpr-EKvaWD0nv2XbuNKBe74mHnRCU0FV6Df2wC6Qk4JqQApZQCg_nwqiOSkGLXHOHJETD4bIfuv"
                                            width={500}
                                            height={280}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-note text-xl text-blue-600 leading-none">Quiet hours in our Digital Hub...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="polaroid -rotate-2 group-hover:rotate-0">
                                    <div className="aspect-video overflow-hidden rounded-sm">
                                        <Image
                                            alt="Robotics Club"
                                            className="polaroid-inner"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR38OKAvShxO16d0bVWKNhiMS8Aw1qTcHxsvwxcShTID8bTKRwMLr-5pKqyJ5xL3gMzJgDjspkkKPCHtBz9tKTmqJRRLqpTk36XzqV2cknla7EKFFSME_6Ao4ax33r3K7dZJ6gJDgKHru8Vxzfik1Rs3AsVpaGGR5OFICQsKQSuXcT4UCb5K8Xhg0_q2GpknPBZRdBu5_NHmTrNU66sjyyzqGJ8tBtcQjVD6BV0gTH5UmP08Ra8pEb5hx8EL2mZzej6X_qiWwoUNM9"
                                            width={500}
                                            height={280}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <p className="font-handwritten text-xl text-red-500">Building Tomorrow&apos;s AI Today! 🤖</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Festival of Colors & Arts */}
                <div className="mt-32">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-4xl text-yellow-400">celebration</span>
                            <h3 className="text-3xl font-black font-handwritten text-slate-700">Festival of Colors &amp; Arts</h3>
                        </div>
                        <button className="font-bold text-primary flex items-center gap-2 group">
                            Full Gallery{" "}
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { color: "red", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaEugE0MasnGY6PllRTKWjjM2-qbXfub05-J_AYCuHgfO3VkmGEs3fBNx-YPoxrKej-k7gU34zx3_cSlbj_neDeLnAxM7xAi8SjuWmYYgeJLIiERV-RahPoH1jGLXoF31xcw0-eBXpwpVZoA6UZuxaQo7JfmtsIvoucwB95f9FIpVP_w51Tv_xJe7l-MJa0Nct2owFjwI053b59ZatmTiPzW7M_UJC_q_-Fu6EOjJxr4TjXJ4Utm-vF_TpSkV8RapNlPlvyrsurfWI", label: "Melody Fest 2024 - Soulful!", rotate: "rotate-1 hover:-rotate-1" },
                            { color: "blue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq0fABX25tcRw3fv-FTjIsqwTFmNwz0vF-luoRDuilNagj3oL0nXBh5TU0PWxfqFNGpp7dPjoNnsqfUH4WTABmXdkdzCeaTKFbsejIDLUeRGufVzqvWsbM9yHHe92JD4EHRc6mK_w-5_iAH0uW1a1o94yY2GmtMvSaddaWuV8PuF72wNQGJ7z4fDAadBa0hpxd_z0OJZQcbfmTGFdYOTBdO1fK4ZAkG9a2WUWxfKIq55UNX3zi9vrIRar1gqS67SvjuUY9Y8kJIEYF", label: "Our Master Artists 🎨", rotate: "-rotate-2 hover:rotate-1" },
                            { color: "yellow", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlsr52M5kG_qzVruFWdBPe-z3WxbDJSePoFMefl0DgU9FDm9ZLSEjjeq-AWaDzdb6Z5ZsBsaaf1G-xTKC22gRJDRWVm6LuFHzvafaqgjZD-kbKwqVyuwW2VCctvYTQCH7quWF8Non74jEm5TM62v-mrqzLEdejq1bzz4Du2Ij8SW80gL1fj1fcKlXUf1ql6VHkiKQPduRI14UCYe2Z6k72znAM_DTUuvDHFOPWUrlvYnUsTeNPQkG1AFsfIfVMYUx3ppwI7WVzWRk", label: "Drama Night Magic ✨", rotate: "rotate-3 hover:-rotate-1" },
                        ].map((item) => (
                            <div key={item.label} className="relative pt-6">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                                    <div className={`w-12 h-12 bg-${item.color}-400/20 rounded-full flex items-center justify-center border-2 border-${item.color}-400/30`}>
                                        <span className={`material-symbols-outlined text-${item.color}-500`}>push_pin</span>
                                    </div>
                                </div>
                                <div className={`polaroid ${item.rotate} transition-all duration-500`}>
                                    <div className="aspect-square overflow-hidden mb-4">
                                        <Image
                                            alt={item.label}
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                                            src={item.img}
                                            width={400}
                                            height={400}
                                            unoptimized
                                        />
                                    </div>
                                    <p className="font-handwritten text-xl text-slate-700">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="relative bg-gradient-to-br from-sky-400 to-blue-600 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
                                Want to see our<br />
                                <span className="text-yellow-300">world class</span> campus?
                            </h3>
                            <p className="text-white/90 text-lg mb-8 font-medium italic font-note text-2xl">
                                &quot;The best way to experience Pollocks is to visit us in person. Our doors are always open for parents!&quot;
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center gap-2 shadow-xl">
                                    <span className="material-symbols-outlined">calendar_today</span> Book a Visit
                                </button>
                                <button className="bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all">
                                    View Prospectus
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/20 rotate-3">
                                        <span className="text-4xl font-black text-white block">25+</span>
                                        <span className="text-white/80 font-handwritten text-xl">Learning Labs</span>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/20 -rotate-2 translate-x-4">
                                        <span className="text-4xl font-black text-white block">100%</span>
                                        <span className="text-white/80 font-handwritten text-xl">Digital Access</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-yellow-400 p-8 rounded-3xl shadow-xl rotate-6">
                                        <span className="text-blue-900 font-black text-5xl block">#1</span>
                                        <span className="text-blue-900/80 font-bold uppercase text-xs tracking-widest">Global Rank</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
