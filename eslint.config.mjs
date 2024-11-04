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
        process: true, // Allow the process global
        require: true, // Allow the require global
        module: true, // Allow the module global
        __dirname: true, // Allow __dirname global
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
