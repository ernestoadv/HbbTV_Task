import type { Device } from "../../../shared/config/device";

interface BackDimensionProperties {
    border: {
        radius: number;
    };
    padding: {
        x: number;
        y: number;
    };
    right: number;
    top: number;
}

export const BackDimensions: Record<Device, BackDimensionProperties> = {
    tvFHD: {
        border: {
            radius: 16,
        },
        padding: {
            x: 10,
            y: 10,
        },
        right: 32,
        top: 32,
    },
    tvHD: {
        border: {
            radius: 16,
        },
        padding: {
            x: 10,
            y: 10,
        },
        right: 32,
        top: 32,
    },
    mobile: {
        border: {
            radius: 8,
        },
        padding: {
            x: 4,
            y: 2,
        },
        right: 20,
        top: 32,
    },
}