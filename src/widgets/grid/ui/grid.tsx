import Card from "../../../entities/events/ui/eventCard";
import Container from "./atoms/gridContainer";
import useGridInput from "../lib/useGridInput";
import type { Event } from "../../../entities/events/model/eventsModel";
import type { Page } from "../../../shared/config/pages";

export interface GridProps {
    events: Event[];
    path: Page;
}

export default function Grid({ events, path }: GridProps) {
    const { callback, bounds, index } = useGridInput({ data: events, path });
    return (
        <Container >
            {events.map((event, idx) => {
                const key = event.title + event.videoUrl;
                const focused = idx === index;
                const display = idx >= bounds.minIndex && idx < bounds.maxIndex;
                return display ? <Card
                    key={key}
                    event={event}
                    focused={focused}
                    callback={() => callback(idx)}
                /> : null;
            })}
        </Container>
    );
}