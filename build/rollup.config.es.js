import base from './rollup.config.base';

const config = {
  ...base,
  output: {
    file: 'dist/sulhadin-redux-reducer-handler.esm.js',
    format: 'es',
    name: 'redux-reducer-handler',
  },
};

export default config;
