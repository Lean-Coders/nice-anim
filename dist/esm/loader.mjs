import { a as patchEsm, b as bootstrapLazy } from './chunk-9eca0c11.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["nice-anim",[[4,"nice-anim",{"direction":[1],"delay":[2],"duration":[2],"animationDistance":[1,"animation-distance"],"triggerDistance":[1,"trigger-distance"]}]]]], options);
  });
};

export { defineCustomElements };
