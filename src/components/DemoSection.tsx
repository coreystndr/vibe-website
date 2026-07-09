"use client";

import { type AppId, getApp } from "@/data/apps";
import LauncherDemo from "./demos/LauncherDemo";
import AccountManagerDemo from "./demos/AccountManagerDemo";

type DemoSectionProps = {
  selected: AppId;
};

export default function DemoSection({ selected }: DemoSectionProps) {
  const app = getApp(selected);

  return (
    <section id="demo" className="section">
      <div className="view-header">
        <div>
          <h2 className="view-header__title">Demo</h2>
          <p className="view-header__sub">
            So sieht {app.shortName} in Aktion aus.
          </p>
        </div>
        <div className="view-stats">
          <span className="stat-pill">
            <span
              className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "#22c55e" }}
            />
            Live-Vorschau
          </span>
        </div>
      </div>

      <div className="demo-wrapper">
        {selected === "launcher" ? <LauncherDemo /> : <AccountManagerDemo />}
      </div>

      <ul className="demo-scenes">
        {app.demoScenes.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
}