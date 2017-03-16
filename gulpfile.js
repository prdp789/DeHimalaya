var gulp = require('gulp');
var streamqueue  = require('streamqueue');
var concat = require('gulp-concat'); 
var runSequence= require('run-sequence');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');  
var uglifycss = require('gulp-uglifycss');
 
gulp.task('css',function(){
    return streamqueue({ objectMode: true },
         gulp.src([
        './css/bootstrap.css',
        './css/owl-carousel.css',
        './css/flexslider.css',
        './css/animate.min.css',
        './css/style.css'
    ]))
    .pipe(concat("all.min.css"))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./css'));
});


gulp.task('scripts', function() {  

         return streamqueue({ objectMode: true },
         gulp.src([
         './js/jquery.min.js',
         './js/bootstrap-3.1.1.min.js',
         './js/simpleCart.min.js',
         './js/wow.min.js',
         //'./js/easyResponsiveTabs.js',
         // './js/imagezoom.js',
         // './js/jquery.flexisel.js',
         // './js/jquery.flexslider.js',
         // './js/jquery.slide.js',
         './js/owl.carousel.js',
         './js/custom.js'
         ]))
         
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});


gulp.task('default', function(callback) {
  runSequence(['scripts','css']);
});