var SSRMode;
(function (SSRMode) {
    SSRMode["Static"] = "STATIC";
    SSRMode["Rehydrate"] = "REHYDRATE";
})(SSRMode || (SSRMode = {}));
var NiceAnimConfig = /** @class */ (function () {
    function NiceAnimConfig() {
        this.ssrMode = SSRMode.Rehydrate;
        this.fallbackCssClass = '';
    }
    Object.defineProperty(NiceAnimConfig.prototype, "ssrCssClass", {
        get: function () {
            if (this.ssrMode === SSRMode.Static) {
                return '';
            }
            else if (this.ssrMode === SSRMode.Rehydrate) {
                return 'nice-anim';
            }
        },
        enumerable: true,
        configurable: true
    });
    NiceAnimConfig.getInstance = function () {
        if (!NiceAnimConfig.instance) {
            NiceAnimConfig.instance = new NiceAnimConfig();
        }
        return NiceAnimConfig.instance;
    };
    return NiceAnimConfig;
}());
NiceAnimConfig.instance = null;
export { NiceAnimConfig as N, SSRMode as S };
