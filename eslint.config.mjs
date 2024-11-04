import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true, // Define process as a global variable
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      // Add any specific rules here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
