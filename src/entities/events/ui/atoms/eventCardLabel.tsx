import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { EventCardDimensions } from "../../config/eventsConfig";

const EventCardLabel = styled.span`
    background-color: rgba(0, 0, 0, 1);
    border-radius: ${EventCardDimensions.tvFHD.label.border.radius}px;
    color: rgba(255, 255, 255, 1);
    font-size: ${EventCardDimensions.tvFHD.label.font}px;
    font-weight: 600;
    padding: ${EventCardDimensions.tvFHD.label.padding.y}px ${EventCardDimensions.tvFHD.label.padding.x}px;

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        font-size: ${EventCardDimensions.tvHD.label.font}px;
        padding: ${EventCardDimensions.tvHD.label.padding.y}px ${EventCardDimensions.tvHD.label.padding.x}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        font-size: ${EventCardDimensions.mobile.label.font}px;
        padding: ${EventCardDimensions.mobile.label.padding.y}px ${EventCardDimensions.mobile.label.padding.x}px;
    }
`;

export default EventCardLabel;  
