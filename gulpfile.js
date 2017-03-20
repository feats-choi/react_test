var gulp = require("gulp");
var requireDir = require('require-dir');
var dir = requireDir('./build/gulp/tasks',{recurse: true});
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
  var babelWatch = paths.buildDir + '/babel/*.es6';

  console.log(ejsWatch);
  console.log(stylusWatch);
  console.log(babelWatch);

  gulp.watch(ejsWatch,['ejs'])
	gulp.watch(stylusWatch,['stylus'])
  gulp.watch(babelWatch,['babel'])
});

/*--------------- default_task ---------------*/
gulp.task('default',['ejs','stylus','babel','watch']);
