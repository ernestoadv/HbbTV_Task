import type { Device } from "./device";

// ------------------------------------------------------------------------------------------------
// Device dimensions: Media queries
// ------------------------------------------------------------------------------------------------

interface DeviceDimensionProperties {
    width: number;
    height: number;
}

export const DeviceDimensions: Record<Device, DeviceDimensionProperties> = {
    tvFHD: {
        width: 1920,
        height: 1080,
    },
    tvHD: {
        width: 1280,
        height: 720,
    },
    mobile: {
        width: 768,
        height: 1366,
    },
}

// ------------------------------------------------------------------------------------------------
// Shared UI
// ------------------------------------------------------------------------------------------------

// Title

interface TitleDimensionProperties {
    font: number;
    left: number;
    top: number;
}

export const TitleDimensions: Record<Device, TitleDimensionProperties> = {
    tvFHD: {
        font: 40,
        left: 50,
        top: 70,
    },
    tvHD: {
        font: 40,
        left: 50,
        top: 70,
    },
    mobile: {
        font: 30,
        left: 25,
        top: 24,
    },
}