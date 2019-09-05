'use strict';

(function (SSRMode) {
    SSRMode["Static"] = "STATIC";
    SSRMode["Rehydrate"] = "REHYDRATE";
})(exports.SSRMode || (exports.SSRMode = {}));
class NiceAnimConfig {
    constructor() {
        this.ssrMode = exports.SSRMode.Rehydrate;
        this.fallbackCssClass = '';
    }
    get ssrCssClass() {
        if (this.ssrMode === exports.SSRMode.Static) {
            return '';
        }
        else if (this.ssrMode === exports.SSRMode.Rehydrate) {
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

exports.NiceAnimConfig = NiceAnimConfig;
