export default function Footer() {
  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-[var(--border)] bg-[var(--bg-elevated)] px-5 text-[11px] text-[var(--text-tertiary)]">
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
        Ready
      </span>
      <span>Windows · Tauri 2</span>
    </footer>
  );
}