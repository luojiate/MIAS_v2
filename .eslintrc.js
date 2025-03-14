module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react"],
    rules: {
      // 自定義規則，例如：
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"]
    }
  };
  