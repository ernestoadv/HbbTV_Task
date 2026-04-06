import { KeyMap } from "../config/keys";
import { useCallback, useEffect, useRef } from "react";

const DELAY = 100;

export interface UseKeyboardProps {
  onKeyDown: (key: string) => void;
}

export default function useKeyboard({ onKeyDown }: UseKeyboardProps) {
  const lastTrigger = useRef<Date | null>(null);
  const keyDownHandler = useCallback((event: KeyboardEvent) => {
    if (lastTrigger.current && Date.now() - lastTrigger.current.getTime() < DELAY) return;
    lastTrigger.current = new Date();
    onKeyDown(KeyMap[event.key] || KeyMap[event.code] || KeyMap[event?.keyCode] || KeyMap[(event as unknown as { keyIdentifier: string })?.keyIdentifier]);
  }, [onKeyDown]);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);
}