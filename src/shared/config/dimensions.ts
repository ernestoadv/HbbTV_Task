import type { Device } from "./device";

// ------------------------------------------------------------------------------------------------
// Device dimensions: Media queries
// ------------------------------------------------------------------------------------------------

interface DeviceDimensions {
    width: number;
    height: number;
}

export const DeviceDimensions: Record<Device, DeviceDimensions> = {
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

// Main Title

interface MainTitleDimensions {
    font: number;
    left: number;
    top: number;
}

export const MainTitleDimensions: Record<Device, MainTitleDimensions> = {
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