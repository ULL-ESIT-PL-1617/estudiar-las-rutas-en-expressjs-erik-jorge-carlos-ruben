var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

//gulp.task('default', ['github', 'build', 'deploy', 'iaas']);

//gulp.task('github', shell.task(['git add .', 'git commit -m "Actualizando servidor"', 'git push origin master']));

gulp.task('build', shell.task(['gitbook build ./docs ./public']));

gulp.task('serve', shell.task(['gitbook serve ./docs']));

gulp.task('routing_api_tests', shell.task(['curl https://powerful-lowlands-94980.herokuapp.com/myFirstRoute/heyThereFirstRoute', 'curl https://powerful-lowlands-94980.herokuapp.com/myFirstRoute/heyThereFirstRouteAgain']));

gulp.task('basic_get', shell.task(['curl -X GET https://practica3.herokuapp.com/basic']));

gulp.task('basic_post', shell.task(['curl -X POST https://practica3.herokuapp.com/basic']));

gulp.task('basic_put', shell.task(['curl -X PUT https://practica3.herokuapp.com/basic/user']));

gulp.task('basic_delete', shell.task(['curl -X DELETE https://practica3.herokuapp.com/basic/user']));

gulp.task('rout_uno', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/acd']));

gulp.task('rout_dos', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/abbbbcd']));

gulp.task('rout_tres', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/abCULAQUIERCOSAcd']));

gulp.task('rout_cuatro', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/abe']));

gulp.task('rout_cinco', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/xxxxxaxxxxxx']));

gulp.task('rout_seis', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/butterfly']));

gulp.task('next_uno', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/next']));

gulp.task('next_dos', shell.task(['curl -X GET https://practica3.herokuapp.com/routing/next2']));

gulp.task('middleware', shell.task(['curl -X GET https://practica3.herokuapp.com/middleware/user/usuario']));
