module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'components/**/*.js'],
			options: {
				globals: {
					jQuery: true
				},
				esnext: true
			}
		},

		testee: {
			options: {
				reporter: 'Spec',
				browsers: ['canary']
			},
			all: {
				src: ['components/app/test.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('testee');

	grunt.registerTask('default', ['jshint', 'testee']);
};