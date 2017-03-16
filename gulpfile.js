var gulp = require("gulp");

/*--------------- css ---------------*/
var stylus = require("gulp-stylus");
var autoprefixer = require("gulp-autoprefixer");

/*----------- javascript ------------*/
var babel = require("gulp-babel");
// var jsx = require("gulp-jsx");

/*---------- error_handring ----------*/
var plumber = require("gulp-plumber");

/*--------------- path ---------------*/
var paths = {
    stylus: ['./build/stylus/*','!./build/stylus/_*'],
		stylus_base: ['./src/css/']
};

/*--------------- Main_task ---------------*/
gulp.task('default',['stylus','watch']);

/*----------------- watch -----------------*/
gulp.task('watch',function(){
	// gulp.watch('./build/es6/*.es6',['babel'])
	gulp.watch('./build/stylus/*.styl',['stylus'])
});

gulp.task('stylus',function(){
	gulp.src(paths.stylus)
			.pipe(plumber())
			.pipe(stylus())
			.pipe(autoprefixer())
			.pipe(gulp.dest('./src/css/'))
});

// gulp.task('babel',function(){
// 	gulp.src('./build/es6/*es6')
// 			.pipe(plumber())
// 			.pipe(babel({
//     			presets: ['es2015']
// 			}))
// 			.pipe(gulp.dest('./src/js/'))
// });

// gulp.task('jsx',function(){
// 	return gulp.src('./src/js/*.js')
// 			.pipe(jsx({
// 				factory: 'React.createClass'
// 			}))
// 			.pipe(gulp.dest('./src/jsx/'));
// });
