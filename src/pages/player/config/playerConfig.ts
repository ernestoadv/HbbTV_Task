import type { Device } from "../../../shared/config/device";

interface PlayerDimensionProperties {
    border: {
        radius: number;
    };
    left: number;
    top: number;
    width: number;
    height: number;
}

export const PlayerDimensions: Record<Device, PlayerDimensionProperties> = {
    tvFHD: {
        border: {
            radius: 16,
        },
        left: 50,
        top: 150,
        width: 1562,
        height: 882,
    },
    tvHD: {
        border: {
            radius: 16,
        },
        left: 50,
        top: 150,
        width: 941,
        height: 531,
    },
    mobile: {
        border: {
            radius: 8,
        },
        left: 25,
        top: 120,
        width: 320,
        height: 180,
    },
}
