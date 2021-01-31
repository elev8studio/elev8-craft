const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')

let scss = 'web/assets/scss/'
let js = 'web/assets/js/'
let dist = 'web/assets/dist/'

mix
	.js(js + 'app.js', dist + 'js')
	.sass(scss + 'style.scss', dist + 'css')
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('./tailwind.config.js')],
	})
	.purgeCss()
	.minify(dist + 'css/style.css')
	.minify(dist + 'js/app.js')
	.browserSync({
		files: [
			'web/assets/scss/**/*.scss',
			'web/assets/js/**/*.js',
			'templates/**/*.twig',
		],
		proxy: 'https://elev8studio.test',
	})
