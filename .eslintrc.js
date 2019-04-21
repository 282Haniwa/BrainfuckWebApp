module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
  ],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    "no-console": "warn"
  }
}
