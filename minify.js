const minify = require('@node-minify/core');
const babelMinify = require('@node-minify/babel-minify');
const terser = require('@node-minify/terser');
const uglify = require('@node-minify/uglify-js');
/*
minify({
  compressor: babelMinify,
  input: 'src/sosie.js',
  output: 'dist/editor.js',
  callback: function(err, min) {}
});*/
/*
minify({
  compressor: terser,
  input: 'src/sosie.js',
  output: 'dist/editor.js',
  callback: function(err, min) {}
});
*/
/*
minify({
  compressor: uglify,
  input: 'src/sosie.js',
  output: 'dist/editor.js',
  callback: function(err, min) {}
});
*/
console.error('CANCELLED: For now, no compressor work - code is endommaged so use source instead é_è .');
