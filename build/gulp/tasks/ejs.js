var gulp = require("gulp");
var path = require("path");

/*-------------- ejs ---------------*/
var ejs = require("gulp-ejs");
/*-------------- rename ---------------*/
var rename = require("gulp-rename");
/*--------------- path ---------------*/
var paths = {
    buildDir:'build',
		srcDir: 'src'
};


/*-------------- ejs_task ---------------*/
gulp.task('ejs',function(){
	var buildGolb = paths.buildDir + 'ejs/*.ejs';
	var srcGolb = paths.srcDir;

	gulp.src(buildGolb)
			.pipe(ejs())
			.pipe(rename({
				extname:'.html'
			}))
			.pipe(gulp.dest(srcGolb))
});
