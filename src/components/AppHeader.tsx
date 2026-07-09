"use client";

import { apps, type AppId } from "@/data/apps";

type AppHeaderProps = {
  selected: AppId;
  onSelect: (id: AppId) => void;
};

export default function AppHeader({ selected, onSelect }: AppHeaderProps) {
  const current = apps.find((a) => a.id === selected)!;

  return (
    <header className="topbar shrink-0">
      <div className="btn-group">
        {apps.map((app) => (
          <button
            key={app.id}
            type="button"
            className={selected === app.id ? "active" : ""}
            onClick={() => onSelect(app.id)}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: app.dotColor }}
            />
            {app.shortName}
          </button>
        ))}
      </div>

      <div className="flex-1" />

      <a href="#downloads" className="btn btn-primary">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
        </svg>
        {current.shortName} laden
      </a>
    </header>
  );
}