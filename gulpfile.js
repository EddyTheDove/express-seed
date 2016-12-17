var watchify    = require('watchify'),
    gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssnano     = require('gulp-cssnano'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    gls         = require('gulp-live-server');


gulp.task('server', function() {
    var options = {
        cwd: undefined
    };

    options.env = process.env;
    options.env.NODE_ENV = 'development';

    var server = gls('server.js', options, 32123);
    server.start();

    gulp.watch([
        'server.js',
        'routes/**/*.js',
        'controllers/**/*.js'
    ], function () {
        server.start();
    });

    gulp.watch([
        'assets/**/*.scss',
        'assets/**/*.js',
        'views/**/*.jade'
    ], function () {
        server.notify.apply(server, arguments);
    });
});

gulp.task('sass', function () {
    return gulp.src('assets/sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/css'));
});


gulp.task('dev', ['sass', 'server'], function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
})


gulp.task('default', ['dev'], function () {});
