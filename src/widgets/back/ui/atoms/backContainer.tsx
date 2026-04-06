import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { BackDimensions } from "../../config/backConfig";

const BackContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: ${BackDimensions.tvFHD.border.radius}px;
    cursor: pointer;
    padding: ${BackDimensions.tvFHD.padding.y}px ${BackDimensions.tvFHD.padding.x}px;
    position: absolute;
    right: ${BackDimensions.tvFHD.right}px;
    top: ${BackDimensions.tvFHD.top}px;
    z-index: 100;

    @media (max-width: ${DeviceDimensions.tvHD.width}px) {
        border-radius: ${BackDimensions.tvHD.border.radius}px;
        padding: ${BackDimensions.tvHD.padding.y}px ${BackDimensions.tvHD.padding.x}px;
        right: ${BackDimensions.tvHD.right}px;
        top: ${BackDimensions.tvHD.top}px;
    }
    @media (max-width: ${DeviceDimensions.mobile.width}px) {
        padding: ${BackDimensions.mobile.padding.y}px ${BackDimensions.mobile.padding.x}px;
        right: ${BackDimensions.mobile.right}px;
        top: ${BackDimensions.mobile.top}px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

export default BackContainer;