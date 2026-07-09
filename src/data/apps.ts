export const apps = [
  {
    id: "launcher",
    name: "Universal Game Launcher",
    description:
      "Starte alle deine Spiele von einer zentralen Bibliothek. Automatischer Scan, Favoriten, Cover-Art und Plattform-Filter inklusive.",
    version: "0.1.0",
    tech: "Tauri · Svelte · Rust",
    icon: "🎮",
    accent: "violet" as const,
    features: [
      { text: "Spiele-Bibliothek mit Suche & Sortierung" },
      { text: "Steam, Epic, GOG & manuelle Spiele" },
      { text: "Favoriten, Playtime-Tracking & Cover-Art" },
      { text: "System-Tray & schneller Spielestart" },
    ],
    downloadUrl: "/downloads/universal-game-launcher-setup.exe",
    fileName: "Universal-Game-Launcher-Setup.exe",
    fileSize: "3.6 MB",
  },
  {
    id: "account-manager",
    name: "Valorant Account Manager",
    description:
      "Wechsle schnell zwischen deinen Riot/Valorant-Accounts. Passwörter sicher im Windows Credential Manager gespeichert.",
    version: "0.1.0",
    tech: "Tauri · React · Rust",
    icon: "🎯",
    accent: "red" as const,
    features: [
      { text: "Mehrere Accounts verwalten & durchsuchen" },
      { text: "Sichere Passwort-Speicherung via Keyring" },
      { text: "One-Click Account-Wechsel mit Auto-Login" },
      { text: "System-Tray & globaler Hotkey (Ctrl+Shift+V)" },
    ],
    downloadUrl: "/downloads/valorant-account-manager-setup.exe",
    fileName: "Valorant-Account-Manager-Setup.exe",
    fileSize: "3.2 MB",
  },
];