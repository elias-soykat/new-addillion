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
      "assets/js/TweenMax.min.js",
      "assets/js/gsap.min.js",
      "assets/js/isotope.pkgd.min.js",
      "assets/js/simpleParallax.min.js",
      "assets/js/swiper-bundle.min.js",
      "assets/js/waypoints.min.js",
      "assets/js/wow.min.js",
      "assets/js/jquery.counterup.min.js",
      "assets/js/jquery.fancybox.min.js",
      "assets/js/jquery.marquee.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/popper.min.js",
      "assets/js/preloader.js",
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
        WOW: "readonly",
        gsap: "readonly",
        Power2: "readonly",
        Expo: "readonly",
        Scrollbar: "readonly",
        isMobile: "readonly",
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
