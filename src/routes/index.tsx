import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Megaphone,
  PieChart,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  FileText,
} from "lucide-react";
import heroNebula from "@/assets/hero-nebula.jpg";
import heroLaptop from "@/assets/hero-laptop.png";
import projConference from "@/assets/project-conference.jpg";
import projProduct from "@/assets/project-product.jpg";
import projAgency from "@/assets/project-agency.jpg";
import forestScene from "@/assets/forest-workspace.jpg";
import projStudyMate from "@/assets/studymate.png";
import projAccidentDetection from "@/assets/accident_detection.jpg";
import projCarpool from "@/assets/carpool.jpg";
import projFocusDetection from "@/assets/focus_detection.png";
import projReturnPrediction from "@/assets/return_prediction.jpg";
import projDSLCompiler from "@/assets/dsl_compiler.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { label: "Python", size: "text-2xl", color: "text-neon-purple" },
  { label: "C++", size: "text-xl", color: "text-neon-blue" },
  { label: "SQL", size: "text-lg", color: "text-neon-magenta" },
  { label: "HTML", size: "text-base", color: "text-neon-cyan" },
  { label: "CSS", size: "text-lg", color: "text-neon-purple" },
  { label: "Dart", size: "text-xl", color: "text-neon-blue" },
  { label: "React", size: "text-2xl", color: "text-neon-cyan" },
  { label: "TypeScript", size: "text-xl", color: "text-neon-blue" },
  { label: "Node.js", size: "text-2xl", color: "text-neon-purple" },
  { label: "Express.js", size: "text-lg", color: "text-neon-magenta" },
  { label: "Tailwind CSS", size: "text-xl", color: "text-neon-cyan" },
  { label: "Prisma", size: "text-lg", color: "text-neon-blue" },
  { label: "TensorFlow", size: "text-3xl", color: "text-neon-magenta" },
  { label: "Scikit-learn", size: "text-2xl", color: "text-neon-cyan" },
  { label: "LangChain", size: "text-3xl", color: "text-neon-purple" },
  { label: "OpenCV", size: "text-2xl", color: "text-neon-magenta" },
  { label: "Machine Learning", size: "text-2xl", color: "text-neon-blue" },
  { label: "Computer Vision", size: "text-2xl", color: "text-neon-cyan" },
  { label: "Fuzzy Logic", size: "text-lg", color: "text-neon-purple" },
  { label: "Data Structures", size: "text-xl", color: "text-neon-blue" },
];

const PROJECTS = [
  {
    video: "/voice_of_the_voiceless.mp4",
    title: "Voice of the Voiceless (Final Year Project)",
    tag: "AI / Deep Learning / Accessibility",
    desc: "Currently developing a deep learning-based assistive communication platform designed to translate and empower speech-impaired individuals.",
  },
  {
    img: projStudyMate,
    title: "StudyMate Career Recommendation System",
    tag: "AI / LLM / LangChain",
    desc: "AI-powered web app that suggests career paths and generates roadmaps using LLMs and structured LangChain workflows.",
  },
  {
    img: projAccidentDetection,
    title: "Accident Detection Website",
    tag: "Computer Vision / Node.js",
    desc: "Real-time accident detection system utilizing a custom CNN model integrated into a Node.js web server.",
  },
  {
    img: projCarpool,
    title: "Carpool System Website",
    tag: "React / TypeScript / Express",
    desc: "Design and implementation of a web-based carpool management platform as part of a Design & Analysis of Algorithms project.",
  },
  {
    img: projFocusDetection,
    title: "Employee Focus Detection System",
    tag: "Python / OpenCV",
    desc: "Webcam-based real-time attention monitoring system to detect employee focus and attention levels using computer vision.",
  },
  {
    img: projReturnPrediction,
    title: "E-commerce Product Return Prediction",
    tag: "Machine Learning / Scikit-learn",
    desc: "A predictive machine learning model using Random Forest to analyze customer patterns and estimate return probability.",
  },

  {
    img: projDSLCompiler,
    title: "DSL Compiler (Compiler Construction)",
    tag: "Systems Programming / Custom Compiler",
    desc: "A custom Domain-Specific Language (DSL) compiler built as a Compiler Construction project, supporting syntax parsing and execution.",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-xl neon-border glass-strong grid place-items-center">
        <span className="font-display text-lg font-bold text-gradient tracking-tighter">
          AS
        </span>
      </div>
      <span className="font-display font-semibold tracking-wide hidden sm:inline">
        Amna<span className="text-gradient">.dev</span>
      </span>
    </div>
  );
}

function Particles({ count = 40 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const dur = 6 + Math.random() * 8;
        const hue = ["var(--neon-purple)", "var(--neon-blue)", "var(--neon-cyan)", "var(--neon-magenta)"][i % 4];
        return (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: hue,
              boxShadow: `0 0 ${size * 3}px ${hue}`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
}

function LightStream({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 h-px ${className}`}>
      <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-neon-magenta to-transparent opacity-70 animate-pulse-glow" />
    </div>
  );
}

function Index() {
  return (
    <div id="home" className="relative min-h-screen text-foreground overflow-x-clip">
      {/* NAV */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <nav className="mx-auto max-w-6xl glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Logo />
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-foreground transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-neon rounded-full px-5 py-2 text-sm font-semibold tracking-wide"
          >
            GET STARTED
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
        <img
          src={heroNebula}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70 -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <Particles count={60} />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            Available for opportunities · 2026
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hello, I am <span className="text-gradient">Amna Saeed</span>,<br />
            AI Developer<br />
            <span className="text-muted-foreground/90">and</span>{" "}
            <span className="text-gradient">Software Engineer</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            I am a Computer Science undergraduate skilled in developing AI-based and web solutions.
            Passionate about building efficient, user-focused applications with machine learning, 
            computer vision, and modern web frameworks.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-widest"
            >
              EXPLORE MY WORLD <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="glass rounded-full px-7 py-3.5 text-sm font-semibold tracking-widest hover:bg-white/10 transition"
            >
              WHAT I DO
            </a>
            <a
              href="/AmnaSaeed_CV.pdf"
              download="AmnaSaeed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-widest transition duration-300 neon-border glass hover:bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <FileText className="h-4 w-4 text-neon-cyan" /> DOWNLOAD CV
            </a>
          </div>

          <div className="relative mt-16 sm:mt-20 mx-auto max-w-4xl animate-float">
            <div
              className="absolute inset-x-8 -bottom-6 h-32 blur-3xl opacity-70 -z-10"
              style={{ background: "var(--gradient-neon)" }}
            />
            <img
              src={heroLaptop}
              alt="Laptop launching a rocket from a neon city"
              width={1536}
              height={1024}
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(120,50,220,0.55)]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT strip */}
      <section id="about" className="relative py-24">
        <LightStream className="top-8" />
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { k: "3.7", v: "Cumulative CGPA" },
            { k: "7+", v: "AI & Web Projects" },
            { k: "8th", v: "Semester Undergraduate" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-8 text-center neon-border">
              <div className="font-display text-5xl font-bold text-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground tracking-widest uppercase">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES + SKILL CLOUD */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-neon-cyan mb-3">— WHAT I DO</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Expertise <span className="text-gradient">and Tools</span>
            </h2>
          </div>

          <div className="relative">
            {/* skill cloud floating */}
            <div className="pointer-events-none absolute inset-0 -inset-x-10 hidden lg:block">
              {SKILLS.map((s, i) => {
                const positions = [
                  { top: "-6%", left: "2%" },
                  { top: "12%", left: "-4%" },
                  { top: "40%", left: "-2%" },
                  { top: "72%", left: "4%" },
                  { top: "92%", left: "20%" },
                  { top: "-4%", left: "22%" },
                  { top: "-8%", left: "48%" },
                  { top: "-6%", left: "72%" },
                  { top: "10%", left: "94%" },
                  { top: "38%", left: "98%" },
                  { top: "68%", left: "96%" },
                  { top: "92%", left: "78%" },
                  { top: "96%", left: "52%" },
                  { top: "50%", left: "50%" },
                  { top: "22%", left: "36%" },
                  { top: "78%", left: "38%" },
                  { top: "30%", left: "68%" },
                  { top: "82%", left: "62%" },
                  { top: "6%", left: "62%" },
                  { top: "62%", left: "10%" },
                ];
                const p = positions[i % positions.length];
                return (
                  <span
                    key={s.label}
                    className={`absolute font-display font-semibold ${s.size} ${s.color} opacity-70 animate-float`}
                    style={{
                      top: p.top,
                      left: p.left,
                      transform: "translate(-50%, -50%)",
                      textShadow: "0 0 20px currentColor",
                      animationDelay: `${(i % 6) * 0.6}s`,
                    }}
                  >
                    {s.label}
                  </span>
                );
              })}
            </div>

            <div className="relative grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="h-6 w-6" />,
                  title: "AI & MACHINE LEARNING",
                  desc: "Building intelligent models using TensorFlow, Scikit-learn, OpenCV, and LLMs with LangChain.",
                },
                {
                  icon: <Megaphone className="h-6 w-6" />,
                  title: "WEB & APP DEVELOPMENT",
                  desc: "Crafting beautiful, functional web systems using HTML, CSS, React, TypeScript, Node.js, and Dart.",
                },
                {
                  icon: <PieChart className="h-6 w-6" />,
                  title: "CORE COMPUTER SCIENCE",
                  desc: "Applying algorithms, data structures (BST, Queues), Fuzzy Logic, and compiler construction concepts.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="glass-strong neon-border rounded-3xl p-8 group hover:-translate-y-1 transition-transform"
                >
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-glow)" }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-widest">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-24">
        <LightStream className="top-6" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-neon-magenta mb-3">— PORTFOLIO</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                Academic <span className="text-gradient">Projects</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="glass rounded-3xl overflow-hidden group hover:-translate-y-1 transition-transform"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 bg-black/75 text-white text-[10px] font-semibold tracking-widest uppercase z-10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-neon-cyan">
                    View case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOREST WORKSPACE */}
      <section className="relative py-24">
        <LightStream className="top-10" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="glass neon-border rounded-3xl p-8 sm:p-10">
              <p className="text-xs tracking-[0.4em] text-neon-cyan mb-3">
                — EDUCATION
              </p>
              <h3 className="font-display text-2xl font-bold">
                Bachelor of Science in <span className="text-gradient">Computer Science</span>
              </h3>
              <p className="mt-4 text-foreground font-medium">
                COMSATS University Islamabad, Wah Campus
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Expected Graduation: 2027
              </p>
              <p className="text-sm text-neon-magenta font-semibold mt-3">
                CGPA: 3.7 / 4.00
              </p>
            </div>

            {/* Reference */}
            <div className="glass neon-border rounded-3xl p-8 sm:p-10">
              <p className="text-xs tracking-[0.4em] text-neon-magenta mb-3">
                — REFERENCE
              </p>
              <h3 className="font-display text-2xl font-bold">
                Academic <span className="text-gradient">Endorsement</span>
              </h3>
              <p className="mt-4 text-foreground font-medium">
                Dr. Faisal Azam
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Assistant Professor, Dept of Computer Science
              </p>
              <p className="text-sm text-muted-foreground">
                COMSATS University Islamabad, Wah Campus
              </p>
              <div className="mt-4 text-xs text-muted-foreground flex flex-col gap-1">
                <span>Contact: +92 300 5157478</span>
                <span>Email: faisal@ciitwah.edu.pk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative pt-24 pb-12">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-0 h-full opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-neon-magenta mb-4">
            — CONTACT
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Let's build something<br />
            <span className="text-gradient">together.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Eager to contribute to innovative software development teams. Reach out via email or connect with me on GitHub and LinkedIn.
          </p>
          <div className="mt-10 flex flex-col items-center gap-2">
            <a
              href="mailto:amnasaeed1231@gmail.com"
              className="btn-neon inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-widest"
            >
              <Mail className="h-4 w-4" /> amnasaeed1231@gmail.com
            </a>
            <span className="text-sm text-muted-foreground mt-2">+92 327 5027927</span>
            <span className="text-xs text-muted-foreground">Wah Cantt, Pakistan</span>
          </div>

          <div className="mt-16 glass rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
            <Logo />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/amnasaeed16"
                target="_blank"
                rel="noreferrer"
                className="glass h-10 w-10 grid place-items-center rounded-full hover:bg-white/10 transition"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/amna-saeed-07a2a6358"
                target="_blank"
                rel="noreferrer"
                className="glass h-10 w-10 grid place-items-center rounded-full hover:bg-white/10 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Amna Saeed. Crafted with code and intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
