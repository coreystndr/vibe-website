import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppDownloadCard from "@/components/AppDownloadCard";
import { apps } from "@/data/apps";

const installSteps = [
  {
    step: "1",
    title: "Installer herunterladen",
    description: "Klicke auf „Für Windows installieren“ und lade die .exe-Datei herunter.",
  },
  {
    step: "2",
    title: "Setup ausführen",
    description: "Starte den Installer und folge den Anweisungen. Windows SmartScreen kann kurz warnen — das ist normal bei neuen Apps.",
  },
  {
    step: "3",
    title: "App starten",
    description: "Nach der Installation findest du die App im Startmenü oder auf dem Desktop.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative grid-bg flex min-h-screen items-center overflow-hidden pt-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              Desktop-Apps für Windows verfügbar
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Deine Tools für{" "}
              <span className="gradient-text">Gaming & Valorant</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Lade den Universal Game Launcher und den Valorant Account Manager
              direkt herunter — native Desktop-Apps, gebaut mit Tauri & Rust.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#downloads"
                className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
              >
                Jetzt installieren
              </a>
              <a
                href="#install"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5"
              >
                Installationsanleitung
              </a>
            </div>

            <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6">
              {apps.map((app) => (
                <div key={app.id} className="glass rounded-2xl p-5 text-left">
                  <span className="text-2xl">{app.icon}</span>
                  <p className="mt-3 font-semibold text-white">{app.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">v{app.version} · Windows</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Apps <span className="gradient-text">herunterladen</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Beide Apps sind kostenlos und laufen nativ auf Windows. Ein Klick zum Download, fertig.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {apps.map((app) => (
                <AppDownloadCard key={app.id} {...app} />
              ))}
            </div>
          </div>
        </section>

        {/* Install Guide */}
        <section id="install" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Installation in 3 Schritten
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                So installierst du Launcher und Account Manager auf deinem PC.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {installSteps.map((item) => (
                <div key={item.step} className="glass rounded-2xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/20 text-sm font-bold text-violet-300">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 glass rounded-2xl border-amber-500/20 bg-amber-500/5 p-6">
              <p className="text-sm leading-relaxed text-amber-200/80">
                <strong className="text-amber-200">Hinweis:</strong> Der Valorant Account Manager
                speichert Passwörter sicher im Windows Credential Manager. Nutze ihn nur mit
                eigenen Accounts und beachte die Riot Games Nutzungsbedingungen.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="glass rounded-3xl p-10 text-center sm:p-16">
              <h2 className="text-2xl font-bold sm:text-3xl">Gebaut mit modernem Tech-Stack</h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-400">
                Native Performance durch Rust, schöne UIs mit React & Svelte — verpackt als schlanke Desktop-Apps.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {["Tauri 2", "Rust", "React", "Svelte", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/10 p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[80px]" />
              <h2 className="relative text-3xl font-bold sm:text-4xl">
                Fragen oder Feedback?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-zinc-300">
                Probleme bei der Installation oder Feature-Wünsche? Melde dich einfach.
              </p>
              <a
                href="mailto:hello@vibecoding.dev"
                className="relative mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                hello@vibecoding.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}