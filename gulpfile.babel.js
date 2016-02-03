'use strict'

import gulp from 'gulp';
import del from 'del';
import tscConfig from './tsconfig';
import gulpPlugins from 'gulp-load-plugins';

const plugins = gulpPlugins({lazy: true});

gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', () => {
    plugins.util.log(plugins.util.colors.green('Analyzing source with TSLint!'));

    //return gulp.src('src/app/**/*.ts')
    //    .pipe(plugins.tslint.tslint())
    //    .pipe(plugins.tslint.report('verbose'));
});

gulp.task('clean', () => {
   plugins.util.log(plugins.util.colors.green('Cleaning files somehow'));
});
