"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function EventTimerCard() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const eventDate = new Date("2024-09-09T18:00:00");

    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
    
    // Set initial time left
    setTimeLeft(calculateTimeLeft());

    // Update time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const renderUnit = (value: number | undefined, label: string) => (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold">{value !== undefined ? String(value).padStart(2, "0") : '00'}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );

  const timerComponents = timeLeft ? (
    <>
      {renderUnit(timeLeft.days, "DAYS")}
      <div className="text-3xl font-bold text-muted-foreground">:</div>
      {renderUnit(timeLeft.hours, "HOURS")}
      <div className="text-3xl font-bold text-muted-foreground">:</div>
      {renderUnit(timeLeft.minutes, "MINS")}
      <div className="text-3xl font-bold text-muted-foreground">:</div>
      {renderUnit(timeLeft.seconds, "SECS")}
    </>
  ) : (
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <div className="text-3xl font-bold text-muted-foreground">:</div>}
          <div className="flex flex-col items-center gap-1">
            <Skeleton className="h-8 w-10" />
            <Skeleton className="h-3 w-8" />
          </div>
        </div>
      ))}
    </>
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
        <div className="flex justify-around items-center text-center font-mono">
          {timerComponents}
        </div>
      </CardContent>
    </Card>
  );
}
