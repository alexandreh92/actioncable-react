module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    // Allow unused vars starting with _
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Prevent allow JSX inside js,jsx and tsx files
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],

    // Return errors for unresolved imports
    "import/no-unresolved": "error",

    // Return errors for prettier inconsistencies
    "prettier/prettier": "error",

    // Allow using devDependencies on rootDir
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],

    // Disables default exportations
    "import/prefer-default-export": "off",

    // Disabled useless fragments (disabled because this is returning a false positive)
    // see https://github.com/jsx-eslint/eslint-plugin-react/issues/2584
    "react/jsx-no-useless-fragment": "off",
  },
};
