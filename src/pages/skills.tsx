import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import {
  SiGooglecloud, SiLinux, SiReact, SiNodedotjs, SiPython,
  SiDocker, SiTelegram, SiFigma,
} from "react-icons/si";
import {
  Server, Globe, Monitor, Code2, Database, Cpu,
  Network, BarChart2, Workflow, PenTool, FileSpreadsheet, Palette
} from "lucide-react";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const serviceCategories = [
  {
    id: "cloud",
    num: "01",
    title: "Cloud Engineering",
    tagline: "Scalable infrastructure, anywhere.",
    desc: "Designing and deploying resilient cloud systems on AWS, GCP, and Azure. From architecture planning to live deployments — built to scale.",
    img: UNSPLASH("1544197150-b99a580bb7a8"),
    imgAlt: "Server room with blue lighting representing cloud infrastructure",
    available: true,
    skills: [
      { name: "AWS", icon: Server },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Azure", icon: Globe },
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    id: "forex",
    num: "02",
    title: "Forex Bot & AI Automation",
    tagline: "Markets never sleep. Neither does the bot.",
    desc: "Building event-driven trading systems that consume real-time market data, run algorithmic logic, and broadcast signals via Telegram. Live 24/7.",
    img: UNSPLASH("1611974789855-9c2a0a7236a3"),
    imgAlt: "Trading charts and financial data on screen",
    available: true,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Telegram API", icon: SiTelegram },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Automation", icon: Workflow },
      { name: "AI/ML", icon: Cpu },
    ],
  },
  {
    id: "webdev",
    num: "03",
    title: "Web Development & Design",
    tagline: "Full-stack from mockup to production.",
    desc: "Designing and shipping full-stack web applications — responsive layouts, performant backends, clean APIs, and polished UIs that convert.",
    img: UNSPLASH("1547658719-da2b51169166"),
    imgAlt: "Web developer working on laptop with code on screen",
    available: true,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: Monitor },
      { name: "Databases", icon: Database },
    ],
  },
  {
    id: "graphics",
    num: "04",
    title: "Graphics Design",
    tagline: "Visual systems that communicate.",
    desc: "Creating brand identities, UI mockups, social media graphics, and marketing assets. Clean, purposeful design that earns attention and trust.",
    img: UNSPLASH("1561070791-2526d30994b5"),
    imgAlt: "Graphic designer working with color palettes and design tools",
    available: true,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "UI/UX", icon: Palette },
      { name: "Branding", icon: PenTool },
      { name: "Layouts", icon: Code2 },
      { name: "Motion", icon: Workflow },
    ],
  },
  {
    id: "dataentry",
    num: "05",
    title: "Data Entry & Management",
    tagline: "Clean data in, clean decisions out.",
    desc: "Accurate, high-volume data entry and management. Structured spreadsheets, database population, CRM updates, and document processing — fast and error-free.",
    img: UNSPLASH("1586281380349-632531db7ed4"),
    imgAlt: "Person typing data on keyboard for data entry work",
    available: true,
    skills: [
      { name: "Spreadsheets", icon: FileSpreadsheet },
      { name: "Databases", icon: Database },
      { name: "Data Cleaning", icon: Network },
      { name: "Python Scripts", icon: SiPython },
      { name: "Accuracy", icon: BarChart2 },
    ],
  },
];

export default function Skills() {
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
            <span className="font-mono text-primary text-base md:text-xl">SYS.CAPABILITIES //</span>
            <div className="flex-1 h-px bg-border hidden md:block" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            Skills &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-lg">
            Five service areas. All available. Built from real-world practice, not just theory.
          </motion.p>

          {/* Available badge */}
          <motion.div variants={fadeUp} className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 bg-green-400/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR ALL SERVICES LISTED BELOW</span>
          </motion.div>
        </motion.div>

        {/* Service sections */}
        <div className="space-y-14 md:space-y-24">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${catIdx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              id={cat.id}
              data-testid={`section-skill-${cat.id}`}
            >
              {/* Image side */}
              <motion.div
                variants={fadeUp}
                className={`relative overflow-hidden ${catIdx % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary font-mono text-xs font-bold text-background">
                    {cat.num}
                  </div>
                  {cat.available && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur border border-green-400/30 font-mono text-xs text-green-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                      </span>
                      AVAILABLE
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                variants={fadeUp}
                className={`space-y-6 ${catIdx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div>
                  <div className="font-mono text-primary text-xs tracking-widest mb-3">{cat.num} // {cat.id.toUpperCase()}</div>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">{cat.title}</h2>
                  <p className="text-primary font-mono text-sm italic mb-4">{cat.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-card border border-border hover:border-primary/50 transition-colors text-xs font-mono"
                      data-testid={`skill-${cat.id}-${i}`}
                    >
                      <skill.icon className="w-3.5 h-3.5 text-primary" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
