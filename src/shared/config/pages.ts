export const Pages = {
    home: "/",
    player: "/player",
} as const;

export type Page = (typeof Pages)[keyof typeof Pages]; // Pages values union type