import {animateOnScroll as animate} from '../index.js'

const parallax = (el, i) => {
	// const x = i % 2 === 0 ? 300 : 200
	const frame = (percentage) => {
		// const shift = x * percentage
		const shift = percentage * 200
		el.style.transform = `translate3d(0, ${shift}px, 0)`
	}
	return frame
}

const animations = []
const sections = Array.from(document.querySelectorAll('.section'))
for (let i = 0; i < sections.length; i++) {
	const animation = parallax(sections[i], i)
	animations.push({fn: animation})
}

animate(animations)
