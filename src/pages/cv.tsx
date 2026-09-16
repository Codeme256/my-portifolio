import { motion } from "framer-motion";
import { Download, Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, FileText } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const skills = [
  "IT Support & Troubleshooting",
  "Computer Maintenance",
  "Web Development",
  "Data Entry & Management",
  "Computer Networking",
  "AI & Automation",
  "Digital Tools & Productivity",
  "Graphics & Digital Design",
];

const projects = [
  {
    title: "XAU/USD Quant",
    type: "Trading Automation",
    text: "Market-analysis and signal dashboard focused on practical trading workflows, technical indicators, risk management and alerts.",
    href: "https://algo-trader-ai-caduganda25.replit.app/",
  },
  {
    title: "Community Aid for Development",
    type: "Community Technology",
    text: "Digital platform supporting youth-focused community projects, information sharing and impact reporting.",
    href: "https://community-aid.replit.app/",
  },
  {
    title: "Professional Portfolio",
    type: "Web / Portfolio",
    text: "Personal technology portfolio presenting professional skills, projects, certifications and contact channels.",
    href: "https://codeme256.github.io/my-portifolio/",
  },
];

export default function CV() {
  const printCV = () => window.print();

  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-20">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20 print:hidden" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="mb-8 print:hidden">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-5">
            <span className="font-mono text-primary text-sm tracking-[0.2em]">PROFESSIONAL.DOCUMENT //</span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Curriculum<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vitae</span></motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-muted-foreground">A concise professional profile for employers, collaborators, clients, internships and technology opportunities.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
            <button onClick={printCV} className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-background font-mono font-bold text-sm hover:bg-primary/90 transition-all"><Download className="w-4 h-4" /> DOWNLOAD / PRINT CV</button>
            <button onClick={printCV} className="inline-flex items-center gap-2 px-5 py-3 border border-primary/30 text-primary font-mono text-sm hover:bg-primary/10 transition-all"><Printer className="w-4 h-4" /> SAVE AS PDF</button>
          </motion.div>
          <p className="font-mono text-[10px] text-muted-foreground mt-3">Tip: choose “Save as PDF” in your browser print dialog to download a PDF copy.</p>
        </motion.div>

        <section id="cv-document" className="bg-card border border-border shadow-2xl print:shadow-none print:border-0 print:bg-white print:text-black">
          <div className="p-7 md:p-12">
            <header className="border-b-2 border-primary/40 pb-7 mb-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="font-mono text-xs text-primary print:text-black tracking-[0.25em] mb-2">IT & DIGITAL SOLUTIONS</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">MWESIGWA DAVID</h2>
                  <p className="mt-2 text-lg text-muted-foreground print:text-gray-700">IT Professional • Web & Digital Solutions • Data • Networking</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground print:text-gray-700 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end"><MapPin className="w-4 h-4 text-primary print:text-black" /> Uganda</div>
                  <div className="flex items-center gap-2 md:justify-end"><Phone className="w-4 h-4 text-primary print:text-black" /> +256 781 372 439</div>
                  <div className="flex items-center gap-2 md:justify-end"><Mail className="w-4 h-4 text-primary print:text-black" /> davidmwesigwa71@gmail.com</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-xs font-mono text-muted-foreground print:text-gray-700">
                <span className="inline-flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/mwesigwa-david-05010a355</span>
                <span className="inline-flex items-center gap-1.5"><Github className="w-3.5 h-3.5" /> github.com/Codeme256</span>
                <span>codeme256.github.io/my-portifolio</span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
              <div className="lg:col-span-2 space-y-9">
                <section>
                  <SectionTitle>Professional Profile</SectionTitle>
                  <p className="text-sm leading-7 text-muted-foreground print:text-gray-700">Practical IT professional with training in Information Technology and Computer Maintenance, with hands-on interests across computer support, web development, data management, networking and digital innovation. Comfortable learning new tools, troubleshooting technology issues and building practical digital solutions for people, businesses and communities.</p>
                </section>

                <section>
                  <SectionTitle>Education</SectionTitle>
                  <div className="border-l-2 border-primary/30 pl-5">
                    <h3 className="font-bold text-lg">Makerere University Jinja Campus</h3>
                    <p className="font-mono text-xs text-primary print:text-black mt-1">2024 – 2026</p>
                    <p className="text-sm text-muted-foreground print:text-gray-700 mt-2">National Certificate in Information Technology & Computer Maintenance</p>
                    <p className="text-xs text-muted-foreground print:text-gray-600 mt-2">Relevant areas: Computer Networking, Web Design, Computer Maintenance and practical IT support.</p>
                  </div>
                </section>

                <section>
                  <SectionTitle>Practical Experience</SectionTitle>
                  <div className="border-l-2 border-primary/30 pl-5">
                    <h3 className="font-bold text-lg">IT Support / Junior IT Assistant</h3>
                    <p className="text-sm text-muted-foreground print:text-gray-700 mt-2">Hands-on support involving computer maintenance, hardware and software troubleshooting, operating-system setup, software installation and updates, basic LAN cabling and connectivity support.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-5 mt-5">
                    <h3 className="font-bold text-lg">Community & Digital Projects</h3>
                    <p className="text-sm text-muted-foreground print:text-gray-700 mt-2">Developing and supporting practical digital initiatives, including community technology platforms, digital workflows, online information systems and technology-focused project ideas.</p>
                  </div>
                </section>

                <section>
                  <SectionTitle>Selected Projects</SectionTitle>
                  <div className="space-y-5">
                    {projects.map((project) => (
                      <div key={project.title} className="border border-border print:border-gray-300 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div><h3 className="font-bold">{project.title}</h3><p className="font-mono text-[10px] text-primary print:text-black mt-1 uppercase">{project.type}</p></div>
                          <a href={project.href} target="_blank" rel="noreferrer" className="print:hidden text-muted-foreground hover:text-primary"><ExternalLink className="w-4 h-4" /></a>
                        </div>
                        <p className="text-xs leading-6 text-muted-foreground print:text-gray-700 mt-2">{project.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-8">
                <section>
                  <SectionTitle>Core Skills</SectionTitle>
                  <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="px-2.5 py-1.5 border border-border print:border-gray-300 text-xs text-muted-foreground print:text-gray-700">{skill}</span>)}</div>
                </section>
                <section>
                  <SectionTitle>Professional Strengths</SectionTitle>
                  <ul className="space-y-3 text-sm text-muted-foreground print:text-gray-700">
                    <li>• Practical problem solving</li>
                    <li>• Clear communication</li>
                    <li>• Fast learner and adaptable</li>
                    <li>• Community-focused technology</li>
                    <li>• Digital research and documentation</li>
                    <li>• Teamwork and collaboration</li>
                  </ul>
                </section>
                <section>
                  <SectionTitle>Professional Links</SectionTitle>
                  <div className="space-y-3 text-xs font-mono text-muted-foreground print:text-gray-700">
                    <a href="https://github.com/Codeme256" target="_blank" rel="noreferrer" className="block hover:text-primary">GITHUB / CODEME256</a>
                    <a href="https://www.linkedin.com/in/mwesigwa-david-05010a355" target="_blank" rel="noreferrer" className="block hover:text-primary">LINKEDIN / MWESIGWA-DAVID</a>
                    <a href="https://codeme256.github.io/my-portifolio/" target="_blank" rel="noreferrer" className="block hover:text-primary">PORTFOLIO / CODEME256</a>
                  </div>
                </section>
                <section className="p-5 border border-primary/30 bg-primary/5 print:bg-gray-50 print:border-gray-300">
                  <FileText className="w-5 h-5 text-primary print:text-black mb-3" />
                  <h3 className="font-bold uppercase">References</h3>
                  <p className="text-xs text-muted-foreground print:text-gray-700 mt-2 leading-5">Professional and academic references are available upon request.</p>
                </section>
              </aside>
            </div>

            <footer className="border-t border-border print:border-gray-300 mt-9 pt-5 flex justify-between gap-4 text-[10px] font-mono text-muted-foreground print:text-gray-600">
              <span>MWESIGWA DAVID • PROFESSIONAL CV</span>
              <span>UPDATED 2026</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 mb-4"><h3 className="font-mono text-xs tracking-[0.2em] text-primary print:text-black uppercase">{children}</h3><div className="h-px flex-1 bg-border print:bg-gray-300" /></div>;
}
