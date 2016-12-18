import sourcemaps from 'gulp-sourcemaps';
import childProcess from 'child_process';
import gls from 'gulp-live-server';
import cssnano from 'gulp-cssnano';
import concat from 'gulp-concat';
import watchify from 'watchify';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import gulp from 'gulp';

const exec = childProcess.exec;


gulp.task('server', () => {
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
        'app/controllers/**/*.js'
    ], () => server.start())

    gulp.watch([
        'assets/**/*.scss',
        'assets/**/*.js',
        'views/**/*.jade'
    ], () => server.notify.apply(server, arguments))
});


gulp.task('compile', () => {
    const source = [
        'env.js',
        'config/*.js',
        'server.js',
        'app/**/*.js',
        'routes/**/*.js',
    ];
    return gulp.src(source)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
});


gulp.task('sass',  () => {
    return gulp.src('assets/sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/css'));
});


gulp.task('dev', ['sass'], () => {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
})


gulp.task('default', ['dev'], () => {});
