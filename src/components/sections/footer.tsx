import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="size-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              jmr<span className="text-primary">.dev</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Julio Miguel Ricaforte. Built with
            Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
