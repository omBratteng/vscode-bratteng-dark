import chroma from 'chroma-js'

export class Color {
	constructor(private base: chroma.Color, private color: chroma.Color) {}

	rgb(): [number, number, number] {
		return this.color.rgb()
	}

	rgba(): [number, number, number, number] {
		return this.color.rgba()
	}

	hex(type?: 'rgb' | 'rgba' | 'blend'): string {
		if (type != 'blend') return this.color.hex(type)

		const alpha: number = this.color.alpha()
		return this.alpha(1)
			.fade(1 - alpha)
			.hex()
	}

	alpha(value: number): Color {
		return new Color(this.base, this.color.alpha(value))
	}

	fade(value: number): Color {
		return new Color(
			this.base,
			chroma.mix(this.base, this.color, 1 - value),
		)
	}

	darken(value: number): Color {
		return new Color(this.base, this.color.darken(value))
	}

	brighten(value: number): Color {
		return new Color(this.base, this.color.brighten(value))
	}
}

export default (hexBase: string) => (hexColor: string): Color =>
	new Color(chroma(hexBase), chroma(hexColor))
