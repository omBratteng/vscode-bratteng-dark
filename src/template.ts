import { brattengDark } from './colors/index'
import { Theme } from './interfaces'

export default (): Theme => {
	const scheme = brattengDark
	return {
		$schema: 'vscode://schemas/color-theme',
		author: 'Ole-Martin Bratteng',
		name: 'Bratteng Dark',
		semanticHighlighting: true,
		type: 'dark',
		colors: {
			foreground: scheme.common.fg.hex(),
		},
	}
}
