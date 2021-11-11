module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    resolver: '<rootDir>/my-module-resolve.js',
    transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@firebase.*)/)"
  ]
}
