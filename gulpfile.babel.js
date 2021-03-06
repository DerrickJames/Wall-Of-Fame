'use strict'

import gulp from 'gulp';
import del from 'del';
import tscConfig from './tsconfig';
import gulpPlugins from 'gulp-load-plugins';
import {log} from './tools/utils';
import {CONFIG, TMP, ROOT_SRC} from './tools/gulp.config';

const plugins = gulpPlugins({lazy: true});

gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', () => {
    log(plugins, 'Analyzing source with TSLint!');

    return gulp.src('src/app/**/*.ts')
        .pipe(plugins.tslint())
        .pipe(plugins.tslint.report('prose'));
});

gulp.task('styles', ['clean-styles'], () => {
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

gulp.task('fonts', ['clean-fonts'], () => {
   log(plugins, 'Copying fonts');

   return gulp
    .src(CONFIG.fonts)
    .pipe(gulp.dest(CONFIG.build + 'fonts'));
});

gulp.task('images', ['clean-images'], () => {
   log(plugins, 'Copying and compressing images');

   return gulp
    .src(CONFIG.images)
    .pipe(plugins.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(CONFIG.build + 'images'));
});

gulp.task('clean', (done) => {
    var deleteConfig = [].concat(TMP, CONFIG.build);

    log(plugins, 'Cleaning build & temp folders');

    del(deleteConfig, done);
});

gulp.task('clean-styles', () => {
   var files = CONFIG.tmpCss + '**/*.css';

   del(files);
});

gulp.task('clean-images', () => {
   var files = CONFIG.build + 'images/**/*.*';

   del(files);
});

gulp.task('clean-fonts', () => {
    var files = CONFIG.build + 'fonts/**/*.*';

    del(files);
});

gulp.task('less-watcher', () => {
    gulp.watch([CONFIG.less], ['styles']);
});

gulp.task('wiredep', () => {
    log(plugins, 'Wiring Ip: ' + 
        plugins.util.colors.yellow('Bower css & js + app js ---> index.html'));

    var wiredep = require('wiredep').stream,
        options = CONFIG.getWiredepDefaultOptions();

/**    return gulp
        .src(CONFIG.index)
        .pipe(wiredep(options))
        .pipe(plugins.inject(gulp.src(CONFIG.js)))
        .pipe(gulp.dest(ROOT_SRC));*/
});
