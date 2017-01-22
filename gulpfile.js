var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = tsc.createProject('tsconfig.json');

var paths = {
    ts: [
        'server/**/*.ts',
        'spec/**/*.ts'
    ]
};

gulp.task("ts-compile", function () {
    tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("server/"));
});

gulp.task('default', ['ts-compile']);