import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SiReact, SiPython, SiLinux, SiFigma, SiGit, SiGithub } from "react-icons/si";
import { Server, Globe, Monitor, Code2, Database, Cpu, Network, BarChart2, Workflow, PenTool, FileSpreadsheet, Wrench } from "lucide-react";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const serviceCategories = [
  {
    id: "it-support",
    num: "01",
    title: "IT Support & Computer Maintenance",
    tagline: "Practical support for everyday technology.",
    desc: "Providing practical entry-level IT support including computer setup, hardware and software troubleshooting, operating-system installation, updates, software configuration and routine maintenance.",
    img: UNSPLASH("1587202372775-e229f172b9d7"),
    imgAlt: "Computer hardware and IT support workstation",
    available: true,
    skills: [
      { name: "Hardware Troubleshooting", icon: Wrench },
      { name: "Windows / Linux", icon: SiLinux },
      { name: "Software Installation", icon: Monitor },
      { name: "System Maintenance", icon: Server },
      { name: "Basic Networking", icon: Network },
    ],
  },
  {
    id: "webdev",
    num: "02",
    title: "Web Design & Development",
    tagline: "Responsive websites from idea to deployment.",
    desc: "Building and maintaining responsive websites and lightweight web applications, with attention to clean layouts, mobile usability, content structure and Git-based deployment.",
    img: UNSPLASH("1547658719-da2b51169166"),
    imgAlt: "Web developer working on laptop with code on screen",
    available: true,
    skills: [
      { name: "HTML / CSS", icon: Code2 },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: Code2 },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Responsive UI", icon: Monitor },
    ],
  },
  {
    id: "data",
    num: "03",
    title: "Data Entry & Digital Data Management",
    tagline: "Accurate data, organized for useful reporting.",
    desc: "Handling structured data entry, spreadsheet organization, data cleaning, online forms, document processing and basic reporting workflows for small businesses, community projects and research activities.",
    img: UNSPLASH("1551288049-bebda4e38f71"),
    imgAlt: "Organized spreadsheet and digital data workflow",
    available: true,
    skills: [
      { name: "Excel / Sheets", icon: FileSpreadsheet },
      { name: "Data Cleaning", icon: Database },
      { name: "Online Forms", icon: Globe },
      { name: "Document Processing", icon: FileSpreadsheet },
      { name: "Basic Reporting", icon: BarChart2 },
    ],
  },
  {
    id: "networking",
    num: "04",
    title: "Networking & System Setup",
    tagline: "Connected devices and reliable basic infrastructure.",
    desc: "Supporting small-office and personal network setups through basic LAN cabling, device configuration, connectivity troubleshooting and computer-to-network setup.",
    img: UNSPLASH("1558494949-ef010cbdcc31"),
    imgAlt: "Network cables and networking equipment",
    available: true,
    skills: [
      { name: "LAN Cabling", icon: Network },
      { name: "IP Basics", icon: Globe },
      { name: "Router Setup", icon: Server },
      { name: "Connectivity Troubleshooting", icon: Workflow },
      { name: "Device Configuration", icon: Monitor },
    ],
  },
  {
    id: "digital",
    num: "05",
    title: "Digital Solutions & AI Automation",
    tagline: "Using modern tools to solve practical problems.",
    desc: "Developing practical digital projects with AI-assisted workflows, automation, dashboards and API integrations. Includes experimentation with market-data automation, Telegram notifications and cloud-hosted applications.",
    img: UNSPLASH("1550751827-4bd374c3f58b"),
    imgAlt: "Modern digital technology and automation workspace",
    available: true,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "API Integration", icon: Code2 },
      { name: "Automation", icon: Workflow },
      { name: "AI Tools", icon: Cpu },
      { name: "Cloud Apps", icon: Server },
    ],
  },
  {
    id: "design",
    num: "06",
    title: "Graphics & Digital Design",
    tagline: "Clear visuals for digital communication.",
    desc: "Creating practical graphics, social media assets, simple brand materials and interface concepts using modern design tools and structured visual layouts.",
    img: UNSPLASH("1561070791-2526d30994b5"),
    imgAlt: "Graphic design workspace with digital design tools",
    available: true,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Social Graphics", icon: PenTool },
      { name: "UI Concepts", icon: Code2 },
      { name: "Layouts", icon: Monitor },
      { name: "Brand Assets", icon: PenTool },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-20">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-10 md:mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6"><span className="font-mono text-primary text-base md:text-xl">CAPABILITIES //</span><div className="flex-1 h-px bg-border hidden md:block" /></motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">Skills &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span></motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-xl">Practical IT, digital and creative services based on my training, projects and hands-on experience.</motion.p>
          <motion.div variants={fadeUp} className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 bg-green-400/5"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" /></span><span className="font-mono text-xs text-green-400 tracking-widest">OPEN TO IT & DIGITAL PROJECTS</span></motion.div>
        </motion.div>

        <div className="space-y-14 md:space-y-24">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div key={cat.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${catIdx % 2 === 1 ? "lg:grid-flow-dense" : ""}`} id={cat.id}>
              <motion.div variants={fadeUp} className={`relative overflow-hidden ${catIdx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden"><img src={cat.img} alt={cat.imgAlt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" /><div className="absolute top-4 left-4 px-3 py-1 bg-primary font-mono text-xs font-bold text-background">{cat.num}</div><div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur border border-green-400/30 font-mono text-xs text-green-400"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" /></span>AVAILABLE</div></div>
              </motion.div>
              <motion.div variants={fadeUp} className={`space-y-6 ${catIdx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div><div className="font-mono text-primary text-xs tracking-widest mb-3">{cat.num} // {cat.id.toUpperCase()}</div><h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">{cat.title}</h2><p className="text-primary font-mono text-sm italic mb-4">{cat.tagline}</p><p className="text-muted-foreground leading-relaxed">{cat.desc}</p></div>
                <div className="flex flex-wrap gap-2">{cat.skills.map((skill, i) => <div key={i} className="flex items-center gap-2 px-3 py-2 bg-card border border-border hover:border-primary/50 transition-colors text-xs font-mono"><skill.icon className="w-3.5 h-3.5 text-primary" />{skill.name}</div>)}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
