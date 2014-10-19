var gulp = require('gulp'),
    raml2html = require('gulp-raml2html');

gulp.task('doc:v1.0', function (callback) {
  return gulp.src('raml/v1.0/*.raml')
    .pipe(raml2html())
    .pipe(gulp.dest('docs/v1.0'));
});

gulp.task('doc', ['doc:v1.0']);