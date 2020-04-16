module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: [
    "plugin:vue/base"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {

    sourceType: "module",
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      impliedStrict: false
    },
  },
  plugins: ["vue"],
  rules: {},
};
