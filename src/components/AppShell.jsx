export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="nav">
        <div className="nav-inner">
          <div className="flex items-center gap-3">
            <div className="size-6 rounded-lg bg-black" />
            <span className="font-semibold">Kayla • AI Engineering</span>
          </div>
          <nav className="flex items-center gap-2">
            <a className="btn-ghost" href="/">Home</a>
            <a className="btn-ghost" href="/case">Case Studies</a>
            <a className="btn-ghost" href="/insights">Insights</a>
            <a className="btn-primary" href="/about">About</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-neutral-200/70 bg-white/60">
        <div className="container-app py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Kayla. Built with React + Vite.
        </div>
      </footer>
    </div>
  );
}
