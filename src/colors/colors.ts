import color from './color'

const _ = color('#1d1f20')

const common = {
	bg: _('#1d1f20'),
	fg: _('#abb2bf'),
}

const syntax = {
	panel: {
		bg: common.bg.brighten(0.05),
	},
}

console.log(common.fg.hex('blend'))

const vcs = {}

const ui = {
	// panel: {
	// 	bg: common.bg,
	// },
}

export default {
	common,
	syntax,
	vcs,
	ui,
}
