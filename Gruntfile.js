module.exports = function(grunt) {

  // Configuração das tarefas
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'main.css': 'src/main.less'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/script.min.js': ['src/script.js']
        }
      }
    }
  });

  // Carregamento dos plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefa padrão
  grunt.registerTask('default', ['less', 'uglify']);

};
