export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} VibeCoding. Mit Leidenschaft gebaut.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}