"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const downloadHref = "https://expo.dev/artifacts/eas/25TFWnVu3ioK7ogiazGtw5.apk";

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("nidhi-setu-theme") : null;
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nidhi-setu-theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const isDark = theme === "dark";

  const appPreviews = [
    { src: "/app-preview-1.png", alt: "Dashboard preview" },
    { src: "/app-preview-2.png", alt: "Welcome screen" },
    { src: "/app-preview-3.png", alt: "Officer profile" },
    { src: "/app-preview-4.png", alt: "User profile" },
    { src: "/app-preview-5.png", alt: "Home shortcuts" },
  ];

  return (
    <div className={`min-h-screen font-sans ${isDark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      {/* ----------- HEADER ----------- */}
      <header
        className={`w-full sticky top-0 z-10 backdrop-blur border-b ${
          isDark ? "bg-slate-900/90 border-slate-700" : "bg-white/90 border-slate-200"
        }`}
      >
        <div className="py-4 px-6 flex justify-between items-center gap-4 flex-wrap max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Image src="/logo1-removebg-preview.png" alt="Nidhi Setu logo" width={90} height={70} priority />
            <h1 className="text-xl font-semibold">NIDHISETU APP</h1>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={downloadHref}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-blue-700 transition"
            >
              Download App
            </a>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`h-10 w-10 flex items-center justify-center rounded-full border transition ${
                isDark
                  ? "border-slate-600 text-slate-100 hover:border-blue-400 hover:text-blue-200"
                  : "border-slate-300 text-slate-800 hover:border-blue-500 hover:text-blue-700"
              }`}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* ----------- HERO SECTION ----------- */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-6 text-center sm:text-left">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              isDark ? "bg-blue-900/40 text-blue-200" : "bg-blue-50 text-blue-700"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Smarter loan oversight
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Track, verify, and
            <span className="text-blue-500"> utilize loans confidently.</span>
          </h2>

          <p className={`text-lg max-w-2xl ${isDark ? "text-slate-200" : "text-slate-600"}`}>
            Get clarity on sanctioned vs. utilized amounts, keep documents organized, and stay ahead with alerts for deadlines and reviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <a
              href={downloadHref}
              className="bg-blue-600 text-white px-7 py-3 rounded-full text-base font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
            >
              Download App
            </a>
            <a
              href="#preview"
              className={`px-7 py-3 rounded-full text-base font-semibold border transition ${
                isDark
                  ? "border-slate-600 text-slate-100 hover:border-blue-400 hover:text-blue-200"
                  : "border-slate-300 text-slate-800 hover:border-blue-400 hover:text-blue-700"
              }`}
            >
              View Preview
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl bg-linear-to-br from-teal-500 via-blue-600 to-indigo-600 p-px shadow-2xl">
            <div className={`rounded-[28px] ${isDark ? "bg-slate-900" : "bg-white"} p-4`}>
              <div
                className={`rounded-2xl p-6 shadow-inner ${
                  isDark ? "bg-slate-800" : "bg-linear-to-b from-blue-50 to-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    AI
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-500"}`}>Loan Monitoring</p>
                    <p className="text-xl font-semibold">Field Officer • District</p>
                    <p className={`text-sm font-semibold mt-1 ${isDark ? "text-blue-300" : "text-blue-700"}`}>
                      Signals refreshed 5m ago
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    { label: "High Risk", value: "04", color: "text-rose-600", bg: "bg-rose-50", darkBg: "bg-rose-950/40", border: "border-rose-100" },
                    { label: "Pending Review", value: "00", color: "text-amber-600", bg: "bg-amber-50", darkBg: "bg-amber-900/40", border: "border-amber-100" },
                    { label: "Deadline Crossed", value: "02", color: "text-sky-700", bg: "bg-sky-50", darkBg: "bg-sky-900/40", border: "border-sky-100" },
                    { label: "Utilisation", value: "78%", color: "text-emerald-600", bg: "bg-emerald-50", darkBg: "bg-emerald-900/40", border: "border-emerald-100" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl border p-4 shadow-sm ${
                        isDark ? `${item.darkBg} border-slate-700` : `${item.bg} ${item.border}`
                      }`}
                    >
                      <p className={`text-sm ${isDark ? "text-slate-200" : "text-slate-600"}`}>{item.label}</p>
                      <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                      <p className={`text-xs mt-1 ${isDark ? "text-slate-300" : "text-slate-500"}`}>Live tracking</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- FEATURES SECTION ----------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-semibold text-center mb-4">Why teams choose Nidhi Setu</h3>
        <p className={`text-center max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Built for officers, auditors, and administrators who need clarity on utilization, compliance, and field activity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[ 
            {
              title: "Real-time visibility",
              desc: "Monitor sanctioned vs. used amounts, risk flags, and deadlines in one dashboard.",
              color: "from-sky-500/15 via-sky-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-sky-100",
            },
            {
              title: "Document-ready",
              desc: "Keep loan paperwork centralized and audit-friendly with quick exports.",
              color: "from-emerald-500/15 via-emerald-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-emerald-100",
            },
            {
              title: "Smart alerts",
              desc: "Get nudges for reviews, field validations, and cutoff dates before they slip.",
              color: "from-amber-500/15 via-amber-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-amber-100",
            },
            {
              title: "Secure by default",
              desc: "Protected data flows with audited access for officers and admins.",
              color: "from-indigo-500/15 via-indigo-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-indigo-100",
            },
            {
              title: "Field-first UX",
              desc: "Optimized layouts for quick inputs, even on lower-bandwidth areas.",
              color: "from-teal-500/15 via-teal-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-teal-100",
            },
            {
              title: "Actionable insights",
              desc: "Usage analytics and anomaly hints to keep utilization on track.",
              color: "from-rose-500/15 via-rose-400/10 to-white",
              dark: "bg-slate-800/80",
              border: "border-rose-100",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition ${
                isDark ? item.dark : `bg-linear-to-br ${item.color} ${item.border}`
              } ${isDark ? "border-slate-700" : item.border}`}
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className={`${isDark ? "text-slate-200" : "text-slate-600"} text-sm leading-relaxed`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------- APP PREVIEW SECTION ----------- */}
      <section id="preview" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-semibold text-center">Our App Preview</h3>
        <p className={`mt-3 text-center ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          A quick look at key screens from the Nidhi Setu app.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {appPreviews.map(({ src, alt }) => (
            <div key={src} className="flex justify-center">
              <div
                className={`w-[260px] rounded-[28px] border shadow-xl overflow-hidden ${
                  isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
                }`}
              >
                <div className={`h-3 flex items-center gap-1 px-3 py-2 ${isDark ? "bg-slate-700" : "bg-slate-100"}`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-slate-500" : "bg-slate-300"}`} />
                  <span className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-slate-500" : "bg-slate-300"}`} />
                  <span className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-slate-500" : "bg-slate-300"}`} />
                </div>
                <div className={`${isDark ? "bg-slate-900" : "bg-slate-50"} p-2`}>
                  <Image
                    src={src}
                    alt={alt}
                    width={256}
                    height={512}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------- FOOTER ----------- */}
      <footer className={`text-center py-10 text-sm ${isDark ? "text-slate-400" : "text-zinc-500"}`}>
        © {new Date().getFullYear()} Loan Utilization App. All rights reserved.
      </footer>
    </div>
  );
}
