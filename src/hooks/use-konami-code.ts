"use client";

import { useEffect, useState, useCallback } from "react";

export const useKonamiCode = (action: () => void) => {
  const [keys, setKeys] = useState<string[]>([]);
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const handler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setKeys([]);
        return;
      }

      const newKeys = [...keys, key];
      const newKeysString = newKeys.join(",");
      const konamiString = konamiSequence.join(",");

      if (newKeysString === konamiString) {
        action();
        setKeys([]);
      } else if (!konamiString.startsWith(newKeysString)) {
        if (konamiSequence[0] === key) {
          setKeys([key]);
        } else {
          setKeys([]);
        }
      } else {
        setKeys(newKeys);
      }
    },
    [keys, action, konamiSequence]
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
};
