module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  },
  globals: {
    describe: false,
    test: false,
    expect: false,
    jest: false,
    afterEach: false
  }
};
