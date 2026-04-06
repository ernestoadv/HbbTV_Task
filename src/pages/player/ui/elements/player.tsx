import PlayerContainer from "../atoms/playerContainer";
import VideoPlayer from "../atoms/videoPlayer";

interface PlayerProps {
    thumbnail: string;
    src: string;
}

export default function Player({ thumbnail, src }: PlayerProps) {
    return (
        <PlayerContainer>
            <VideoPlayer
                controls
                poster={thumbnail}
                src={src}
            />
        </PlayerContainer>
    );
}