'use strict'

const requestAnimationFrame = require('raf')
const getMaxY = require('get-scrollmax-y')
const window = require('global/window')

const animate = (animations) => {
	for (let a of animations) {
		if ('number' !== typeof a.from) a.from = 0
		if ('number' !== typeof a.to) a.to = 1
		if ('function' !== typeof a.fn) {
			throw new Error(`animation ${i} has no function`)
		}
	}

	let lastY = NaN
	let calls = 0
	const update = () => {
		const y = window.pageYOffset
		if (y === undefined) {
			y = (document.documentElement || document.body.parentNode || document.body).scrollTop
		}

		if (y !== lastY) {
			lastY = y
			const p = y / getMaxY()

			for (let a of animations) {
				if (p < a.from) a.fn(0)
				else if (p > a.to) a.fn(1)
				else a.fn((p - a.from) / (a.to - a.from))
			}
		}

		if (++calls < 100) requestAnimationFrame(update)
	}

	window.addEventListener('scroll', () => {
		if (calls >= 100) requestAnimationFrame(update)
		calls = 0
	})

	requestAnimationFrame(update)
}

module.exports = animate
