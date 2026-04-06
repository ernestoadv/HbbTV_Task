import styled from "styled-components";
import { DeviceDimensions, TitleDimensions } from "../config/dimensions";

const MainTitle = styled.span`
  color: rgba(255, 255, 255, 1);
  font-size: ${TitleDimensions.tvFHD.font}px;
  font-weight: 600;
  position: absolute;
  left: ${TitleDimensions.tvFHD.left}px;
  top: ${TitleDimensions.tvFHD.top}px;
  width: ${TitleDimensions.tvFHD.width}px;

  @media (max-width: ${DeviceDimensions.tvHD.width}px) {
    font-size: ${TitleDimensions.tvHD.font}px;
    left: ${TitleDimensions.tvHD.left}px;
    top: ${TitleDimensions.tvHD.top}px;
    width: ${TitleDimensions.tvHD.width}px;
  }
  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    font-size: ${TitleDimensions.mobile.font}px;
    left: ${TitleDimensions.mobile.left}px;
    top: ${TitleDimensions.mobile.top}px;
    width: ${TitleDimensions.mobile.width}px;
  }
`;

export default MainTitle;