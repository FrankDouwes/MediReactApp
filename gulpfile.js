var gulp 			    = require('gulp');
var browserify 		= require('gulp-browserify');
var sass 			    = require('gulp-sass')
var concat 			  = require('gulp-concat');

// combine&concat all js
gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

// compile all sass
gulp.task('sass', function () {
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// copy index
gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

// the default task (runs the above tasks)
gulp.task('default',['browserify', 'sass', 'copy']);

// add a watcher (auto-update)
gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});