/**
 * Settings interface.
 */
export interface Settings {
	background?: string
	fontStyle?: string
	foreground?: string
}

/**
 * TokenColor interface.
 */
export interface TokenColor {
	settings?: Settings
	scope?: string | string[]
	name?: string
}

/**
 * Color interface.
 */
export type Colors = Record<string, string>

/**
 * Theme interface.
 */
export interface Theme {
	$schema: string
	author: string
	name: string
	include?: string
	type?: string
	tokenColors?: TokenColor[]
	colors?: Colors
	semanticHighlighting?: boolean
	semanticTokenColors?: Colors
}
