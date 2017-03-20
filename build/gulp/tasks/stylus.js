var gulp = require("gulp");
var path = require("path");

/*------------- stylus -------------*/
var stylus = require("gulp-stylus");
var autoprefixer = require("gulp-autoprefixer");
/*---------- error_handring ----------*/
var plumber = require("gulp-plumber");
/*--------------- path ---------------*/
var paths = {
    buildDir:'build',
		srcDir: 'src'
};

/*------------- stylus_task -------------*/
gulp.task('stylus',function(){
	var buildGolb = paths.buildDir + 'stylus/*.styl';
	var srcGolb = paths.srcDir + '/css';

	gulp.src(buildGolb)
			.pipe(plumber())
			.pipe(stylus())
			.pipe(autoprefixer())
			.pipe(gulp.dest(srcGolb))
});
