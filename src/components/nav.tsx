import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "HOME" },
  { href: "/skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/certifications", label: "CERTS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-background/90 backdrop-blur border-b border-border/50">
      <Link href="/" className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-primary animate-pulse" />
        <span className="font-mono font-bold text-primary tracking-widest text-sm">MD.SYS</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-mono text-xs tracking-widest transition-colors ${
              location === link.href
                ? "text-primary border-b border-primary pb-0.5"
                : "text-muted-foreground hover:text-primary"
            }`}
            data-testid={`nav-${link.label.toLowerCase()}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        data-testid="button-mobile-menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border/50 flex flex-col py-4 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-6 py-3 font-mono text-sm tracking-widest transition-colors ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
