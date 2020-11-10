import fs from 'fs/promises'
import path from 'path'
import template from './template'

const distDir = path.join(process.cwd(), 'dist')
const themeName = 'Bratteng-dark'
const filePath = path.join(distDir, `${themeName}.json`)

const theme = JSON.stringify(template(), null, '\t')

fs.mkdir(distDir, { recursive: true })
	.then(() => {
		fs.writeFile(filePath, theme)
	})
	.catch((error) => {
		console.error(error)
	})
