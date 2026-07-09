"use client";

import { useEffect, useState } from "react";

const accounts = [
  { label: "Main Account", user: "Player#EU1", region: "EU", color: "#ff4655", last: "2h ago" },
  { label: "Smurf", user: "AltAcc#EU2", region: "EU", color: "#3b82f6", last: "1d ago" },
  { label: "NA Alt", user: "NAPlayer#NA1", region: "NA", color: "#22c55e", last: "3d ago" },
];

const scenes = ["Accounts", "Wechsel", "Auto-Login"];

export default function AccountManagerDemo() {
  const [scene, setScene] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setScene(0);
      setActiveIdx(0);
      setStatus("");

      timers.push(setTimeout(() => {
        setScene(1);
        setActiveIdx(1);
        setStatus("Riot Client wird beendet…");
      }, 3000));

      timers.push(setTimeout(() => {
        setStatus("Client wird gestartet…");
      }, 4200));

      timers.push(setTimeout(() => {
        setScene(2);
        setStatus("Login wird ausgefüllt…");
      }, 5400));

      timers.push(setTimeout(() => {
        setStatus("Fertig — AltAcc#EU2 aktiv");
      }, 6800));
    };

    run();
    const loop = setInterval(run, 10000);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="demo-app">
      <div className="demo-app__chrome">
        <span className="demo-app__dot demo-app__dot--red" />
        <span className="demo-app__dot demo-app__dot--yellow" />
        <span className="demo-app__dot demo-app__dot--green" />
        <span className="demo-app__title">Valorant Account Manager</span>
        <span className="demo-app__scene">{scenes[scene]}</span>
      </div>

      <div className="demo-app__body demo-app__body--account">
        <div className="demo-account-header">
          <div>
            <div className="demo-account-header__title">Accounts</div>
            <div className="demo-account-header__sub">{accounts.length} gespeichert</div>
          </div>
          <div className="demo-account-search">Suche…</div>
        </div>

        {status && (
          <div className={`demo-account-status ${scene >= 1 ? "demo-account-status--visible" : ""}`}>
            <span className="demo-account-status__dot" />
            {status}
          </div>
        )}

        <div className="demo-account-list">
          {accounts.map((acc, i) => (
            <div
              key={acc.user}
              className={`demo-account-card ${activeIdx === i && scene >= 1 ? "demo-account-card--active" : ""}`}
              style={{ borderLeftColor: acc.color }}
            >
              <div className="demo-account-card__main">
                <div className="demo-account-card__label">{acc.label}</div>
                <div className="demo-account-card__user">{acc.user}</div>
                <div className="demo-account-card__meta">
                  {acc.region} · {acc.last}
                </div>
              </div>
              {activeIdx === i && scene >= 1 && (
                <div className="demo-account-card__switch">Wechseln…</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}