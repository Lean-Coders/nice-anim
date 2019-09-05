export declare enum SSRMode {
    Static = "STATIC",
    Rehydrate = "REHYDRATE"
}
export declare class NiceAnimConfig {
    fallbackCssClass: string;
    ssrMode: SSRMode;
    readonly ssrCssClass: string;
    private static instance;
    private constructor();
    static getInstance(): NiceAnimConfig;
}
