import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";

const BackLabel = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 16px;
  padding: 2px 8px;

  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    font-size: 12px;
    padding: 2px 4px;
  }
`;

export default BackLabel;