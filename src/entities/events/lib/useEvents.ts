import eventsRequest from "../api/eventsRequest.ts";
import { useEffect, useState } from "react";
import type { Event } from "../model/eventsModel.ts";

export default function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventsRequest().then(setEvents);
  }, []);

  return events;
}
