var gulp = require("gulp");
var stylus = require("gulp-stylus");
var autoprefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");
var plumber = require("gulp-plumber");
var jsx = require("gulp-jsx");

gulp.task('default',['babel','watch','stylus','jsx']);

gulp.task('watch',function(){
	gulp.watch('./build/es6/*.es6',['babel'])
	gulp.watch('./build/stylus/*',['stylus'])
});

gulp.task('babel',function(){
	gulp.src('./build/es6/*es6')
			.pipe(plumber())
			.pipe(babel({
    			presets: ['es2015']
			}))
			.pipe(gulp.dest('./src/js/'))
});

gulp.task('jsx',function(){
	return gulp.src('./src/js/*.js')
			.pipe(jsx({
				factory: 'React.createClass'
			}))
			.pipe(gulp.dest('./src/jsx/'));
});


gulp.task('stylus',function(){
	gulp.src('./build/stylus/*')
			.pipe(plumber())
			.pipe(stylus())
			.pipe(autoprefixer())
			.pipe(gulp.dest('./src/css/'))
});
