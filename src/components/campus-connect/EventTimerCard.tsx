"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EventTimerCard() {
  useEffect(() => {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secsEl = document.getElementById("secs");

    // Set the target date: September 9, 2025, at 6:00 PM
    const targetDate = new Date("2025-09-09T18:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = +targetDate - +now;

      if (difference <= 0) {
        if (daysEl) daysEl.innerHTML = "00";
        if (hoursEl) hoursEl.innerHTML = "00";
        if (minsEl) minsEl.innerHTML = "00";
        if (secsEl) secsEl.innerHTML = "00";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (daysEl) daysEl.innerHTML = String(days).padStart(2, "0");
      if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, "0");
      if (minsEl) minsEl.innerHTML = String(minutes).padStart(2, "0");
      if (secsEl) secsEl.innerHTML = String(seconds).padStart(2, "0");
    };

    const interval = setInterval(updateCountdown, 1000);

    // Initial call to display the timer right away
    updateCountdown();

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const renderUnit = (id: string, label: string) => (
    <div className="flex flex-col items-center timer-box">
      <span id={id} className="text-3xl font-bold">00</span>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-baseline">
          <CardTitle className="font-headline">GFG Orientation</CardTitle>
          <span className="text-xs text-muted-foreground">(Ending on 9th September)</span>
        </div>
        <CardDescription>Event ends in...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center text-center font-mono countdown-container">
          {renderUnit("days", "DAYS")}
          <div className="text-3xl font-bold text-muted-foreground">:</div>
          {renderUnit("hours", "HOURS")}
          <div className="text-3xl font-bold text-muted-foreground">:</div>
          {renderUnit("mins", "MINS")}
          <div className="text-3xl font-bold text-muted-foreground">:</div>
          {renderUnit("secs", "SECS")}
        </div>
      </CardContent>
    </Card>
  );
}
