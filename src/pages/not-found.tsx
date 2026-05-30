import { AlertCircle, Activity, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground overflow-hidden selection:bg-primary selection:text-background">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-30 z-0"></div>
      
      <div className="relative z-10 w-full max-w-md mx-4 p-8 bg-card border border-destructive/50 terminal-glow">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Activity className="w-24 h-24 text-destructive" />
        </div>

        <div className="flex items-center gap-3 text-destructive font-mono text-sm tracking-wider mb-6">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span>SYSTEM.ERROR: 404_NOT_FOUND</span>
        </div>

        <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">
          Route <br/> Unreachable
        </h1>
        
        <p className="text-muted-foreground font-mono mb-8">
          The requested path does not exist in the current deployment. Please re-route your connection.
        </p>

        <Link href="/">
          <div className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-background bg-destructive hover:bg-destructive/90 transition-all cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            RETURN_TO_BASE
          </div>
        </Link>
      </div>
    </div>
  );
}
