export const Devices = {
    tvFHD: "tvFHD",
    tvHD: "tvHD",
    mobile: "mobile",
} as const;

export type Device = keyof typeof Devices; // Device keys union type (values are equal to keys)