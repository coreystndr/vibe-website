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
      <div className="mb-3.5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full"
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

      <p className="mb-3.5 text-[13px] leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>

      <div className="mb-4">
        {features.map((feature) => (
          <div key={feature.text} className="feature-row">
            <span className="feature-row__dot" />
            {feature.text}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-3.5 sm:flex-row sm:items-center sm:justify-between">
        <a href={downloadUrl} download={fileName} className="btn btn-primary h-[38px] justify-center px-4">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
          </svg>
          Installieren
        </a>
        <span className="text-[11px] text-[var(--text-tertiary)]">
          {fileName} · {fileSize}
        </span>
      </div>
    </article>
  );
}