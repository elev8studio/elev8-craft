const mix = require('laravel-mix')
require('laravel-mix-purgecss')

const scss = 'web/assets/scss/'
const js = 'web/assets/js/'
const dist = 'web/assets/dist/'

mix
  .js(`${js}app.js`, `${dist}js`)
  .sass(`${scss}style.scss`, `${dist}css`)
  .purgeCss()

mix.minify(`${dist}css/style.css`).minify(`${dist}js/app.js`)

mix.browserSync({
  files: [
    'web/assets/scss/**/*.scss',
    'web/assets/js/**/*.js',
    'templates/**/*.twig',
  ],
  proxy: 'https://elev8studio.test',
})
