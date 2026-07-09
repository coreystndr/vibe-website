import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: "⚡",
    title: "Blitzschnell",
    description:
      "Next.js mit Server-Side Rendering und Edge-Deployment für maximale Performance.",
  },
  {
    icon: "🎨",
    title: "Modernes Design",
    description:
      "Elegante UI mit Tailwind CSS, Animationen und responsivem Layout für jedes Gerät.",
  },
  {
    icon: "🚀",
    title: "Sofort live",
    description:
      "Automatisches Deployment auf Vercel bei jedem Git-Push — von Code zu Produktion in Sekunden.",
  },
  {
    icon: "🔒",
    title: "Sicher & Skalierbar",
    description:
      "TypeScript, ESLint und bewährte Architektur für wartbare, zukunftssichere Projekte.",
  },
];

const projects = [
  {
    title: "Portfolio Website",
    tech: "Next.js · Tailwind · Vercel",
    description: "Eine elegante persönliche Website mit animiertem Hero und Projektgalerie.",
    gradient: "from-violet-600/30 to-cyan-500/20",
  },
  {
    title: "SaaS Dashboard",
    tech: "React · TypeScript · API",
    description: "Interaktives Admin-Dashboard mit Echtzeit-Daten und dunklem Theme.",
    gradient: "from-fuchsia-600/30 to-violet-500/20",
  },
  {
    title: "E-Commerce Store",
    tech: "Next.js · Stripe · CMS",
    description: "Vollständiger Online-Shop mit Warenkorb, Checkout und Produktverwaltung.",
    gradient: "from-cyan-600/30 to-blue-500/20",
  },
];

const stats = [
  { value: "99+", label: "Lighthouse Score" },
  { value: "<1s", label: "Ladezeit" },
  { value: "100%", label: "Responsive" },
  { value: "24/7", label: "Uptime" },
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
              Jetzt auf Vercel deployed
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Baue Websites mit{" "}
              <span className="gradient-text">Vibe & Code</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              VibeCoding erstellt moderne, performante Web-Apps — von der ersten
              Zeile Code bis zum Live-Deployment auf Vercel.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
              >
                Projekte ansehen
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5"
              >
                Kontakt aufnehmen
              </a>
            </div>

            <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Warum <span className="gradient-text">VibeCoding</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Alles was du brauchst für eine professionelle Web-Präsenz — in einem modernen Stack.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass group rounded-2xl p-6 transition hover:border-violet-500/30 hover:bg-white/[0.06]"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projekte</h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Beispiele für das, was wir bauen können.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="glass group overflow-hidden rounded-2xl transition hover:border-violet-500/20"
                >
                  <div
                    className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
                      {project.tech}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="glass rounded-3xl p-10 text-center sm:p-16">
              <h2 className="text-2xl font-bold sm:text-3xl">Unser Tech-Stack</h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-400">
                Bewährte Technologien für schnelle Entwicklung und zuverlässiges Deployment.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"].map(
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
                Bereit für dein nächstes Projekt?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-zinc-300">
                Lass uns gemeinsam etwas Großartiges bauen. Von der Idee bis zum Live-Deployment —
                wir begleiten dich auf dem gesamten Weg.
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