import styled from "styled-components";
import { DeviceDimensions, MainTitleDimensions } from "../config/dimensions";

const MainTitle = styled.span`
  color: rgba(255, 255, 255, 1);
  font-size: ${MainTitleDimensions.tvFHD.font}px;
  font-weight: 600;
  position: absolute;
  left: ${MainTitleDimensions.tvFHD.left}px;
  top: ${MainTitleDimensions.tvFHD.top}px;

  @media (max-width: ${DeviceDimensions.tvHD.width}px) {
    font-size: ${MainTitleDimensions.tvHD.font}px;
    left: ${MainTitleDimensions.tvHD.left}px;
    top: ${MainTitleDimensions.tvHD.top}px;
  }
  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    font-size: ${MainTitleDimensions.mobile.font}px;
    left: ${MainTitleDimensions.mobile.left}px;
    top: ${MainTitleDimensions.mobile.top}px;
  }
`;

export default MainTitle;