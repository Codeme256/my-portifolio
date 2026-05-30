import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight, Github, Activity, Code2, BarChart2,
  Terminal, Workflow, Award, PenTool, FileSpreadsheet, Palette, Server
} from "lucide-react";
import { SiGooglecloud, SiLinux, SiReact, SiFigma } from "react-icons/si";
import { fadeUp } from "@/lib/motion";
import profilePhoto from "@assets/profile.png";
import certAI from "@assets/cert-ai.png";
import certProduct from "@assets/cert-product.png";

const UNSPLASH = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  useEffect(() => {
    const iv = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1));
        idx.current++;
      } else {
        setDone(true);
        clearInterval(iv);
      }
    }, 55);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <span className="font-mono text-primary">
      {displayed}
      {!done && <span className="animate-pulse">_</span>}
    </span>
  );
}

const roles = [
  { icon: Terminal, label: "Cloud Engineer", color: "text-blue-400" },
  { icon: BarChart2, label: "Forex Bot Builder", color: "text-green-400" },
  { icon: Workflow, label: "AI Product Manager", color: "text-purple-400" },
  { icon: Code2, label: "Full-Stack Developer", color: "text-yellow-400" },
  { icon: Palette, label: "Graphics Design", color: "text-pink-400" },
  { icon: FileSpreadsheet, label: "Data Entry", color: "text-orange-400" },
];

const skillsPreview = [
  { title: "Cloud Engineering", img: UNSPLASH("1544197150-b99a580bb7a8"), href: "/skills#cloud" },
  { title: "Forex Bot & AI", img: UNSPLASH("1611974789855-9c2a0a7236a3"), href: "/skills#forex" },
  { title: "Web Dev & Design", img: UNSPLASH("1547658719-da2b51169166"), href: "/skills#webdev" },
  { title: "Graphics Design", img: UNSPLASH("1561070791-2526d30994b5"), href: "/skills#graphics" },
  { title: "Data Entry", img: UNSPLASH("1586281380349-632531db7ed4"), href: "/skills#dataentry" },
];

const certs = [
  { title: "Build Your Website in 10 Minutes With AI", issuer: "Build Fast With AI", date: "Mar 2025", img: certAI },
  { title: "The Complete AI Crash Course", issuer: "Product Space", date: "Mar 2026", img: certProduct },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />

      {/* ── HERO ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-[100dvh] flex items-center pt-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 lg:py-16">

          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm tracking-wider">
              <Activity className="w-4 h-4 animate-pulse text-primary" />
              <TypingText text="SYSTEM.STATUS: ONLINE" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Mwesigwa<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">David</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-px w-full max-w-sm bg-gradient-to-r from-primary/50 to-transparent" />

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Cloud Engineer · Forex Bot Builder · Graphics Designer · Full-Stack Developer.<br />
              Available for work — let's build something great.
            </motion.p>

            {/* Role grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-lg pt-1">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 border border-border/50 bg-card text-xs font-mono">
                  <role.icon className={`w-3.5 h-3.5 flex-shrink-0 ${role.color}`} />
                  <span className="text-muted-foreground truncate">{role.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Available badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR WORK</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/256781372439?text=Hi%20David%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20hire%20you%20for%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-background bg-green-500 hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(74,222,128,0.25)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]"
                data-testid="link-hire-me"
              >
                HIRE_ME
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/projects" className="group inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-background bg-primary hover:bg-primary/90 transition-all" data-testid="link-view-projects">
                VIEW_PROJECTS
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://github.com/codeme256" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-primary border border-primary/30 hover:bg-primary/10 transition-all" data-testid="link-github">
                <Github className="w-4 h-4 mr-2" />
                GITHUB
              </a>
            </motion.div>
          </motion.div>

          {/* Right — circular photo (shows ABOVE text on mobile via order) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/15 to-transparent blur-3xl scale-110" />
              {/* Spinning dashed ring */}
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-dashed border-primary/25 animate-[spin_18s_linear_infinite]" />
              {/* Inner solid ring */}
              <div className="absolute w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-primary/20 animate-[spin_12s_linear_infinite_reverse]" />
              {/* Orbit dots */}
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full animate-[spin_8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
              </div>
              <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full animate-[spin_14s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_currentColor]" />
              </div>

              {/* Circle photo */}
              <div className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_rgba(0,255,128,0.15)]">
                <img
                  src={profilePhoto}
                  alt="Mwesigwa David"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>

              {/* Status badge below */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-background/90 backdrop-blur border border-primary/30 font-mono text-xs text-primary whitespace-nowrap">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                AVAILABLE FOR WORK
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="relative z-10 border-t border-border/50 bg-card/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/50">
            {[
              { value: "3+", label: "Projects Deployed" },
              { value: "5", label: "Service Areas" },
              { value: "2", label: "Certifications" },
              { value: "24h", label: "Response Time" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-6 gap-1">
                <span className="font-mono font-bold text-2xl md:text-3xl text-primary">{stat.value}</span>
                <span className="font-mono text-xs text-muted-foreground tracking-wider text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS PREVIEW ── */}
      <div className="relative z-10 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-primary text-sm tracking-wider">SYS.CAPABILITIES</span>
                <div className="w-12 h-px bg-border" />
              </div>
              <Link href="/skills" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1" data-testid="link-all-skills">
                VIEW ALL <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillsPreview.map((skill, i) => (
                <motion.div key={i} custom={i} variants={fadeUp}>
                  <Link href="/skills" className="group block relative aspect-[4/3] overflow-hidden" data-testid={`link-skill-preview-${i}`}>
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="font-mono text-xs text-foreground leading-tight block">{skill.title}</span>
                    </div>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_currentColor] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CERTIFICATIONS PREVIEW ── */}
      <div className="relative z-10 border-t border-border/50 bg-card/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-mono text-primary text-sm tracking-wider">VERIFIED.CREDENTIALS</span>
                <div className="w-12 h-px bg-border hidden sm:block" />
              </div>
              <Link href="/certifications" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1" data-testid="link-all-certs">
                VIEW ALL <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certs.map((cert, i) => (
                <motion.div key={i} custom={i} variants={fadeUp}>
                  <Link href="/certifications" className="group block bg-card border border-border hover:border-primary/50 transition-all overflow-hidden" data-testid={`link-cert-preview-${i}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    <div className="p-4 flex items-start gap-3 border-t border-border/50">
                      <div className="mt-0.5 p-1.5 bg-primary/10 border border-primary/20 flex-shrink-0">
                        <Award className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm leading-tight truncate">{cert.title}</p>
                        <p className="font-mono text-xs text-muted-foreground mt-0.5">{cert.issuer} · {cert.date}</p>
                      </div>
                      <span className="ml-auto flex-shrink-0 px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary font-mono text-xs">VERIFIED</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── QUICK NAV ── */}
      <div className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Skills & Services", href: "/skills", desc: "What I can build for you" },
            { label: "Projects", href: "/projects", desc: "Live work and deployments" },
            { label: "Certifications", href: "/certifications", desc: "Verified credentials" },
            { label: "Contact", href: "/contact", desc: "Let's work together" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group flex flex-col gap-1 p-4 border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card transition-all"
              data-testid={`link-quick-nav-${i}`}
            >
              <span className="font-mono text-xs text-primary tracking-wider">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
              <ArrowRight className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
