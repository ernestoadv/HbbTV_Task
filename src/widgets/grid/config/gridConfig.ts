import type { Device } from "../../../shared/config/device";

interface GridDimensionProperties {
    left: number;
    top: number;
    margin: number;
    padding: number;
}

export const GridDimensions: Record<Device, GridDimensionProperties> = {
    tvFHD: {
        left: 50,
        top: 150,
        margin: 24,
        padding: 0,
    },
    tvHD: {
        left: 50,
        top: 150,
        margin: 24,
        padding: 0,
    },
    mobile: {
        left: 25,
        top: 75,
        margin: 12,
        padding: 0,
    },
}