import styled from "styled-components";
import EventCardLabel from "../atoms/eventCardLabel";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { EventCardDimensions } from "../../config/eventsConfig";

interface EventCardLabelsProps {
    labels: string[];
}

const EventCardLabelsContainer = styled.div`
    position: relative;
    bottom: ${EventCardDimensions.tvFHD.label.bottom}px;
    height: 20px;
    left: ${EventCardDimensions.tvFHD.label.left}px;
    > span {
        margin-right: ${EventCardDimensions.tvFHD.label.margin.right}px;
    }
    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        bottom: ${EventCardDimensions.tvHD.label.bottom}px;
        height: ${EventCardDimensions.tvHD.label.height}px;
        left: ${EventCardDimensions.tvHD.label.left}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        bottom: ${EventCardDimensions.mobile.label.bottom}px;
        height: ${EventCardDimensions.mobile.label.height}px;
        left: ${EventCardDimensions.mobile.label.left}px;
    }
`;

export default function EventCardLabels({ labels }: EventCardLabelsProps) {
    return (
        <EventCardLabelsContainer>
            {labels.map((item, index) => (
                <EventCardLabel key={`${item}-${index}`}>
                    {item}
                </EventCardLabel>
            ))}
        </EventCardLabelsContainer>
    );
}
