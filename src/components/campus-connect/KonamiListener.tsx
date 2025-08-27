"use client";

import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { useKonamiCode } from "@/hooks/use-konami-code";

export function KonamiListener() {
  const { toast } = useToast();

  const onKonamiCode = useCallback(() => {
    toast({
      title: "✨ Easter Egg Found! ✨",
      description: "Pretty easy right.. hello from the developer! Thanks for exploring.",
      duration: 5000,
    });
  }, [toast]);

  useKonamiCode(onKonamiCode);

  return null;
}
