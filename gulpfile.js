var gulp = require('gulp');
var tsc = require('gulp-typescript');
var paths = {
    ts: [
        'server/**/*.ts'
    ]
};

gulp.task('build', function() { 
    return gulp.src(paths.ts, { base: '.'})
        .pipe(tsc('./tsconfig.json'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['build'])