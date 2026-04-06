import type { Device } from "../../../shared/config/device";

interface BackDimensionProperties {
    border: {
        radius: number;
    };
    label: {
        font: number;
    },
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
            radius: 20,
        },
        label: {
            font: 24,
        },
        padding: {
            x: 20,
            y: 8,
        },
        right: 32,
        top: 32,
    },
    tvHD: {
        border: {
            radius: 16,
        },
        label: {
            font: 16,
        },
        padding: {
            x: 16,
            y: 6,
        },
        right: 32,
        top: 32,
    },
    mobile: {
        border: {
            radius: 8,
        },
        label: {
            font: 16,
        },
        padding: {
            x: 12,
            y: 4,
        },
        right: 20,
        top: 32,
    },
}