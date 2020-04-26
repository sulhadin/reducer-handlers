import base from './rollup.config.base';

const config = {
  ...base,
  output: {
    file: 'dist/sulhadin-reducer-handlers.esm.js',
    format: 'es',
    name: 'reducer-handlers',
  },
};

export default config;
