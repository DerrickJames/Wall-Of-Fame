'use strict'

import gulp from 'gulp';
import del from 'del';
import tscConfig from './tsconfig';
import gulpPlugins from 'gulp-load-plugins';
import {log} from './tools/utils';
import {CONFIG, TMP} from './tools/gulp.config';

const plugins = gulpPlugins({lazy: true});

gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', () => {
    log(plugins, 'Analyzing source with TSLint!');

    //return gulp.src('src/app/**/*.ts')
    //    .pipe(plugins.tslint.tslint())
    //    .pipe(plugins.tslint.report('verbose'));
});

gulp.task('styles', () => {
    log(plugins, 'Compiling: ' + plugins.util.colors.yellow('LESS ---> CSS'));

    return gulp
        .src(CONFIG.less)
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({browser: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(CONFIG.tmpCss));
});

gulp.task('templates', () => {
   log(plugins, 'Compiling: ' + plugins.util.colors.yellow('JADE ---> HTML'));

   return gulp
    .src(CONFIG.jade)
    .pipe(plugins.jade({pretty: true}))
    .pipe(gulp.dest(CONFIG.tmpTemplates));
});

gulp.task('fonts', () => {
   log('Copying fonts');

   return gulp
    .src(CONFIG.fonts)
    .pipe(gulp.dest(CONFIG.build + 'fonts'));
});

gulp.task('clean', (done) => {
    var deleteConfig = [].concat(TMP, CONFIG.build);

    log(plugins, 'Cleaning build & temp folders');

    del(deleteConfig, done);
});
