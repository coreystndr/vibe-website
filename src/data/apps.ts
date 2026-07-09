export type AppId = "launcher" | "account-manager";

export const apps = [
  {
    id: "launcher" as const,
    shortName: "Game Launcher",
    name: "Universal Game Launcher",
    description:
      "Zentrale Spiele-Bibliothek mit automatischem Scan, Favoriten, Cover-Art und Plattform-Filter.",
    version: "0.1.0",
    tech: "Tauri · Svelte · Rust",
    dotColor: "#3b82f6",
    accent: "#3b82f6",
    features: [
      { text: "Spiele-Bibliothek mit Suche & Sortierung" },
      { text: "Steam, Epic, GOG & manuelle Spiele" },
      { text: "Favoriten, Playtime-Tracking & Cover-Art" },
      { text: "System-Tray & schneller Spielestart" },
    ],
    downloadUrl: "/downloads/universal-game-launcher-setup.exe",
    fileName: "Universal-Game-Launcher-Setup.exe",
    fileSize: "3.6 MB",
    demoScenes: [
      "Bibliothek mit allen installierten Spielen",
      "Suche & Filter nach Plattform",
      "Spiel starten mit einem Klick",
    ],
  },
  {
    id: "account-manager" as const,
    shortName: "Account Manager",
    name: "Valorant Account Manager",
    description:
      "Schneller Wechsel zwischen Riot/Valorant-Accounts. Passwörter sicher im Windows Credential Manager.",
    version: "0.1.0",
    tech: "Tauri · React · Rust",
    dotColor: "#ef4444",
    accent: "#ff4655",
    features: [
      { text: "Mehrere Accounts verwalten & durchsuchen" },
      { text: "Sichere Passwort-Speicherung via Keyring" },
      { text: "One-Click Account-Wechsel mit Auto-Login" },
      { text: "System-Tray & Hotkey (Ctrl+Shift+V)" },
    ],
    downloadUrl: "/downloads/valorant-account-manager-setup.exe",
    fileName: "Valorant-Account-Manager-Setup.exe",
    fileSize: "3.2 MB",
    demoScenes: [
      "Accounts auf einen Blick verwalten",
      "Schnell zwischen Accounts wechseln",
      "Auto-Login in den Riot Client",
    ],
  },
];

export function getApp(id: AppId) {
  return apps.find((a) => a.id === id)!;
}