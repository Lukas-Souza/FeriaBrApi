const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginPrettier = require('eslint-plugin-prettier/recommended');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  
   {
    ignores: ['node_modules/**', 'mysql_data/**', 'dist/**', 'build/**', 'coverage/**'],
  },

  
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },

  
  pluginJs.configs.recommended,

  pluginPrettier,

  
  {
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
