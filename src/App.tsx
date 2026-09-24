import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/nav";
import Home from "@/pages/home";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Certifications from "@/pages/certifications";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-w-[900px]">
          <Nav />
          <Home />
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="contact"><Contact /></div>
        <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
