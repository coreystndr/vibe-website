"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AppHeader from "@/components/AppHeader";
import AppDownloadCard from "@/components/AppDownloadCard";
import DemoSection from "@/components/DemoSection";
import { apps, type AppId } from "@/data/apps";

const installSteps = [
  {
    step: "01",
    title: "Installer herunterladen",
    description:
      "Klicke auf „Installieren“ und speichere die .exe-Datei auf deinem PC.",
  },
  {
    step: "02",
    title: "Setup ausführen",
    description:
      "Starte den Installer und folge den Anweisungen. SmartScreen-Warnungen bei neuen Apps sind normal.",
  },
  {
    step: "03",
    title: "App starten",
    description:
      "Nach der Installation findest du die App im Windows-Startmenü.",
  },
];

export default function HomeClient() {
  const [selected, setSelected] = useState<AppId>("launcher");
  const currentApp = apps.find((a) => a.id === selected)!;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "launcher" || hash === "account-manager") {
      setSelected(hash);
    }
  }, []);

  const selectApp = (id: AppId) => {
    setSelected(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="shell">
      <Sidebar selected={selected} onSelect={selectApp} />

      <div className="main">
        <AppHeader selected={selected} onSelect={selectApp} />

        <div className="content">
          <div className="content-inner">
            <div className="page-intro">
              <h1 className="page-intro__title">{currentApp.name}</h1>
              <p className="page-intro__sub">{currentApp.description}</p>
            </div>

            <DemoSection selected={selected} />

            <section id="downloads" className="section">
              <div className="view-header">
                <div>
                  <h2 className="view-header__title">Download</h2>
                  <p className="view-header__sub">
                    {currentApp.shortName} für Windows installieren.
                  </p>
                </div>
                <div className="view-stats">
                  <span className="stat-pill">
                    v<strong>{currentApp.version}</strong>
                  </span>
                  <span className="stat-pill">
                    <strong>{currentApp.fileSize}</strong>
                  </span>
                </div>
              </div>

              <AppDownloadCard {...currentApp} />
            </section>

            <section id="install" className="section">
              <div className="view-header">
                <div>
                  <h2 className="view-header__title">Installation</h2>
                  <p className="view-header__sub">
                    So richtest du die App auf deinem PC ein.
                  </p>
                </div>
              </div>

              <div className="install-steps">
                {installSteps.map((item) => (
                  <div key={item.step} className="install-step">
                    <div className="install-step__num">{item.step}</div>
                    <h3 className="install-step__title">{item.title}</h3>
                    <p className="install-step__desc">{item.description}</p>
                  </div>
                ))}
              </div>

              {selected === "account-manager" && (
                <div className="notice-box">
                  <strong>Hinweis:</strong> Der Valorant Account Manager speichert
                  Passwörter im Windows Credential Manager. Nur für eigene Accounts —
                  Riot Games Nutzungsbedingungen beachten.
                </div>
              )}
            </section>

            <section id="contact" className="section">
              <div className="view-header">
                <div>
                  <h2 className="view-header__title">Kontakt</h2>
                  <p className="view-header__sub">
                    Fragen, Bugs oder Feature-Wünsche.
                  </p>
                </div>
              </div>

              <div className="settings-card">
                <p className="mb-6 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  Probleme bei der Installation oder Feedback zur App? Schreib uns.
                </p>
                <a href="mailto:hello@vibecoding.dev" className="btn">
                  hello@vibecoding.dev
                </a>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}