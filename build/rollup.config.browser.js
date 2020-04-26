import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import base from './rollup.config.base';

const config = {
  ...base,
  output: {
    file: 'dist/sulhadin-reducer-handlers.min.js',
    format: 'iife',
    name: 'ReducerHandlers',
  },
};

config.plugins.push(uglify({}, minify));

export default config;
