/* eslint-disable no-undef */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', 'node_modules'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				tabWidth: 4,
				trailingComma: 'all',
				useTabs: true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/no-empty-function': 'off',
	},
}
