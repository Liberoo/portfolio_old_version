const { src, dest, watch, series } = require('gulp');
//general
const  rename = require('gulp-rename');
const  connect = require('gulp-connect');
const  del = require('del');
// styles
const  sass = require('gulp-sass');
const  autoprefixer = require('gulp-autoprefixer');
const  csso = require('gulp-csso');
//scripts
const  uglify = require('gulp-uglify');
const  babel = require('gulp-babel');
//images
const imagemin = require('gulp-imagemin');
//html
const  htmlPartial = require('gulp-html-partial');


function styles() {
    return src('./assets/scss/main.scss')
        .pipe(
            sass({
                outputStyle: 'nested',
                precision: 10,
                includePaths: ['.'],
                onError: console.error.bind(console, 'Sass error:')
            })
        )
        .pipe(
            rename({suffix: '.min'})
        )
        .pipe(
            dest('./dist/assets/css')
        )
        .pipe(
            autoprefixer({"overrideBrowserslist": [
                "last 2 versions",
                ">1%"
            ]})
        )
        .pipe(
            csso()
        )
        .pipe(
            connect.reload()
        )
}


function scripts() {
    return src('./assets/js/**/*.js')
        .pipe(
            babel({
                presets: ['@babel/env']
            })
        )
        .pipe(
            uglify()
        )
        .pipe(
            dest('./dist/assets/js')
        )
        .pipe(
            connect.reload()
        )
}


function images() {
    return src('./assets/img/**/*')
        .pipe(
            imagemin()
        )
        .pipe(
            dest('./dist/assets/img')
        )
        .pipe(
            connect.reload()
        )
}


function html() {
    return src('./src/*.html')
        .pipe(
            htmlPartial({
                basePath: 'src/partials/'
            })
        )
        .pipe(
            dest('./')
        )
        .pipe(
            connect.reload()
        )
}


function webserver() {
    connect.server({
        port: 7005,
        livereload: {
            port: 35725
        }
    });
}


function clean() {
    del(['./dist'])
}

exports.default = function() {
    webserver();
    watch('assets/scss/**/*', styles);
    watch('assets/js/**/*', scripts);
    watch('assets/img/**/*', images);
    watch('src/**/*', html);
}

exports.dev = series(styles, scripts, images, html);
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.clean = clean;