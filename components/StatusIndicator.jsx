"use client";

import { useEffect, useState } from "react";
import { status } from "@/lib/data";

export default function StatusIndicator() {
  // null = ainda não montou no cliente (evita mismatch de hidratação).
  const [online, setOnline] = useState(null);

  useEffect(() => {
    const check = () => {
      const h = new Date().getHours();
      setOnline(h >= status.startHour && h < status.endHour);
    };
    check();
    // Reavalia de minuto em minuto pra virar o estado ao cruzar o horário.
    const id = setInterval(check, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const isOnline = online !== false; // antes de montar, assume online
  const label = isOnline ? status.onlineLabel : status.offlineLabel;

  return (
    <span
      className={`mn-status ${isOnline ? "is-online" : "is-offline"}`}
      title={status.tooltip}
    >
      <span className="mn-live" />
      {label}
      <span className="mn-status-tip">{status.tooltip}</span>
    </span>
  );
}
