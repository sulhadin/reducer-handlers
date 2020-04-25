import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/sulhadin-redux-reducer-handler.umd.js',
    format: 'umd',
    name: '@sulhadin/redux-reducer-handler',
  },
});

export default config;
