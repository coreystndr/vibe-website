import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AppDownloadCard from "@/components/AppDownloadCard";
import { apps } from "@/data/apps";

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

export default function Home() {
  return (
    <div className="shell">
      <Sidebar />

      <div className="main">
        <header className="flex h-14 shrink-0 items-center border-b border-[var(--border)] bg-[var(--bg-elevated)] px-8 max-md:pl-16">
          <div className="flex-1" />
          <a href="#downloads" className="btn btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
            </svg>
            Download
          </a>
        </header>

        <div className="content">
          <div className="content-inner">
            <div className="page-intro">
              <h1 className="page-intro__title">Desktop Apps</h1>
              <p className="page-intro__sub">
                Universal Game Launcher und Valorant Account Manager —
                native Windows-Apps zum direkten Download.
              </p>
            </div>

            <section id="downloads" className="section">
              <div className="view-header">
                <div>
                  <h2 className="view-header__title">Downloads</h2>
                  <p className="view-header__sub">
                    Wähle die App, die du installieren möchtest.
                  </p>
                </div>
                <div className="view-stats">
                  <span className="stat-pill">
                    <strong>{apps.length}</strong> verfügbar
                  </span>
                </div>
              </div>

              <div className="app-stack">
                {apps.map((app) => (
                  <AppDownloadCard key={app.id} {...app} />
                ))}
              </div>
            </section>

            <section id="install" className="section">
              <div className="view-header">
                <div>
                  <h2 className="view-header__title">Installation</h2>
                  <p className="view-header__sub">
                    So richtest du eine App auf deinem PC ein.
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

              <div className="notice-box">
                <strong>Hinweis:</strong> Der Valorant Account Manager speichert
                Passwörter im Windows Credential Manager. Nur für eigene Accounts —
                Riot Games Nutzungsbedingungen beachten.
              </div>
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