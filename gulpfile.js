var gulp = require('gulp');
gulp.task('sayHello', function() {
    console.log("Hello Developers!!!");
});
gulp.task('default',['sayHello']);