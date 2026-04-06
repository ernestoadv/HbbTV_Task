import Back from "../../../widgets/back/ui/back.tsx";
import Background from "../../../shared/ui/background.tsx";
import Player from "./elements/player.tsx";
import Title from "../../../shared/ui/title.tsx";
import { Pages } from "../../../shared/config/pages";
import { useLocation } from "react-router";

export default function PlayerPage() {
  const { state } = useLocation();
  const event = state?.event;
  return <Background>
    <Back path={Pages.home} />
    <Title>{event.title}</Title>
    <Player thumbnail={event.thumbnail} src={event.videoUrl} />
  </Background>;
}
