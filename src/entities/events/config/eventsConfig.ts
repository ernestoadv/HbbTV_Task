import type { Device } from "../../../shared/config/device";

interface EventCardDimensionProperties {
    container: {
        border: {
            radius: number;
            width: number;
        };
        width: number;
        height: number;
    };
    label: {
        border: {
            radius: number;
        };
        bottom: number;
        font: number;
        height: number;
        left: number;
        margin: {
            right: number;
        },
        padding: {
            x: number;
            y: number;
        };
    };
    subtitle: {
        bottom: number;
        font: number;
        height: number;
        left: number;
    };
    title: {
        bottom: number;
        font: number;
        left: number;
        width: number;
    };
}

export const EventCardDimensions: Record<Device, EventCardDimensionProperties> = {
    tvFHD: {
        container: {
            border: {
                radius: 16,
                width: 3,
            },
            height: 180,
            width: 320,
        },
        label: {
            border: {
                radius: 6,
            },
            bottom: 172,
            font: 12,
            height: 24,
            left: 16,
            margin: {
                right: 4,
            },
            padding: {
                x: 8,
                y: 4,
            }
        },
        subtitle: {
            bottom: 120,
            font: 12,
            height: 20,
            left: 16,
        },
        title: {
            bottom: 120,
            left: 16,
            font: 24,
            width: 200,
        },
    },
    tvHD: {
        container: {
            border: {
                radius: 16,
                width: 3,
            },
            width: 320,
            height: 180,
        },
        label: {
            border: {
                radius: 6,
            },
            bottom: 172,
            font: 12,
            height: 24,
            left: 16,
            margin: {
                right: 4,
            },
            padding: {
                x: 8,
                y: 4,
            }
        },
        subtitle: {
            bottom: 120,
            font: 12,
            height: 20,
            left: 16,
        },
        title: {
            bottom: 120,
            left: 16,
            font: 24,
            width: 200,
        },
    },
    mobile: {
        container: {
            border: {
                radius: 8,
                width: 2,
            },
            width: 160,
            height: 90,
        },
        label: {
            border: {
                radius: 4,
            },
            bottom: 92,
            font: 8,
            height: 12,
            left: 8,
            margin: {
                right: 4,
            },
            padding: {
                x: 4,
                y: 2,
            }
        },
        subtitle: {
            bottom: 76,
            font: 10,
            height: 20,
            left: 8,
        },
        title: {
            bottom: 80,
            left: 8,
            font: 16,
            width: 100,
        },
    },
}
