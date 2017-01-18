'use strict';

const gulp = require('gulp');
var mocha = require('gulp-mocha');
const $ = require('gulp-load-plugins')({
	camelize: true
});

require('require-dir')('./gulp');

// gulp.task('default', function (cb) {
// 	$.sequence('test', cb);
// });


gulp.task('default', function () {
	return gulp.src('test.js')
		.pipe(mocha())
		.once('error', function () {
			process.exit(1);
		})
		.once('end', function () {
			process.exit();
		});
});