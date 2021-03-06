var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
var plugins = gulpLoadPlugins();

gulp.task('tsc', function () {
    var tsProject = plugins.typescript.createProject('tsconfig.json', { noImplicitAny: false });
    return gulp.src('./server/**/*.ts')
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('serve', ['tsc'], function (cb) {
    plugins.nodemon({
        script: 'app.js',
        tasks: ['tsc'],
        watch: './server',
        ext: 'ts'
        //...add nodeArgs: ['--debug=5858'] to debug 
        //..or nodeArgs: ['--debug-brk=5858'] to debug at server start
    }).on('restart', function () {
        gulp.src('./app.js')
            .pipe(plugins.livereload())
            .pipe(plugins.notify('Server restarted'));
    });
});

  var fontName = 'iconfont';

  gulp.task('iconfont', function() {
    gulp.src(['./iconfont/SVG/*.svg'])
      .pipe(plugins.iconfontCss({
        fontName: fontName,
        path: './iconfont/template-iconfont.css',
        targetPath: '../../styles/iconfont.scss',
        fontPath: 'fonts/iconfont/'
      }))
      .pipe(plugins.iconfont({
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        fontName: fontName
      }))
      .pipe(gulp.dest('./src/fonts/iconfont'));
  });
