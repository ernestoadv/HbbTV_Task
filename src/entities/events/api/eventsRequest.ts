import { eventsMock } from "./eventsMock";
import type { Event } from "../model/eventsModel";

export default function eventsRequest(): Promise<Event[]> {
  return Promise.resolve(eventsMock);
}
