/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface NiceAnim {
    /**
    * How far the element moves in the animation (% of element width/height)
    */
    'animationDistance': string;
    /**
    * How long to delay the animation (ms)
    */
    'delay': number;
    /**
    * Direction the element moves when animating in
    */
    'direction': 'up' | 'down' | 'right' | 'left';
    /**
    * How long the animation runs (ms)
    */
    'duration': number;
    /**
    * How much of the element must be visible before it animates (% of element height)
    */
    'triggerDistance': string;
  }
}

declare global {


  interface HTMLNiceAnimElement extends Components.NiceAnim, HTMLStencilElement {}
  var HTMLNiceAnimElement: {
    prototype: HTMLNiceAnimElement;
    new (): HTMLNiceAnimElement;
  };
  interface HTMLElementTagNameMap {
    'nice-anim': HTMLNiceAnimElement;
  }
}

declare namespace LocalJSX {
  interface NiceAnim extends JSXBase.HTMLAttributes<HTMLNiceAnimElement> {
    /**
    * How far the element moves in the animation (% of element width/height)
    */
    'animationDistance'?: string;
    /**
    * How long to delay the animation (ms)
    */
    'delay'?: number;
    /**
    * Direction the element moves when animating in
    */
    'direction'?: 'up' | 'down' | 'right' | 'left';
    /**
    * How long the animation runs (ms)
    */
    'duration'?: number;
    /**
    * How much of the element must be visible before it animates (% of element height)
    */
    'triggerDistance'?: string;
  }

  interface IntrinsicElements {
    'nice-anim': NiceAnim;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


