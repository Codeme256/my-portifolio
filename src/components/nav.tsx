import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#certifications", label: "CERTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-background/90 backdrop-blur border-b border-border/50">
      <button onClick={() => go("#home")} className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-primary animate-pulse" />
        <span className="font-mono font-bold text-primary tracking-widest text-sm">MD.SYS</span>
      </button>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <button key={link.href} onClick={() => go(link.href)} className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors">
            {link.label}
          </button>
        ))}
      </div>

      <button className="md:hidden text-muted-foreground hover:text-primary transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }} className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border/50 flex flex-col py-4 md:hidden">
            {links.map((link) => (
              <button key={link.href} onClick={() => go(link.href)} className="text-left px-6 py-3 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
