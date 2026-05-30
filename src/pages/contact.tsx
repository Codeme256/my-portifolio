import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import {
  Send, Github, Linkedin, Twitter, ExternalLink, Activity
} from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const channels = [
  {
    label: "Email",
    handle: "davidmwesigwa71@gmail.com",
    href: "mailto:davidmwesigwa71@gmail.com",
    icon: Send,
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
    desc: "Best for project briefs and detailed proposals",
  },
  {
    label: "LinkedIn",
    handle: "mwesigwa-david-05010a355",
    href: "https://www.linkedin.com/in/mwesigwa-david-05010a355",
    icon: Linkedin,
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/5",
    desc: "Professional network, collaborations, opportunities",
  },
  {
    label: "GitHub",
    handle: "github.com/codeme256",
    href: "https://github.com/codeme256",
    icon: Github,
    color: "text-foreground",
    borderColor: "border-border",
    bgColor: "bg-card",
    desc: "View code, open issues, or explore repositories",
  },
  {
    label: "WhatsApp",
    handle: "+256 781 372 439",
    href: "https://wa.me/256781372439",
    icon: SiWhatsapp,
    color: "text-green-400",
    borderColor: "border-green-400/30",
    bgColor: "bg-green-400/5",
    desc: "Quick chats, fast responses, direct coordination",
  },
  {
    label: "X (Twitter)",
    handle: "@Jacedavid2",
    href: "https://x.com/Jacedavid2",
    icon: Twitter,
    color: "text-sky-400",
    borderColor: "border-sky-400/30",
    bgColor: "bg-sky-400/5",
    desc: "Thoughts on cloud, AI, and tech in general",
  },
  {
    label: "Telegram",
    handle: "t.me/Jacedavid2",
    href: "https://t.me/Jacedavid2",
    icon: SiTelegram,
    color: "text-cyan-400",
    borderColor: "border-cyan-400/30",
    bgColor: "bg-cyan-400/5",
    desc: "Instant messaging, bot-related questions welcome",
  },
];

export default function Contact() {
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
            <span className="font-mono text-primary text-base md:text-xl">ESTABLISH.CONNECTION //</span>
            <div className="flex-1 h-px bg-border hidden md:block" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            Initiate<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Handshake</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-lg mb-6">
            Open to collaboration, internships, freelance work, and cloud or systems opportunities.<br />
            Pick a channel and let's build something together.
          </motion.p>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 bg-green-400/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR WORK — RESPOND WITHIN 24H</span>
          </motion.div>
        </motion.div>

        {/* Hero contact image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 md:mb-16 overflow-hidden aspect-[4/3] sm:aspect-[21/7] md:aspect-[21/5]"
        >
          <img
            src={UNSPLASH("1516321318423-f06f85e504b3", 1400)}
            alt="Two professionals connecting over technology — contact and collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-lg">
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                "Good systems are built by people who communicate clearly."
              </p>
              <p className="font-mono text-xs text-muted-foreground">— Mwesigwa David</p>
            </div>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {channels.map((ch, i) => (
            <motion.a
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              href={ch.href}
              target={ch.href.startsWith("mailto") ? undefined : "_blank"}
              rel={ch.href.startsWith("mailto") ? undefined : "noreferrer"}
              className={`group flex flex-col gap-4 p-6 border ${ch.borderColor} ${ch.bgColor} hover:border-opacity-80 transition-all`}
              data-testid={`link-contact-${i}`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-2.5 border ${ch.borderColor} ${ch.bgColor}`}>
                  <ch.icon className={`w-5 h-5 ${ch.color}`} />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">{ch.label}</div>
                <div className={`font-bold text-sm mb-2 group-hover:${ch.color} transition-colors`}>{ch.handle}</div>
                <p className="text-muted-foreground text-xs leading-relaxed">{ch.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mwesigwa David. All systems operational.
          </span>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Activity className="w-3 h-3 text-primary animate-pulse" />
            UPTIME: 100%
          </div>
        </div>

      </div>
    </div>
  );
}
