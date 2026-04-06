import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { EventCardDimensions } from "../../config/eventsConfig";

const EventCardTitle = styled.div`
    position: relative;
    bottom: ${EventCardDimensions.tvFHD.title.bottom}px;
    color: rgba(255, 255, 255, 1);
    font-size: ${EventCardDimensions.tvFHD.title.font}px;
    font-weight: bold;
    left: ${EventCardDimensions.tvFHD.title.left}px;
    text-shadow: 0 0 4px rgba(0, 0, 0, 1);
    width: ${EventCardDimensions.tvFHD.title.width}px;

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        bottom: ${EventCardDimensions.tvHD.title.bottom}px;
        font-size: ${EventCardDimensions.tvHD.title.font}px;
        left: ${EventCardDimensions.tvHD.title.left}px;
        width: ${EventCardDimensions.tvHD.title.width}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        bottom: ${EventCardDimensions.mobile.title.bottom}px;
        font-size: ${EventCardDimensions.mobile.title.font}px;
        left: ${EventCardDimensions.mobile.title.left}px;
        width: ${EventCardDimensions.mobile.title.width}px;
    }
`;

export default EventCardTitle;
