import Container from "./atoms/eventCardContainer";
import Image from "./atoms/eventCardImage";
import Labels from "./elements/eventCardLabels";
import Subtitle from "./atoms/eventCardSubtitle";
import Title from "./atoms/eventCardTitle";
import { useMemo } from "react";
import type { Event } from "../model/eventsModel";

export interface EventCardProps {
  event: Event;
  focused: boolean;
}

export default function EventCard({ event, focused }: EventCardProps) {
  const subtitle = useMemo(() => {
    const season = event.season ? `S${event.season}` : "";
    const episode = event.episode ? `E${event.episode}` : "";
    return `${season}${episode}`;
  }, [event]);
  return (
    <Container $focused={focused}>
      <Image src={event.thumbnail} alt={event.title} />
      <Labels labels={event.metadata} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{event.title}</Title>
    </Container>
  );
}
