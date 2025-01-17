const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"))
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")

function compilaImg() {
    return gulp.src("source/images/*",  {encoding: false} )
            .pipe(imagemin())
            .pipe(gulp.dest("./build/images"))
}

function compilaJS() {
    return gulp.src("./source/scripts/*.js")
            .pipe(uglify())
            .pipe(gulp.dest("./build/scripts"))
}

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
            .pipe(sass())
            .pipe(gulp.dest("./build/styles"))
}

exports.default = function() {
    gulp.watch("./source/styles/*.scss", {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch("./source/scripts/*.js", {ignoreInitial: false}, gulp.series(compilaJS))
    gulp.watch("./source/images/*", {ignoreInitial: false,}, gulp.series(compilaImg))
}

//exports.sass = compilaSass
//exports.javascript = compilaJS
//exports.image = compilaImg