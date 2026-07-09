type AppFeature = {
  text: string;
};

type AppDownloadCardProps = {
  name: string;
  description: string;
  version: string;
  tech: string;
  icon: string;
  accent: "violet" | "red";
  features: AppFeature[];
  downloadUrl: string;
  fileName: string;
  fileSize: string;
};

const accentStyles = {
  violet: {
    gradient: "from-violet-600/30 to-cyan-500/20",
    badge: "text-violet-400",
    button: "bg-violet-600 hover:bg-violet-500 hover:shadow-violet-600/25",
    border: "hover:border-violet-500/30",
    icon: "bg-violet-600/20 text-violet-300",
  },
  red: {
    gradient: "from-red-600/30 to-rose-500/20",
    badge: "text-red-400",
    button: "bg-red-600 hover:bg-red-500 hover:shadow-red-600/25",
    border: "hover:border-red-500/30",
    icon: "bg-red-600/20 text-red-300",
  },
};

export default function AppDownloadCard({
  name,
  description,
  version,
  tech,
  icon,
  accent,
  features,
  downloadUrl,
  fileName,
  fileSize,
}: AppDownloadCardProps) {
  const styles = accentStyles[accent];

  return (
    <article
      className={`glass group overflow-hidden rounded-2xl transition ${styles.border}`}
    >
      <div
        className={`relative h-48 bg-gradient-to-br ${styles.gradient} flex items-center justify-center`}
      >
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-2xl text-4xl ${styles.icon} border border-white/10 backdrop-blur transition group-hover:scale-110`}
        >
          {icon}
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">
          v{version}
        </span>
      </div>

      <div className="p-6">
        <p className={`text-xs font-medium uppercase tracking-wider ${styles.badge}`}>
          {tech}
        </p>
        <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>

        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li
              key={feature.text}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={downloadUrl}
            download={fileName}
            className={`inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:shadow-lg ${styles.button}`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Für Windows installieren
          </a>
          <span className="text-center text-xs text-zinc-500 sm:text-left">
            {fileName} · {fileSize}
          </span>
        </div>
      </div>
    </article>
  );
}