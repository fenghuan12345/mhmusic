module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/first-attribute-linebreak": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-reserved-component-names": "off",
    "vue/html-closing-bracket-newline": 0,
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
