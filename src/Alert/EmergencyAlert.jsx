import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/* ─── Add to tailwind.config.js ────────────────────────────────────────────────
  theme: {
    extend: {
      keyframes: {
        flash:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
        bob:    { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.2)' } },
        popIn:  { from: { opacity: '0', transform: 'scale(0.85)' }, to: { opacity: '1', transform: 'scale(1)' } },
      },
      animation: {
        flash:  'flash 1.2s ease-in-out infinite',
        bob:    'bob 0.9s ease-in-out infinite',
        popIn:  'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
        'ping-delayed': 'ping 2s cubic-bezier(0,0,0.2,1) 1s infinite',
      },
    },
  },
──────────────────────────────────────────────────────────────────────────────── */

const EmergencyAlert = () => {
  const { token } = useParams();
  const [alertData, setAlertData] = useState(null);
  const [countdown, setCountdown] = useState(15);
  const [status, setStatus] = useState("pending"); // "pending" | "escalated" | "ignored"
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  const isHandledRef = useRef(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // ── Fetch alert ─────────────────────────────────────────────────────────────
  useEffect(() => {
    axios
      .get(`https://fire-and-smoke-backend.onrender.com/alert/${token}`)
      .then((res) => setAlertData(res.data.data))
      .catch((err) => {
        console.error("Error fetching alert:", err);
        setError("Failed to load alert. Please refresh or contact support.");
      });
  }, [token]);

  // ── Alarm sound ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!alertData) return;
    const audio = new Audio("public/alarm.mp3");
    audio.loop = true;
    audioRef.current = audio;
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.currentTime = 0; };
  }, [alertData]);

  // ── Countdown ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!alertData || status !== "pending") return;
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [alertData, status]);

  // ── Auto-escalate at 0 ───────────────────────────────────────────────────────
  useEffect(() => {
    if (countdown === 0 && status === "pending") handleEscalate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  // ── Helpers ──────────────────────────────────────────────────────────────────
  const stopAlarm = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    clearInterval(timerRef.current);
  }, []);

 const handleEscalate = useCallback(() => {
  if (isHandledRef.current) return;

  isHandledRef.current = true;
  setStatus("escalated");
  stopAlarm();

  axios.post(`https://fire-and-smoke-backend.onrender.com/alert/${token}/escalate`)
    .catch(console.error);

  // 👉 redirect after short delay (so UI animation shows)
  setTimeout(() => {
    navigate(`/`);
  }, 1500);

}, [token, stopAlarm, navigate]);

const handleIgnore = useCallback(() => {
  if (isHandledRef.current) return;

  isHandledRef.current = true;
  setStatus("ignored");
  stopAlarm();

  axios.post(`https://fire-and-smoke-backend.onrender.com/alert/${token}/ignore`)
    .catch(console.error);

  setTimeout(() => {
    navigate(`/`);
  }, 1500);

}, [token, stopAlarm, navigate]);

  // ── Countdown ring ───────────────────────────────────────────────────────────
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (countdown / 15) * circumference;
  const isUrgent = countdown <= 5;

  // ── Shared font injection ────────────────────────────────────────────────────
  const FontImport = () => (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Barlow:wght@400;500&display=swap');
      @keyframes flash  { 0%,100%{opacity:1} 50%{opacity:.5} }
      @keyframes bob    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.2)} }
      @keyframes popIn  { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
      .font-display { font-family:'Barlow Condensed',sans-serif; }
      .font-body    { font-family:'Barlow',sans-serif; }
      .anim-flash   { animation:flash 1.2s ease-in-out infinite; }
      .anim-bob     { animation:bob .9s ease-in-out infinite; }
      .anim-pop     { animation:popIn .4s cubic-bezier(.34,1.56,.64,1) both; }
    `}</style>
  );

  // ── Error ────────────────────────────────────────────────────────────────────
  if (error) return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-4">
      <FontImport />
      <span className="text-5xl">⚠️</span>
      <p className="font-body text-red-400 text-sm text-center max-w-xs px-4">{error}</p>
    </div>
  );

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (!alertData) return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-3">
      <FontImport />
      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
      <p className="font-body text-white/40 text-xs tracking-widest uppercase">Loading alert…</p>
    </div>
  );

  // ── Resolved ─────────────────────────────────────────────────────────────────
  if (status !== "pending") return (
    <div className="w-screen h-screen bg-neutral-950 flex items-center justify-center">
      <FontImport />
      <div className="anim-pop flex flex-col items-center gap-4 p-10 rounded-2xl border border-white/10 bg-white/5 max-w-sm text-center">
        <span className="text-6xl">{status === "escalated" ? "🚒" : "✅"}</span>
        <h2 className="font-display font-black text-2xl tracking-widest uppercase text-white">
          {status === "escalated" ? "Authorities Notified" : "Alert Dismissed"}
        </h2>
        <p className="font-body text-white/50 text-sm leading-relaxed">
          {status === "escalated"
            ? <></>
            : null}
          {status === "escalated"
            ? `Emergency services alerted for ${alertData.location}.`
            : `Marked as false alarm for ${alertData.location}.`}
        </p>
      </div>
    </div>
  );

  // ── Main Alert UI ─────────────────────────────────────────────────────────────
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "radial-gradient(ellipse at center, #7b1010 0%, #3d0000 50%, #0a0000 100%)" }}
    >
      <FontImport />

      {/* Pulse rings */}
      <div className="absolute w-72 h-72 rounded-full border border-red-500/40 animate-ping [animation-duration:2s]" />
      <div className="absolute w-72 h-72 rounded-full border border-red-500/30 animate-ping [animation-duration:2s] [animation-delay:1s]" />

      {/* Card */}
      <div
        className="anim-pop relative z-10 w-[90%] max-w-sm flex flex-col items-center gap-4
                   bg-black/60 backdrop-blur-xl border border-red-500/25 rounded-2xl px-8 py-8"
        style={{ boxShadow: "0 0 60px rgba(255,30,30,0.2), 0 8px 32px rgba(0,0,0,0.6)" }}
      >

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-3xl anim-bob">🔥</span>
          <h1
            className="font-display font-black text-4xl tracking-[.12em] text-white anim-flash"
            style={{ textShadow: "0 0 24px rgba(255,80,80,.8)" }}
          >
            FIRE ALERT
          </h1>
          <span className="text-3xl anim-bob [animation-delay:.4s]">🔥</span>
        </div>

        <div className="w-full h-px bg-red-500/20" />

        {/* Detail rows */}
        <div className="w-full flex flex-col gap-2">
          {[
            { label: "DEVICE",      value: alertData.deviceName },
            { label: "LOCATION",    value: alertData.location   },
            { label: "TEMPERATURE", value: `${alertData.temperature}°C`, hot: true },
          ].map(({ label, value, hot }) => (
            <div key={label} className="flex justify-between items-center bg-white/[.04] rounded-lg px-3 py-2">
              <span className="font-display font-bold text-[11px] tracking-[.15em] text-white/40 uppercase">
                {label}
              </span>
              <span className={`font-body text-sm font-medium ${hot ? "text-red-400" : "text-white"}`}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Fire image */}
        {alertData.image && (
          <img
            src={alertData.image}
            alt="Fire scene"
            className="w-full h-40 object-cover rounded-xl border border-red-500/25"
          />
        )}

        {/* Countdown ring */}
        <div className="relative w-[70px] h-[70px] flex items-center justify-center">
          <svg width={70} height={70} className="-rotate-90">
            <circle cx={35} cy={35} r={radius} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth={5} />
            <circle
              cx={35} cy={35} r={radius} fill="none"
              stroke={isUrgent ? "#f87171" : "#ffffff"}
              strokeWidth={5}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }}
            />
          </svg>
          <span className="absolute font-display font-black text-2xl text-white">{countdown}</span>
        </div>

        <p className="font-body text-[11px] text-white/50 tracking-wide text-center -mt-2">
          Auto-escalating to authorities in {countdown}s
        </p>

        <div className="w-full h-px bg-red-500/20" />

        <p className="font-display font-bold text-lg tracking-[.06em] text-white uppercase">
          Is this a real emergency?
        </p>

        {/* Action buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={handleEscalate}
            className="w-full py-3 rounded-xl font-display font-black text-base tracking-[.06em]
                       text-white bg-gradient-to-br from-red-700 to-red-500
                       hover:scale-[1.03] active:scale-[.98] transition-transform duration-150
                       shadow-[0_4px_20px_rgba(220,38,38,.45)]"
          >
            🚒 YES — Call Authorities
          </button>
          <button
            onClick={handleIgnore}
            className="w-full py-3 rounded-xl font-display font-black text-base tracking-[.06em]
                       text-white/60 bg-white/[.06] border border-white/15
                       hover:bg-white/10 hover:text-white/80
                       hover:scale-[1.03] active:scale-[.98] transition-all duration-150"
          >
            ❌ NO — False Alarm
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmergencyAlert;