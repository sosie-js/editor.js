const minify = require('@node-minify/core');
const babelMinify = require('@node-minify/babel-minify');
const terser = require('@node-minify/terser');
const uglify = require('@node-minify/uglify-js');

/* 6k
minify({
  compressor: babelMinify,
  input: 'src/sosie.js',
  output: 'dist/editor-babel.js',
  callback: function(err, min) {}
});
*/

//the winner 3k
minify({
  compressor: terser,
  input: 'src/sosie.js',
  output: 'dist/sosie.js',
  callback: function(err, min) {}
});

/* Buggy 
minify({
  compressor: uglify,
  input: './src/sosie.js',
  output: './dist/editor.js',
  callback: function(err, min) {}
});*/

//console.error('CANCELLED: For now, no compressor work - code is endommaged so use source instead é_è .');
