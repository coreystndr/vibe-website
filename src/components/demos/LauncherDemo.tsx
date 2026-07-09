"use client";

import { useEffect, useState } from "react";

const games = [
  { name: "Cyberpunk 2077", platform: "Steam", color: "#1b2838", hours: "42h" },
  { name: "Elden Ring", platform: "Steam", color: "#2a1f3d", hours: "128h" },
  { name: "Fortnite", platform: "Epic", color: "#1a2744", hours: "18h" },
  { name: "Hades II", platform: "Steam", color: "#3d2010", hours: "6h" },
  { name: "Valorant", platform: "Riot", color: "#3a1518", hours: "210h" },
  { name: "Witcher 3", platform: "GOG", color: "#1a3020", hours: "95h" },
];

const scenes = ["Bibliothek", "Suche", "Spielstart"];

export default function LauncherDemo() {
  const [scene, setScene] = useState(0);
  const [search, setSearch] = useState("");
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setScene(0);
      setSearch("");
      setHighlight(-1);

      timers.push(setTimeout(() => {
        setScene(1);
        let i = 0;
        const term = "elden";
        const type = () => {
          if (i <= term.length) {
            setSearch(term.slice(0, i));
            i++;
            timers.push(setTimeout(type, 120));
          }
        };
        type();
      }, 2800));

      timers.push(setTimeout(() => {
        setScene(2);
        setHighlight(1);
      }, 6200));
    };

    run();
    const loop = setInterval(run, 10000);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, []);

  const filtered =
    search.length > 0
      ? games.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()))
      : games;

  return (
    <div className="demo-app">
      <div className="demo-app__chrome">
        <span className="demo-app__dot demo-app__dot--red" />
        <span className="demo-app__dot demo-app__dot--yellow" />
        <span className="demo-app__dot demo-app__dot--green" />
        <span className="demo-app__title">Universal Game Launcher</span>
        <span className="demo-app__scene">{scenes[scene]}</span>
      </div>

      <div className="demo-app__body demo-app__body--launcher">
        <div className="demo-launcher-sidebar">
          <div className="demo-launcher-brand">
            <div className="demo-launcher-brand__icon" />
            <div>
              <div className="demo-launcher-brand__name">Game Launcher</div>
              <div className="demo-launcher-brand__sub">Unified library</div>
            </div>
          </div>
          <div className="demo-launcher-nav active">Library</div>
          <div className="demo-launcher-nav">Settings</div>
        </div>

        <div className="demo-launcher-main">
          <div className="demo-launcher-topbar">
            <div className="demo-launcher-search">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" strokeLinecap="round" />
              </svg>
              <span>{search || "Search your library…"}</span>
              {search && <span className="demo-cursor" />}
            </div>
            <div className="demo-launcher-pills">
              <span className="active">Name</span>
              <span>Playtime</span>
              <span>Recent</span>
            </div>
          </div>

          <div className="demo-launcher-grid">
            {filtered.map((game, i) => (
              <div
                key={game.name}
                className={`demo-game-card ${highlight === i ? "demo-game-card--highlight" : ""}`}
              >
                <div
                  className="demo-game-card__cover"
                  style={{ background: `linear-gradient(160deg, ${game.color}, #0e0e10)` }}
                >
                  <span className="demo-game-card__badge">{game.platform}</span>
                  {highlight === i && (
                    <div className="demo-game-card__play">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="demo-game-card__info">
                    <div className="demo-game-card__name">{game.name}</div>
                    <div className="demo-game-card__sub">{game.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}