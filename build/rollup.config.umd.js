import base from './rollup.config.base';

const config = {
  ...base,
  output: {
    file: 'dist/sulhadin-redux-reducer-handler.umd.js',
    format: 'umd',
    name: 'redux-reducer-handler',
  },
};

export default config;
