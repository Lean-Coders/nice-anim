import { NiceAnimConfig } from './nice-anim-config';
export declare class NiceAnim {
    el: HTMLElement;
    /**
     * Direction the element moves when animating in
     */
    direction: 'up' | 'down' | 'right' | 'left';
    /**
     * How long to delay the animation (ms)
     */
    delay: number;
    /**
     * How long the animation runs (ms)
     */
    duration: number;
    /**
     * How far the element moves in the animation (% of element width/height)
     */
    animationDistance: string;
    /**
     * How much of the element must be visible before it animates (% of element height)
     */
    triggerDistance: string;
    io: IntersectionObserver;
    hasIOSupport: boolean;
    config: NiceAnimConfig;
    cssClass: string;
    constructor();
    componentDidLoad(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): any;
}
