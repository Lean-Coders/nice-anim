import { r as registerInstance, h, g as getElement } from './chunk-9eca0c11.js';
import { N as NiceAnimConfig } from './chunk-8642d9cc.js';
var NiceAnim = /** @class */ (function () {
    function NiceAnim(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Direction the element moves when animating in
         */
        this.direction = 'up';
        /**
         * How long to delay the animation (ms)
         */
        this.delay = 0;
        /**
         * How long the animation runs (ms)
         */
        this.duration = 500;
        /**
         * How far the element moves in the animation (% of element width/height)
         */
        this.animationDistance = '30%';
        /**
         * How much of the element must be visible before it animates (% of element height)
         */
        this.triggerDistance = '33%';
        this.hasIOSupport = typeof IntersectionObserver !== 'undefined';
        this.config = NiceAnimConfig.getInstance();
        this.cssClass = this.hasIOSupport
            ? 'nice-anim'
            : this.config.fallbackCssClass;
    }
    NiceAnim.prototype.componentDidLoad = function () {
        if (this.hasIOSupport) {
            this.addIntersectionObserver();
            var animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
            this.el.querySelector('.nice-anim').style.setProperty('--distance', animationDistance);
        }
    };
    NiceAnim.prototype.addIntersectionObserver = function () {
        var _this = this;
        this.io = new IntersectionObserver(function (data) {
            if (data[0].isIntersecting) {
                _this.el.querySelector('.nice-anim').classList.add("slide-" + _this.direction);
                _this.removeIntersectionObserver();
            }
        }, {
            threshold: parseFloat(this.triggerDistance) / 100
        });
        this.io.observe(this.el.querySelector('.nice-anim'));
    };
    NiceAnim.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    NiceAnim.prototype.render = function () {
        return (h("div", { class: this.cssClass, style: {
                animationDuration: this.duration + "ms",
                animationDelay: this.delay + "ms"
            } }, h("slot", null)));
    };
    Object.defineProperty(NiceAnim.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NiceAnim, "style", {
        get: function () { return "\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}.nice-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:.5s;animation-duration:.5s}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-left,.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}"; },
        enumerable: true,
        configurable: true
    });
    return NiceAnim;
}());
export { NiceAnim as nice_anim };
