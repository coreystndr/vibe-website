type AppFeature = {
  text: string;
};

type AppDownloadCardProps = {
  id: string;
  name: string;
  description: string;
  version: string;
  tech: string;
  dotColor: string;
  features: AppFeature[];
  downloadUrl: string;
  fileName: string;
  fileSize: string;
};

export default function AppDownloadCard({
  id,
  name,
  description,
  version,
  tech,
  dotColor,
  features,
  downloadUrl,
  fileName,
  fileSize,
}: AppDownloadCardProps) {
  return (
    <article id={id} className="settings-card">
      <div className="mb-6 flex items-start justify-between gap-6">
        <div className="flex items-start gap-3">
          <span
            className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ background: dotColor }}
          />
          <div>
            <h3 className="settings-title">{name}</h3>
            <p className="settings-desc">{tech}</p>
          </div>
        </div>
        <span className="stat-pill shrink-0">
          v<strong>{version}</strong>
        </span>
      </div>

      <p className="mb-6 text-[14px] leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>

      <ul className="feature-list mb-8">
        {features.map((feature) => (
          <li key={feature.text}>{feature.text}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={downloadUrl}
          download={fileName}
          className="btn btn-primary h-10 justify-center px-5"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
          </svg>
          Installieren
        </a>
        <span className="text-[12px] text-[var(--text-tertiary)]">
          {fileName} · {fileSize}
        </span>
      </div>
    </article>
  );
}