import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Ignore vendor/minified files
  {
    ignores: [
      "node_modules/**",
      "assets/js/*.min.js",
      "assets/js/*.min.jssourcemap",
      "assets/js/swiper-bundle.min.js",
    ],
  },
  // Main config for custom JS
  {
    ...js.configs.recommended,
    files: ["assets/js/custom.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.browser,
        Swiper: "readonly",
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "warn",
      "no-unused-vars": "warn",
      "no-redeclare": "warn",
      "no-undef": "warn",
      "no-empty": "warn",
      "no-dupe-keys": "warn",
    },
  },
];
