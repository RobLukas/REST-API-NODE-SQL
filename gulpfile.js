var gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
env = require('gulp-env');
// gulpMocha = require('gulp-mocha'),
// supertest = require('supertest');

gulp.task('default', () => {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', () => {
        console.log('Restarting on PORT -', PORT);
    })
})

gulp.task('test', () => {
    env({vars: {ENV: 'Test'}});
    // gulp.src('Tests/*.js', {read: false})
    // .pipe(gulpMocha({reporter: 'nyan'}));
})