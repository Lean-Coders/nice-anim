import { h, Build } from '@stencil/core';
import { NiceAnimConfig } from './nice-anim-config';
export class NiceAnim {
    constructor() {
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
        this.cssClass = Build.isBrowser
            ? this.hasIOSupport
                ? 'nice-anim'
                : this.config.fallbackCssClass
            : this.config.ssrCssClass;
    }
    componentDidLoad() {
        if (this.hasIOSupport) {
            this.addIntersectionObserver();
            const animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
            this.el.querySelector('.nice-anim').style.setProperty('--distance', animationDistance);
        }
    }
    addIntersectionObserver() {
        this.io = new IntersectionObserver((data) => {
            if (data[0].isIntersecting) {
                this.el.querySelector('.nice-anim').classList.add(`slide-${this.direction}`);
                this.removeIntersectionObserver();
            }
        }, {
            threshold: parseFloat(this.triggerDistance) / 100
        });
        this.io.observe(this.el.querySelector('.nice-anim'));
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return (h("div", { class: this.cssClass, style: {
                animationDuration: `${this.duration}ms`,
                animationDelay: `${this.delay}ms`
            } },
            h("slot", null)));
    }
    static get is() { return "nice-anim"; }
    static get originalStyleUrls() { return {
        "$": ["nice-anim.css"]
    }; }
    static get styleUrls() { return {
        "$": ["nice-anim.css"]
    }; }
    static get properties() { return {
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'up' | 'down' | 'right' | 'left'",
                "resolved": "\"down\" | \"left\" | \"right\" | \"up\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Direction the element moves when animating in"
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'up'"
        },
        "delay": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "How long to delay the animation (ms)"
            },
            "attribute": "delay",
            "reflect": false,
            "defaultValue": "0"
        },
        "duration": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "How long the animation runs (ms)"
            },
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "500"
        },
        "animationDistance": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "How far the element moves in the animation (% of element width/height)"
            },
            "attribute": "animation-distance",
            "reflect": false,
            "defaultValue": "'30%'"
        },
        "triggerDistance": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "How much of the element must be visible before it animates (% of element height)"
            },
            "attribute": "trigger-distance",
            "reflect": false,
            "defaultValue": "'33%'"
        }
    }; }
    static get elementRef() { return "el"; }
}
