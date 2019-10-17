module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "prettier/@typescript-eslint",
    "plugin:vue/essential",
    "@vue/typescript",
    "plugin:prettier/recommended",
    "@vue/airbnb",
    "prettier",
    "prettier/vue"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
    "comma-dangle": "off",
    "trailing-comma": "ignore",
    quotes: [2, "double", { avoidEscape: true }],
    noImplicitAny: true,
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
