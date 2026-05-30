import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ExternalLink, Server, Database, ShieldAlert, BarChart2, Code2, Github } from "lucide-react";
import { SiTelegram } from "react-icons/si";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const projects = [
  {
    id: "apex-bot",
    num: "01",
    status: "LIVE",
    tag: "AI Automation / Forex",
    title: "Apex Bot",
    subtitle: "Real-time signal engine for forex & crypto markets",
    desc: "An event-driven algorithmic bot ecosystem. Consumes live market data via WebSocket and REST feeds, runs AI-powered technical analysis, and automatically dispatches trading signals to Telegram subscriber channels. Deployed in the cloud — runs 24/7.",
    img: UNSPLASH("1611974789855-9c2a0a7236a3"),
    imgAlt: "Live trading charts and crypto market data on screen",
    href: "https://forex-signal-bot--nangobihellen44.replit.app/crypto",
    github: "https://github.com/codeme256",
    specs: [
      { icon: ShieldAlert, label: "Protocol: AI Automation + Telegram API" },
      { icon: Database, label: "Data: Real-time Market Feeds (WebSocket)" },
      { icon: Server, label: "Infra: Cloud Deployed, Always On" },
    ],
    pills: ["Python", "Telegram API", "REST/WebSocket", "AI Analysis", "Cloud Deploy"],
    featured: true,
  },
  {
    id: "portfolio-release",
    num: "02",
    status: "SHIPPED",
    tag: "CI/CD / Web",
    title: "Cloud-Ready Portfolio",
    subtitle: "Git-driven deployment workflow for a production web asset",
    desc: "A deployment-oriented workflow for a static portfolio using Git-based change tracking, cloud-friendly hosting, and fast iteration cycles. Shows release hygiene, CI/CD mindset, and maintainable web operations.",
    img: UNSPLASH("1627398242454-45a1465c2479"),
    imgAlt: "Developer working on laptop with code editor open",
    href: "#",
    github: "https://github.com/codeme256",
    specs: [
      { icon: Code2, label: "Stack: React + Vite + TypeScript" },
      { icon: Server, label: "Deploy: Cloud-hosted, HTTPS" },
      { icon: Database, label: "Pipeline: Git-based change tracking" },
    ],
    pills: ["React", "TypeScript", "CI/CD", "Cloud Hosting", "Git"],
    featured: false,
  },
  {
    id: "linux-hardening",
    num: "03",
    status: "COMPLETED",
    tag: "SysAdmin / Security",
    title: "Workstation Hardening Playbook",
    subtitle: "Repeatable Linux security automation for lab environments",
    desc: "A practical Linux hardening checklist and shell automation flow covering package hygiene, audit logging, and user permission controls. Reduces repeated setup steps, improves system traceability, and documents security-aware operational practices.",
    img: UNSPLASH("1629654297299-c8506b9f1501"),
    imgAlt: "Linux terminal with security commands running",
    href: "#",
    github: "https://github.com/codeme256",
    specs: [
      { icon: ShieldAlert, label: "Focus: System hardening + SecOps" },
      { icon: Server, label: "Platform: Linux (Bash scripting)" },
      { icon: Database, label: "Output: Audit logs + permission matrix" },
    ],
    pills: ["Bash", "Linux", "Security", "Automation", "Audit"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-20">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Page header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10 md:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-primary text-base md:text-xl">ACTIVE.DEPLOYMENTS //</span>
            <div className="flex-1 h-px bg-border hidden md:block" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            Projects &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Deployments</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-lg">
            Real systems. Deployed code. Each one solves a specific problem in production.
          </motion.p>
        </motion.div>

        {/* Featured project — full width */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="mb-12 md:mb-20"
            data-testid={`card-project-${project.id}`}
          >
            <motion.div variants={fadeUp} className="relative p-px bg-gradient-to-b from-primary/30 to-transparent">
              <div className="bg-card border border-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.imgAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-primary font-mono text-xs font-bold text-background">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-background" />
                      </span>
                      {project.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-12 flex flex-col justify-center">
                    <div className="font-mono text-primary text-xs tracking-widest mb-4">{project.num} // {project.tag.toUpperCase()}</div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">{project.title}</h2>
                    <p className="text-muted-foreground font-mono text-sm mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{project.desc}</p>

                    <div className="space-y-3 mb-8 font-mono text-sm text-muted-foreground">
                      {project.specs.map(({ icon: Icon, label }, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.pills.map((pill, i) => (
                        <span key={i} className="px-2 py-1 border border-primary/20 bg-primary/5 text-primary font-mono text-xs">{pill}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.href !== "#" && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-background bg-primary hover:bg-primary/90 transition-all"
                          data-testid={`link-project-live-${project.id}`}
                        >
                          ACCESS_DASHBOARD
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-foreground border border-border hover:border-primary/50 transition-all"
                        data-testid={`link-project-github-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-card/80 backdrop-blur border border-border font-mono text-xs text-muted-foreground">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="font-mono text-primary text-xs tracking-widest mb-2">{project.num} // {project.tag.toUpperCase()}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.pills.map((pill, pi) => (
                    <span key={pi} className="px-2 py-0.5 border border-border/50 text-muted-foreground font-mono text-xs">{pill}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
