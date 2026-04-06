import useEvents from "../../../entities/events/lib/useEvents.ts";
import Background from "../../../shared/ui/background";
import Grid from "../../../widgets/grid/ui/grid.tsx";
import Title from "../../../shared/ui/title.tsx";
import { Pages } from "../../../shared/config/pages";

export default function HomePage() {
    const events = useEvents();
    return <Background>
        <Title>{"Home"}</Title>
        <Grid events={events} path={Pages.player} />
    </Background>
}