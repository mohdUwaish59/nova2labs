import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="nova2labs" 
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A freelance engineering agency delivering AI solutions, cloud infrastructure, custom software development, and DevOps services for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Connect</h4>
          <div className="mt-4 flex gap-3">
            <a href="mailto:contact@nova2labs.com" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} nova2labs. All rights reserved.</span>
          <span className="font-mono">v1.0</span>
        </div>
      </div>
    </footer>
  );
}
