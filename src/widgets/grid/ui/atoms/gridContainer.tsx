import styled from "styled-components";
import { DeviceDimensions } from "../../../../shared/config/dimensions";
import { GridDimensions } from "../../config/gridConfig";

const GridContainer = styled.div`
  position: absolute;
  top: ${GridDimensions.tvFHD.top}px;
  left: ${GridDimensions.tvFHD.left}px;
  padding: ${GridDimensions.tvFHD.padding}px;
  
  > .card {
    margin-right: ${GridDimensions.tvFHD.margin}px;
    margin-bottom: ${GridDimensions.tvFHD.margin}px;
    display: inline-block;
  }


  @media (max-width: ${DeviceDimensions.tvHD.width}px) {
    padding: ${GridDimensions.tvFHD.padding}px;
    left: ${GridDimensions.tvFHD.left}px;
    top: ${GridDimensions.tvFHD.top}px;
    > .card {
      margin-right: ${GridDimensions.tvFHD.margin}px;
      margin-bottom: ${GridDimensions.tvFHD.margin}px;
    }
  }
  @media (max-width: ${DeviceDimensions.mobile.width}px) {
    padding: ${GridDimensions.mobile.padding}px;
    left: ${GridDimensions.mobile.left}px;
    top: ${GridDimensions.mobile.top}px;
    > .card {
      margin-right: ${GridDimensions.mobile.margin}px;
      margin-bottom: ${GridDimensions.mobile.margin}px;
    }
  }
`;

export default GridContainer;
