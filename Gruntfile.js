module.exports = function(grunt) {
	// Setando a configuração de objetos ======================================
	var config = {};
	grunt.initConfig(config);

	// Carregando todas tarefas ===============================================
	var tasks = [
		 	"grunt-contrib-jshint"
		, 	"grunt-contrib-watch"
		, 	"grunt-contrib-uglify"
		, 	"grunt-contrib-concat"
		, 	"grunt-contrib-sass"
		, 	"grunt-contrib-imagemin"
	];

	// JSHint =================================================================
	var jshint;
	config.jshint = jshint = {};

	jshint.dist = {
			options: {
					strict: true
				, 	laxcomma: true
				, 	sub: true
		},
		files: { all: ["assets/javascripts/scripts.js"]}
	};	

	jshint.dev = {
		options: {
				strict: true
			, 	laxcomma: true
			, 	sub: true
			, 	debug: true
		},
		files: { all: ["assets/javascripts/scripts.js"]}
	};	

	// Sass ===================================================================
	var sass;
	config.sass = sass = {};

	sass.dist = {
			options: {style: "compressed"}
		,	files: {
				"assets/public/style.css": "scss/main.scss"
		}
	};
	sass.dev = {
			options: {style: "expanded", lineNumbers: true}
		,	files: {
				"assets/public/style.dev.css": "scss/**/*.scss"
		}
	};

	// Concat =================================================================
	var concat;
	config.concat = concat = {};

	concat.dev = {
		files: {
			"assets/public/app.js": [
					"assets/javascripts/jquery.js"
				,	"assets/javascripts/scripts.js"
			]
		}
	};

	// Uglify =================================================================
	var uglify;
	config.uglify = uglify = {};

	uglify.dist = {
		options: {
				sourceMap: true
			, 	sourceMapName: "assets/public/app.map"
			,	report: "gzip"
		},
		files: {
			"assets/public/app.min.js": ["assets/public/app.js"]
		}
	};
	// Imagemin ===============================================================
	var imagemin;
	config.imagemin = imagemin = {};

	imagemin.dist = {
		files: [{
			expand: true,
			cwd: "assets/images/",
			src: ['**/*.{png,jpg,gif}', '!**/min/**'],
			dest: 'assets/images/min/'
		}]
	};

	// Watch ==================================================================
	config.watch = {
		scripts: {
				files: ["assets/scss/**/*.scss", "assets/javascripts/**/*.js"]
			,	tasks: ["dev"]
			,	options: {
      	livereload: true
    	}
		}, 
		options: {
			livereload: true
		}
	};

	// Tarefas personalizadas 
	grunt.registerTask("default", ["dev"]);
	grunt.registerTask("dev", ["sass:dev", "jshint:dev", "concat:dev"]);
	grunt.registerTask("dist", ["sass:dist", "jshint:dist", "concat:dev", "uglify:dist", "imagemin:dist"]);

	// Configurações gerais ===================================================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);
};