import styled from "styled-components";
import { BackDimensions } from "../../config/backConfig";
import { DeviceDimensions } from "../../../../shared/config/dimensions";

const BackLabel = styled.span`
  color: #000;
  font-weight: bold;
  font-size: ${BackDimensions.tvFHD.label.font}px;

  @media (max-width: ${DeviceDimensions.tvHD.width}px) {
    font-size: ${BackDimensions.tvHD.label.font}px;
  }
  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    font-size: ${BackDimensions.mobile.label.font}px;
  }
`;

export default BackLabel;