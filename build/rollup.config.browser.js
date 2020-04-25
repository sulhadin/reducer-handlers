import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/sulhadin-redux-reducer-handler.min.js',
    format: 'iife',
    name: 'SulhadinReduxReducerHandler',
  },
});

config.plugins.push(uglify({}, minify));

export default config;
