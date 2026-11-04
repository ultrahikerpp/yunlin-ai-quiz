import { useState } from "react";
import PixelButton from "./PixelButton";
import styles from "./HomePage.module.css";

const IS_MOCK = !import.meta.env.VITE_GAS_URL;

export default function HomePage({ onStart, error }) {
  const [id, setId] = useState("");
  const [logoOk, setLogoOk] = useState(true);

  const handleStart = () => {
    const trimmed = id.trim();
    if (!trimmed) return;
    onStart(trimmed);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleStart();
  };

  return (
    <div className={`screen ${styles.home}`}>
      {/* Stars bg */}
      <div className={styles.stars} aria-hidden />

      <div className={styles.content}>
        {/* County logo — falls back to a text badge if the image file is absent */}
        <div className={styles.logoBar}>
          {logoOk ? (
            <img
              src={`${import.meta.env.BASE_URL}logo_yunlin.png`}
              alt="雲林縣政府"
              className={styles.logo}
              onError={() => setLogoOk(false)}
            />
          ) : (
            <div className={styles.logoFallback}>雲林縣政府</div>
          )}
        </div>

        {/* Title */}
        <div className={styles.titleWrap}>
          <div className={styles.titleSub} aria-hidden>
            ◆ ◆ ◆
          </div>
          <h1 className={`${styles.title} glow-yellow`}>
            AI
            <br />
            QUIZ
          </h1>
          <div className={styles.titleSub2}>AI 知識闖關</div>
          <div className={styles.titleSub} aria-hidden>
            ◆ ◆ ◆
          </div>
        </div>

        {/* ID Entry box */}
        <div className={`pixel-box ${styles.panel}`}>
          <label className={styles.label} htmlFor="player-id">
            輸入您的學員 ID
          </label>
          <input
            id="player-id"
            className={styles.input}
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={handleKey}
            placeholder="your_id_here"
            maxLength={32}
            autoFocus
          />

          {error && <div className={styles.error}>⚠ {error}</div>}
          {IS_MOCK && (
            <div className={styles.mockBadge}>DEMO MODE — no GAS URL set</div>
          )}

          <PixelButton onClick={handleStart} disabled={!id.trim()} fullWidth>
            ▶ 開始闖關
          </PixelButton>
        </div>

        <div className={styles.footer}>
          <span className="blink">INSERT COIN</span> &nbsp;©2026 雲林縣政府 x 中華電信
          AI 課程
        </div>
      </div>
    </div>
  );
}
