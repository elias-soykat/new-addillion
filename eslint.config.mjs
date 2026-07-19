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
      "assets/js/jquery-3.6.0.min.js",
      "assets/js/swiper-bundle.min.js",
      "assets/js/jquery.marquee.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/popper.min.js",
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
        ...globals.jquery,
        jQuery: "readonly",
        $: "readonly",
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
