'use strict'

import gulp from 'gulp';
import del from 'del';
import typescript from 'gulp-typescript';
import tscConfig from './tsconfig';
import util from 'gulp-util';

gulp.task('clean', () => {
   util.log('Cleaning files somehow');
});
