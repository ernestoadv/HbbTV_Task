import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { EventCardDimensions } from "../../config/eventsConfig";

const EventCardSubtitle = styled.div`
    position: relative;
    bottom: ${EventCardDimensions.tvFHD.subtitle.bottom}px;
    color: rgba(255, 255, 255, 1);
    height: ${EventCardDimensions.tvFHD.subtitle.height}px;
    left: ${EventCardDimensions.tvFHD.subtitle.left}px;
    font-size: ${EventCardDimensions.tvFHD.subtitle.font}px;
    font-weight: 600;
    text-shadow: 0 0 4px rgba(0, 0, 0, 1);

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        bottom: ${EventCardDimensions.tvHD.subtitle.bottom}px;
        font-size: ${EventCardDimensions.tvHD.subtitle.font}px;
        height: ${EventCardDimensions.tvHD.subtitle.height}px;
        left: ${EventCardDimensions.tvHD.subtitle.left}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        bottom: ${EventCardDimensions.mobile.subtitle.bottom}px;
        font-size: ${EventCardDimensions.mobile.subtitle.font}px;
        height: ${EventCardDimensions.mobile.subtitle.height}px;
        left: ${EventCardDimensions.mobile.subtitle.left}px;
    }
`;

export default EventCardSubtitle;
