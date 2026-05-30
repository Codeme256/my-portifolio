import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certAI from "@assets/cert-ai.png";
import certProduct from "@assets/cert-product.png";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const certs = [
  {
    id: "ai-website",
    title: "Build Your Website in 10 Minutes With AI",
    issuer: "Build Fast With AI",
    issuerHandle: "Satvik Paramkusham — Founder, Build Fast With AI",
    date: "March 13, 2025",
    image: certAI,
    imgAlt: "Certificate of Participation — Build Your Website in 10 Minutes With AI",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    bgColor: "bg-yellow-400/5",
  },
  {
    id: "ai-crash-course",
    title: "The Complete AI Crash Course",
    issuer: "Product Space",
    issuerHandle: "Certificate ID: PSCERT-E104G28433",
    date: "05 March, 2026",
    image: certProduct,
    imgAlt: "Certificate of Participation — The Complete AI Crash Course by Product Space",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/5",
  },
];

const learningAreas = [
  { label: "Cloud Architecture", img: UNSPLASH("1544197150-b99a580bb7a8", 400) },
  { label: "AI & Machine Learning", img: UNSPLASH("1620712943543-bcc4688e7485", 400) },
  { label: "Web Development", img: UNSPLASH("1547658719-da2b51169166", 400) },
  { label: "Forex & Trading Systems", img: UNSPLASH("1611974789855-9c2a0a7236a3", 400) },
];

export default function Certifications() {
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
            <span className="font-mono text-primary text-base md:text-xl">VERIFIED.CREDENTIALS //</span>
            <div className="flex-1 h-px bg-border hidden md:block" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
            Certifi-<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">cations</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground font-mono text-sm max-w-lg">
            Verified credentials from completed programs. Every certificate represents practical learning applied to real work.
          </motion.p>
        </motion.div>

        {/* Certificate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:mb-24">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`group bg-card border ${cert.borderColor} hover:border-opacity-80 transition-all overflow-hidden`}
              data-testid={`card-cert-${cert.id}`}
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.imgAlt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />
              </div>

              {/* Card info */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 p-2 rounded-sm ${cert.bgColor} border ${cert.borderColor} flex-shrink-0`}>
                    <Award className={`w-4 h-4 ${cert.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground font-mono text-xs mb-1">{cert.issuer}</p>
                    <p className="text-muted-foreground/60 font-mono text-xs">{cert.issuerHandle}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                  <span className={`px-2 py-0.5 ${cert.bgColor} border ${cert.borderColor} ${cert.color} font-mono text-xs`}>
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning areas with images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <span className="font-mono text-primary text-sm tracking-wider">ACTIVE LEARNING AREAS</span>
            <div className="flex-1 h-px bg-border/50" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {learningAreas.map((area, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="group relative aspect-[4/3] overflow-hidden"
                data-testid={`card-learning-${i}`}
              >
                <img
                  src={area.img}
                  alt={area.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-mono text-xs text-primary tracking-wider">{area.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
