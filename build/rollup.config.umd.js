import base from './rollup.config.base';

const config = {
  ...base,
  output: {
    file: 'dist/sulhadin-reducer-handlers.umd.js',
    format: 'umd',
    name: 'reducer-handlers',
  },
};

export default config;
