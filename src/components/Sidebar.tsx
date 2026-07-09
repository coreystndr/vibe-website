"use client";

import { useState } from "react";

const links = [
  { href: "#downloads", label: "Downloads", icon: "download" },
  { href: "#install", label: "Installation", icon: "settings" },
  { href: "#contact", label: "Kontakt", icon: "mail" },
];

function Icon({ name, size = 14 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    grid: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    download: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
      </svg>
    ),
    settings: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    library: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Menü"
      >
        <Icon name="grid" size={13} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 flex w-[228px] flex-col
          border-r border-[var(--border)] bg-[var(--bg-elevated)]
          transition-transform md:static md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center gap-2.5 border-b border-[var(--border)] px-4 py-[18px] pb-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius)] border border-[rgba(59,130,246,0.2)] bg-[var(--accent-muted)] text-[var(--accent)]">
            <Icon name="grid" size={16} />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-tight leading-tight">
              VibeCoding
            </div>
            <div className="mt-px text-[11px] text-[var(--text-tertiary)]">
              Desktop apps
            </div>
          </div>
        </div>

        <div className="mx-3 mt-2.5 mb-1 flex items-center justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-xs text-[var(--text-secondary)]">
          <span>Verfügbar</span>
          <strong className="font-semibold text-[var(--text)]">2 Apps</strong>
        </div>

        <div className="px-4 pb-1.5 pt-3.5 text-[11px] font-medium text-[var(--text-tertiary)]">
          Navigation
        </div>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative mx-2.5 mb-px flex w-[calc(100%-20px)] items-center gap-2 rounded-[var(--radius)] px-2.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
            onClick={() => setOpen(false)}
          >
            <Icon name={link.icon} size={14} />
            {link.label}
          </a>
        ))}

        <div className="px-4 pb-1.5 pt-3.5 text-[11px] font-medium text-[var(--text-tertiary)]">
          Apps
        </div>

        <a
          href="#launcher"
          className="relative mx-2.5 mb-px flex w-[calc(100%-20px)] items-center gap-2 rounded-[var(--radius)] px-2.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
          onClick={() => setOpen(false)}
        >
          <span
            className="h-[7px] w-[7px] shrink-0 rounded-full"
            style={{ background: "#3b82f6" }}
          />
          Game Launcher
        </a>
        <a
          href="#account-manager"
          className="relative mx-2.5 mb-px flex w-[calc(100%-20px)] items-center gap-2 rounded-[var(--radius)] px-2.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
          onClick={() => setOpen(false)}
        >
          <span
            className="h-[7px] w-[7px] shrink-0 rounded-full"
            style={{ background: "#ef4444" }}
          />
          Account Manager
        </a>
      </aside>
    </>
  );
}