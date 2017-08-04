# scroll-animation

**Animate elements based on the scroll position.** Inspired by [rellax](https://github.com/dixonandmoe/rellax#rellax) and [`scroll-parallax`](https://github.com/GianlucaGuarini/parallax#why). [demo](https://derhuerst.github.io/scroll-animation/)

> Oh no, why another parallax script? Do we really need it?

I couldn't find an npm package that fit my needs:

- ability to animate any DOM property
- using [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) for performace
- suspending [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) after a while to minimize load
- no `data-` attributes or special tags

[![npm version](https://img.shields.io/npm/v/scroll-animation.svg)](https://www.npmjs.com/package/scroll-animation)
[![build status](https://img.shields.io/travis/derhuerst/scroll-animation.svg)](https://travis-ci.org/derhuerst/scroll-animation)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/scroll-animation.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install scroll-animation
```


## Usage

```js
const animate = require('scroll-animation')

const el = document.querySelector('#el')
const animateEl = (percentage) => {
	const opacity = (1 - percentage * .6).toFixed(2)
	el.style.opacity = 'scale(' + scale + ')'
}

animate([
	{fn: animateEl, from: .4, to: .7}
])
```

This will animate the [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) of `#el` as long as the scroll position is between `.4` and `.7`.


## Contributing

If you have a question or have difficulties using `scroll-animation`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/scroll-animation/issues).
