// we require the following packages
// the primary gulp package
let gulp = require('gulp');
// minify CSS
let cleanCSS = require('gulp-clean-css');
// auto-prefix CSS with compatible properties
let autoprefixer = require('gulp-autoprefixer');
// rename files e.g. style.css > style.min.css
let rename = require('gulp-rename');
// compile sass files
let sass = require('gulp-sass');
// compile javascript files
let concat = require('gulp-concat');
// minify javascript files
let uglify = require('gulp-uglify-es').default;
// refresh browser on cue
let browserSync = require('browser-sync').create();

// SCSS and CSS tasks
// Create a gulp task to combine and convert all scss files to single css file
gulp.task('sass', function () {
  return gulp.src('./web/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./web/assets/css'))
    .pipe(rename('style.css'));
});

// Create a gulp task to minify css file
gulp.task('minify-css', () => {
  return gulp.src('./web/assets/css/style.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./web/assets/css'));
});

// Create gulp series (series of tasks) to run css related tasks simultaneously
gulp.task('styles', gulp.series('sass', 'minify-css'));

// JavaScript tasks
// Create gulp task to combine all javascript files
gulp.task('concat', function () {
  return gulp.src(['./web/assets/js/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./web/assets/js/dist'));
});

// Create gulp task to minify combined javascript file
gulp.task("minify-js", function () {
  return gulp.src("./web/assets/js/dist/script.js")
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./web/assets/js/dist"));
});

// Create gulp series (series of tasks) to run javscript related tasks simultaneously
gulp.task('scripts', gulp.series('concat', 'minify-js'));

// Create function to reload browser
function reload(done) {
  browserSync.reload();
  done();
}

// Create function to initiate browser load on local server, on root directory
function serve(done) {
  browserSync.init({
    proxy: "https://elev8-craft.test",
  });
  done();
}

// Create function to watch for changes in any sass or js files, and run series of gulp tasks on change
const watch = () => gulp.watch(['./web/assets/scss/**/*.scss', './web/assets/js/*.js', './templates/**/*.twig'], gulp.series('styles', 'scripts', reload));

// Make `gulp` the default keyword for running the 'serve' and 'watch' series of tasks
gulp.task('default', gulp.series(serve, watch));
