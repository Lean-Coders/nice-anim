'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-c9d2d684.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["nice-anim.cjs",[[4,"nice-anim",{"direction":[1],"delay":[2],"duration":[2],"animationDistance":[1,"animation-distance"],"triggerDistance":[1,"trigger-distance"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
