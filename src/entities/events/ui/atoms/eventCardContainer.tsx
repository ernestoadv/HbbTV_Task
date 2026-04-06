import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { EventCardDimensions } from "../../config/eventsConfig";

const EventCardContainer = styled.div.attrs({ className: "card" })<{ $focused: boolean }>`
  border: ${EventCardDimensions.tvFHD.container.border.width}px solid ${({ $focused }) => $focused ? "rgba(255, 255, 255, 1)" : "transparent"};
  border-radius: ${EventCardDimensions.tvFHD.container.border.radius}px;
  cursor: pointer;
  overflow: hidden;
  height: ${EventCardDimensions.tvFHD.container.height}px;
  width: ${EventCardDimensions.tvFHD.container.width}px;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${DeviceDimensions.tvHD.width}px) {
    border: ${EventCardDimensions.tvHD.container.border.width}px solid ${({ $focused }) => $focused ? "rgba(255, 255, 255, 1)" : "transparent"};
    border-radius: ${EventCardDimensions.tvHD.container.border.radius}px;
    width: ${EventCardDimensions.tvHD.container.width}px;
    height: ${EventCardDimensions.tvHD.container.height}px;
  }
  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    border: ${EventCardDimensions.mobile.container.border.width}px solid ${({ $focused }) => $focused ? "rgba(255, 255, 255, 1)" : "transparent"};
    border-radius: ${EventCardDimensions.mobile.container.border.radius}px;
    width: ${EventCardDimensions.mobile.container.width}px;
    height: ${EventCardDimensions.mobile.container.height}px;
  }
`;

export default EventCardContainer;
