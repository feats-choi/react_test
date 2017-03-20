var gulp = require("gulp");
var ejs = require("gulp-ejs");
var stylus = require("gulp-stylus");
var babel = require("gulp-babel");

var requireDir = require('require-dir');
var dir = requireDir('build/gulp/task',{recurse: true});
var path = require("path");

/*--------------- path ---------------*/
var paths = {
    buildDir:'build',
		srcDir: 'src'
};

/*----------------- watch -----------------*/
gulp.task('watch',function(){
  var ejsWatch = paths.buildDir + '/ejs/*.ejs';
  var stylusWatch = paths.buildDir + '/stylus/*.styl';
  var babelWatch = paths.buildDir + '/es6/*.es6';

  gulp.watch(ejsWatch,['ejs'])
	gulp.watch(stylusWatch,['stylus'])
  gulp.watch(babelWatch,['babel'])
});

/*--------------- default_task ---------------*/
gulp.task('default',['ejs','stylus','watch']);
