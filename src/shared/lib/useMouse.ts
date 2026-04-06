import { useCallback, useEffect, useRef } from "react";

const DELAY = 100;

export interface UseMouseProps {
    onWheel: (event: WheelEvent) => void;
    delay?: number;
}

export default function useMouse({ onWheel }: UseMouseProps) {
    const lastTrigger = useRef<Date | null>(null);
    const wheelHandler = useCallback((event: WheelEvent) => {
        if (lastTrigger.current && Date.now() - lastTrigger.current.getTime() < DELAY) return;
        lastTrigger.current = new Date();
        onWheel(event);
    }, [onWheel, lastTrigger]);

    useEffect(() => {
        window.addEventListener("wheel", wheelHandler);
        return () => {
            window.removeEventListener("wheel", wheelHandler);
        };
    }, [wheelHandler]);
}