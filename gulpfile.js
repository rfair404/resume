var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');

gulp.task('default', function(){
// Default task code
});

gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./css'));
});
