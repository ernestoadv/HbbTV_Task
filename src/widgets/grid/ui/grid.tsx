import Card from "../../../entities/events/ui/eventCard";
import Container from "./atoms/gridContainer";
import type { Event } from "../../../entities/events/model/eventsModel";

export interface GridProps {
    events: Event[];
}

export default function Grid({ events }: GridProps) {
    return (
        <Container >
            {events.map((event, idx) => {
                const key = event.title + event.videoUrl;
                return <Card
                    key={key}
                    event={event}
                    focused={idx === 0}
                />;
            })}
        </Container>
    );
}