import { KeyMap, Keys } from "../config/keys";
import { useCallback, useEffect, useRef } from "react";

const DELAY = 100;

export interface UseKeyboardProps {
  onKeyDown: (key: string) => void;
}

export default function useKeyboard({ onKeyDown }: UseKeyboardProps) {
  const lastTrigger = useRef<Date | null>(null);
  const keyDownHandler = useCallback((event: KeyboardEvent) => {
    const key = KeyMap[event.key] || KeyMap[event.code] || KeyMap[event?.keyCode] || KeyMap[(event as unknown as { keyIdentifier: string })?.keyIdentifier];
    if (!key) return;
    if (lastTrigger.current && Date.now() - lastTrigger.current.getTime() < DELAY && key !== Keys.Enter) return;
    lastTrigger.current = new Date();
    onKeyDown(key);
  }, [onKeyDown]);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);
}