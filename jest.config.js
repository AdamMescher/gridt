const config = {
  transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
  moduleNameMapper: {
    d3: '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
};

module.exports = config;
