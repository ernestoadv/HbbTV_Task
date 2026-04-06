import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { PlayerDimensions } from "../../config/playerConfig";

const PlayerContainer = styled.div`
    position: absolute;
    top: ${PlayerDimensions.tvFHD.top}px;
    left: ${PlayerDimensions.tvFHD.left}px;

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        top: ${PlayerDimensions.tvHD.top}px;
        left: ${PlayerDimensions.tvHD.left}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        top: ${PlayerDimensions.mobile.top}px;
        left: ${PlayerDimensions.mobile.left}px;
    }
`;

export default PlayerContainer;