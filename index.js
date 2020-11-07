const chokidar = require('chokidar')
const { writeFile, readFileSync } = require('fs')
const yaml = require('js-yaml')

const loadYaml = (fileName) =>
	yaml.safeLoad(readFileSync(`themes/${fileName}.yaml`, 'utf-8'))

const log = console.log.bind(console)
const watcher = chokidar.watch('themes', {
	ignored: /^\./,
	persistent: true,
})

const build = () => {
	// Panda theme color definition
	const themeColors = loadYaml('colors')
	// Base has the syntax tokens applicable across multiple languages
	let base = loadYaml('dark-base')
	// Additional theme definitions to combine with base syntax token styles
	const workbench = loadYaml('workbench')
	const template = loadYaml('template') || {}
	const markdown = loadYaml('markdown') || {}
	const js = loadYaml('js') || {}
	const html = loadYaml('html') || {}
	const css = loadYaml('css') || {}
	const regex = loadYaml('regex') || {}
	const jsdoc = loadYaml('jsdoc') || {}

	// Merge workbench styles
	Object.assign(base, workbench)
	// Merge additional syntax token styles
	base.tokenColors = base.tokenColors.concat(
		template,
		markdown,
		js,
		html,
		css,
		regex,
		jsdoc,
	)

	// Stringify all of the combined theme styles so we can run string regexes on it to
	// replace color variables with color values
	base = JSON.stringify(base, null, 2)

	for (let color in themeColors) {
		base = base.replace(
			new RegExp(color + '"', 'g'),
			themeColors[color] + '"',
		)
	}

	// Base file has been extended with additional theme styles and color variables have
	// been replaced with Panda theme values. Write to /dist for consumption.
	writeFile('dist/Bratteng-dark.json', base, (err) => {
		if (err) {
			console.warn(err)
		}
		console.log('Build finished')
	})
}

watcher
	.on('ready', () => {
		log('Initial scan complete. Ready for changes')
		build()
	})
	.on('change', () => {
		build()
	})
