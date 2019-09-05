var SSRMode;
(function (SSRMode) {
    SSRMode["Static"] = "STATIC";
    SSRMode["Rehydrate"] = "REHYDRATE";
})(SSRMode || (SSRMode = {}));
class NiceAnimConfig {
    constructor() {
        this.ssrMode = SSRMode.Rehydrate;
        this.fallbackCssClass = '';
    }
    get ssrCssClass() {
        if (this.ssrMode === SSRMode.Static) {
            return '';
        }
        else if (this.ssrMode === SSRMode.Rehydrate) {
            return 'nice-anim';
        }
    }
    static getInstance() {
        if (!NiceAnimConfig.instance) {
            NiceAnimConfig.instance = new NiceAnimConfig();
        }
        return NiceAnimConfig.instance;
    }
}
NiceAnimConfig.instance = null;

export { NiceAnimConfig as N, SSRMode as S };
