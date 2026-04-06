import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { PlayerDimensions } from "../../config/playerConfig";

const VideoPlayer = styled.video`
    border-radius: ${PlayerDimensions.tvFHD.border.radius}px;
    object-fit: cover;
    width: ${PlayerDimensions.tvFHD.width}px;
    height: ${PlayerDimensions.tvFHD.height}px;

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        border-radius: ${PlayerDimensions.tvHD.border.radius}px;
        width: ${PlayerDimensions.tvHD.width}px;
        height: ${PlayerDimensions.tvHD.height}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        border-radius: ${PlayerDimensions.mobile.border.radius}px;
        width: ${PlayerDimensions.mobile.width}px;
        height: ${PlayerDimensions.mobile.height}px;
    }
`;

export default VideoPlayer;