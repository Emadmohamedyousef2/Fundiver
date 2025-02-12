var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass')),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('image', function() {
    return gulp.src('fundiver_dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())

});

gulp.task('js', function() {
    return gulp.src(['fundiver_dev/js/**/*.*', 'fundiver_dev/js/*.js']) // al folder al feh al files bt3te
        .pipe(concat('all.js')) // asm al file al ht3ml fe merge l kol dh 
        //  pipe bt5od al tasks bt3te kolha w tnfzha kolha wra b3d
        .pipe(gulp.dest('dist/js')) // kda al hytl3 h5leh gwa folder dist al hwa mian.css
        .pipe(connect.reload())


});

gulp.task('css', function() {
    return gulp.src('fundiver_dev/scss/style.scss')
        .pipe(sourcemaps.init()) //lazem yt7t b3d al source 3la tol 
        .pipe(sass({ outputStyle: 'compressed' })) //hytl3 al output style md3'ot
        .pipe(prefix('last 2 versions')) //bygeb a5er 2 versions mn al brwosers
        .pipe(concat('style.css')) // asm al file al ht3ml fe merge l kol dh 
        .pipe(sourcemaps.write('.')) //lazem yt7t abl al dist 3la tol 
        //al dot ht7ot al map gnb al file al b3mlo map
        .pipe(gulp.dest('dist/css')) // kda al hytl3 h5leh gwa folder dist al hwa mian.css
        .pipe(connect.reload())

});

gulp.task("cssar", function() {
    return (
        gulp
        .src("fundiver_dev/scss/style-rtl.scss")
        .pipe(sourcemaps.init()) //lazem yt7t b3d al source 3la tol
        .pipe(sass({ outputStyle: 'compressed' })) //hytl3 al output style md3'ot
        .pipe(prefix("last 2 versions")) //bygeb a5er 2 versions mn al brwosers
        .pipe(concat("style-rtl.css")) // asm al file al ht3ml fe merge l kol dh
        //  .pipe(sourcemaps.write(".")) //lazem yt7t abl al dist 3la tol
        .pipe(gulp.dest("dist/css"))
    ); // kda al hytl3 h5leh gwa folder dist al hwa mian.css
});
gulp.task('html', function() {
    return gulp.src('fundiver_dev/*.html')
        .pipe(htmlmin('*.html')) // asm al file al ht3ml fe merge l kol dh 
        .pipe(sourcemaps.write('.')) //lazem yt7t abl al dist 3la tol 
        //al dot ht7ot al map gnb al file al b3mlo map
        .pipe(gulp.dest('dist/')) // kda al hytl3 h5leh gwa folder dist al hwa mian.css
        .pipe(connect.reload())

});
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 8000,
        root: 'dist',
        host: '0.0.0.0'
    });
});



gulp.task('watch', function() {
    //  require('./server.js'); //sh3'l al server
    //  livereload.listen(); // by3ml listen lle 3mlhom livereload
    gulp.watch('fundiver_dev/scss/**/*.scss', gulp.series('css')) //ay folder gwa al css w ay file amtddao css 
    gulp.watch("fundiver_dev/scss/style-rtl.scss", gulp.series("cssar")); //ay folder gwa al css w ay file amtddao css

    gulp.watch(['fundiver_dev/js/**/*.*', 'fundiver_dev/js/*.js'], gulp.series('js')) //ay folder gwa al css w ay file amtddao css 
    gulp.watch('fundiver_dev/*.html', gulp.series('html'))
    gulp.watch('fundiver_dev/images/*', gulp.series('image'))



});

gulp.task('default', gulp.parallel(['webserver', 'watch'], function() {
    // default task code here
})); // al default task bt3t al gulp ana 5ltha watch hktb fe al command gulp hynfz b2a al gwa al watch 3la tol