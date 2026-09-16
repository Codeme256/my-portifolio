import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ExternalLink, Server, Database, ShieldCheck, BarChart2, Code2, Github, Globe, Wrench, Network } from "lucide-react";
import { SiTelegram } from "react-icons/si";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const projects = [
  {
    id: "quant-trader",
    num: "01",
    status: "LIVE BUILD",
    tag: "AI / Trading Automation",
    title: "XAU/USD Quant",
    subtitle: "Algorithmic market-analysis and signal dashboard",
    desc: "A trading technology project focused on XAU/USD and other liquid markets. The system brings together market data, technical indicators, risk-management rules and Telegram/email notifications in a single web dashboard for monitoring and analysis.",
    img: UNSPLASH("1611974789855-9c2a0a7236a3"),
    imgAlt: "Financial market charts and trading dashboard",
    href: "https://algo-trader-ai-caduganda25.replit.app/",
    github: "https://github.com/codeme256",
    specs: [
      { icon: BarChart2, label: "Analysis: RSI + EMA + ATR risk framework" },
      { icon: Database, label: "Market Data: Streaming/API integrations" },
      { icon: Server, label: "Delivery: Cloud-hosted monitoring dashboard" },
    ],
    pills: ["Python", "Trading APIs", "Technical Analysis", "Telegram", "Risk Management"],
    featured: true,
  },
  {
    id: "community-aid",
    num: "02",
    status: "IN DEVELOPMENT",
    tag: "Community Technology",
    title: "Community Aid for Development",
    subtitle: "Digital platform for youth, community projects and impact reporting",
    desc: "A community-focused digital platform designed to connect youth development programs with online reporting, volunteering, project information and community issues. The project demonstrates practical web development for an NGO/community environment.",
    img: UNSPLASH("1497366754035-f200968a6e72"),
    imgAlt: "Community technology and digital development workspace",
    href: "https://community-aid.replit.app/",
    github: "https://github.com/codeme256",
    specs: [
      { icon: Globe, label: "Platform: Responsive web application" },
      { icon: Database, label: "Data: Forms, project information and impact records" },
      { icon: ShieldCheck, label: "Focus: Accessible digital community services" },
    ],
    pills: ["Web Development", "Forms", "Supabase", "Community Tech", "UI/UX"],
    featured: false,
  },
  {
    id: "portfolio",
    num: "03",
    status: "LIVE",
    tag: "Web / Portfolio",
    title: "Professional Portfolio",
    subtitle: "Responsive personal portfolio deployed with GitHub Pages",
    desc: "A continuously updated professional portfolio built to present IT skills, services, projects, credentials and contact information. The site uses a responsive React interface with Git-based version control and cloud deployment.",
    img: UNSPLASH("1461749280684-dccba630e2f6"),
    imgAlt: "Laptop showing a modern web development project",
    href: "https://codeme256.github.io/my-portifolio/",
    github: "https://github.com/Codeme256/my-portifolio",
    specs: [
      { icon: Code2, label: "Stack: React + TypeScript + Vite" },
      { icon: Server, label: "Hosting: GitHub Pages" },
      { icon: ShieldCheck, label: "Workflow: Git-based updates and deployment" },
    ],
    pills: ["React", "TypeScript", "Vite", "GitHub Pages", "Responsive Design"],
    featured: false,
  },
  {
    id: "it-support-lab",
    num: "04",
    status: "PRACTICAL WORK",
    tag: "IT Support / Networking",
    title: "IT Support & Network Lab",
    subtitle: "Hands-on computer maintenance and small-network support",
    desc: "A practical IT support portfolio area covering hardware troubleshooting, operating-system setup, software installation, updates, LAN cabling and basic network troubleshooting. Built around the type of support work expected from an entry-level IT technician.",
    img: UNSPLASH("1587202372775-e229f172b9d7"),
    imgAlt: "Computer hardware and IT support workstation",
    href: "#",
    github: "https://github.com/codeme256",
    specs: [
      { icon: Wrench, label: "Hardware: Diagnostics, maintenance and upgrades" },
      { icon: Network, label: "Networking: LAN setup, cabling and troubleshooting" },
      { icon: Server, label: "Systems: Installation, configuration and updates" },
    ],
    pills: ["IT Support", "Computer Maintenance", "LAN", "Troubleshooting", "Windows/Linux"],
    featured: false,
  },
  {
    id: "digital-data-workflow",
    num: "05",
    status: "SERVICE PROJECT",
    tag: "Data Management",
    title: "Digital Data Workflow",
    subtitle: "Structured data-entry and reporting workflow",
    desc: "A practical workflow concept for collecting, cleaning, organizing and presenting operational data using spreadsheets, online forms and structured records. Useful for NGO programs, research activities and small-business administration.",
    img: UNSPLASH("1551288049-bebda4e38f71"),
    imgAlt: "Structured data and spreadsheet workflow",
    href: "#",
    github: "https://github.com/codeme256",
    specs: [
      { icon: Database, label: "Process: Collection, cleaning and validation" },
      { icon: BarChart2, label: "Output: Organized reports and dashboards" },
      { icon: Code2, label: "Tools: Spreadsheets, forms and automation" },
    ],
    pills: ["Data Entry", "Excel", "Google Sheets", "Data Cleaning", "Reporting"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-20">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-10 md:mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="font-mono text-primary text-base md:text-xl">SELECTED.WORK //</span>
            <div className="flex-1 h-px bg-border hidden md:block" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            Projects &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Practical Work</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-xl">
            A growing portfolio of IT, web, data, automation and community-technology projects built through practical work and continuous learning.
          </motion.p>
        </motion.div>

        {projects.filter(p => p.featured).map((project) => (
          <motion.div key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-12 md:mb-20" data-testid={`card-project-${project.id}`}>
            <motion.div variants={fadeUp} className="relative p-px bg-gradient-to-b from-primary/30 to-transparent">
              <div className="bg-card border border-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img src={project.img} alt={project.imgAlt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-primary font-mono text-xs font-bold text-background">
                      <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-background" /></span>
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 md:p-12 flex flex-col justify-center">
                    <div className="font-mono text-primary text-xs tracking-widest mb-4">{project.num} // {project.tag.toUpperCase()}</div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">{project.title}</h2>
                    <p className="text-muted-foreground font-mono text-sm mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{project.desc}</p>
                    <div className="space-y-3 mb-8 font-mono text-sm text-muted-foreground">
                      {project.specs.map(({ icon: Icon, label }, i) => <div key={i} className="flex items-center gap-3"><Icon className="w-4 h-4 text-primary flex-shrink-0" /><span>{label}</span></div>)}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">{project.pills.map((pill, i) => <span key={i} className="px-2 py-1 border border-primary/20 bg-primary/5 text-primary font-mono text-xs">{pill}</span>)}</div>
                    <div className="flex flex-wrap gap-4">
                      <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-background bg-primary hover:bg-primary/90 transition-all">OPEN_PROJECT<ExternalLink className="w-4 h-4 ml-2" /></a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-foreground border border-border hover:border-primary/50 transition-all"><Github className="w-4 h-4 mr-2" />GITHUB</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div key={project.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="group bg-card border border-border hover:border-primary/50 transition-all overflow-hidden" data-testid={`card-project-${project.id}`}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={project.img} alt={project.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-card/80 backdrop-blur border border-border font-mono text-xs text-muted-foreground">{project.status}</div>
              </div>
              <div className="p-6">
                <div className="font-mono text-primary text-xs tracking-widest mb-2">{project.num} // {project.tag.toUpperCase()}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">{project.pills.map((pill, pi) => <span key={pi} className="px-2 py-0.5 border border-border/50 text-muted-foreground font-mono text-xs">{pill}</span>)}</div>
                {project.href !== "#" && <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mr-5"><ExternalLink className="w-3.5 h-3.5" />Open Project</a>}
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"><Github className="w-3.5 h-3.5" />View GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
