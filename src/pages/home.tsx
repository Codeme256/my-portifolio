import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Github, Activity, Terminal, BarChart2, Workflow, Code2, Palette, FileSpreadsheet, Wrench, Network, Database, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fadeUp } from "@/lib/motion";
import profilePhoto from "@assets/profile.png";

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  useEffect(() => {
    const iv = setInterval(() => {
      if (idx.current < text.length) { setDisplayed(text.slice(0, idx.current + 1)); idx.current++; }
      else { setDone(true); clearInterval(iv); }
    }, 50);
    return () => clearInterval(iv);
  }, [text]);
  return <span className="font-mono text-primary">{displayed}{!done && <span className="animate-pulse">_</span>}</span>;
}

const capabilities = [
  { icon: Wrench, title: "IT Support", text: "Computer maintenance, software setup and troubleshooting." },
  { icon: Globe, title: "Web Development", text: "Responsive websites and practical digital platforms." },
  { icon: Database, title: "Data Management", text: "Data entry, cleaning, spreadsheets and reporting." },
  { icon: Network, title: "Networking", text: "Basic LAN setup, cabling and connectivity support." },
  { icon: Workflow, title: "AI & Automation", text: "Practical automation, APIs and digital workflows." },
  { icon: Palette, title: "Digital Design", text: "Graphics, layouts and visual content for digital platforms." },
];

const focus = [
  { icon: Terminal, label: "IT SUPPORT" },
  { icon: Code2, label: "WEB" },
  { icon: FileSpreadsheet, label: "DATA" },
  { icon: BarChart2, label: "DIGITAL SOLUTIONS" },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30 scroll-mt-20">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-[100dvh] flex items-center pt-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="space-y-5">
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm tracking-wider"><Activity className="w-4 h-4 animate-pulse text-primary" /><TypingText text="SYSTEM.STATUS: ONLINE" /></motion.div>
            <motion.p variants={fadeUp} className="font-mono text-primary text-xs tracking-[0.25em]">IT & DIGITAL SOLUTIONS</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">MWESIGWA<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DAVID</span></motion.h1>
            <motion.div variants={fadeUp} className="h-px w-full max-w-lg bg-gradient-to-r from-primary/50 to-transparent" />
            <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-semibold tracking-tight max-w-xl">Practical technology solutions for people, businesses and communities.</motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">IT professional focused on computer support, web development, data management, networking and digital innovation. I build useful solutions through practical technology and continuous learning.</motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl pt-1">{focus.map((item, i) => <div key={i} className="flex items-center gap-2 px-3 py-2 border border-border/50 bg-card text-[10px] sm:text-xs font-mono"><item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{item.label}</span></div>)}</motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 pt-1"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" /></span><span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR PROJECTS & OPPORTUNITIES</span></motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-3">
              <a href="https://wa.me/256781372439?text=Hi%20David%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center px-7 py-3 font-mono font-bold text-background bg-green-500 hover:bg-green-400 transition-all">CONTACT_ME<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></a>
              <Link href="#projects" className="group inline-flex items-center justify-center px-7 py-3 font-mono font-bold text-background bg-primary hover:bg-primary/90 transition-all">VIEW_PROJECTS<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              <a href="https://github.com/codeme256" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-7 py-3 font-mono font-bold text-primary border border-primary/30 hover:bg-primary/10 transition-all"><Github className="w-4 h-4 mr-2" />GITHUB</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/15 to-transparent blur-3xl scale-110" />
              <div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-dashed border-primary/25 animate-[spin_18s_linear_infinite]" />
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-primary/20 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full animate-[spin_8s_linear_infinite]"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]" /></div>
              <div className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_rgba(0,255,128,0.15)]"><img src={profilePhoto} alt="Mwesigwa David" className="w-full h-full object-cover object-top" /></div>
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-background/90 backdrop-blur border border-primary/30 font-mono text-xs text-primary whitespace-nowrap"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>OPEN TO OPPORTUNITIES</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <div className="flex items-center gap-4 mb-8"><span className="font-mono text-primary text-sm tracking-wider">WHAT I CAN DO //</span><div className="flex-1 h-px bg-border" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{capabilities.map((item, i) => <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group p-5 bg-card border border-border hover:border-primary/50 transition-all"><item.icon className="w-5 h-5 text-primary mb-4" /><h3 className="font-bold uppercase tracking-tight mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></motion.div>)}</div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link href="#projects" className="md:col-span-2 group p-7 border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all"><span className="font-mono text-xs text-primary">01 // SELECTED WORK</span><h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mt-3 mb-3">Explore My Projects</h2><p className="text-muted-foreground max-w-xl">See practical work across IT support, web platforms, data workflows, community technology and automation.</p><span className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-primary">VIEW PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>
          <Link href="#skills" className="group p-7 border border-border bg-card hover:border-primary/50 transition-all"><span className="font-mono text-xs text-primary">02 // SERVICES</span><h2 className="text-2xl font-bold uppercase tracking-tight mt-3 mb-3">Skills & Services</h2><p className="text-sm text-muted-foreground">View the technology services and practical skills I offer.</p><span className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-muted-foreground group-hover:text-primary">VIEW SERVICES <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
      </section>
    </div>
  );
}
