var gulp = require("gulp");
var path = require("path");

/*------------- babel ---------------*/
var babel = require("gulp-babel");
/*---------- error_handring ----------*/
var plumber = require("gulp-plumber");
/*--------------- path ---------------*/
var paths = {
    buildDir:'./build',
		srcDir: './src'
};

gulp.task('babel',function(){
	var buildGolb = paths.buildDir + '/es6/*.es6';
	var srcGolb = paths.srcDir + '/js';

	gulp.src(buildGolb)
			.pipe(plumber())
			.pipe(babel({
    			presets: ['es2015']
			}))
			.pipe(gulp.dest(srcGolb))
});
