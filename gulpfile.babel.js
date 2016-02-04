'use strict'

import gulp from 'gulp';
import del from 'del';
import tscConfig from './tsconfig';
import gulpPlugins from 'gulp-load-plugins';
import {CONFIG} from './gulp.config';

const plugins = gulpPlugins({lazy: true});

gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', () => {
    log('Analyzing source with TSLint!');

    //return gulp.src('src/app/**/*.ts')
    //    .pipe(plugins.tslint.tslint())
    //    .pipe(plugins.tslint.report('verbose'));
});

gulp.task('styles', () => {
    log('Compiling: ' + plugins.util.colors.yellow('LESS ---> CSS'));

    return gulp
        .src(CONFIG.less)
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({browser: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(CONFIG.tempCss));
});

gulp.task('clean', () => {
    log('Cleaning files somehow');

});

function log(msg) {
    if(typeof(msg) === 'object') {
        for(var item in msg) {
            if(msg.hasOwnProperty(item)) {
                plugins.util.log(plugins.util.colors.green(msg[item]));
            }
        }
    } else {
        plugins.util.log(plugins.util.colors.green(msg));
    }
}
