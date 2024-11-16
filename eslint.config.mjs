import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            semi: 'error',
            eqeqeq: 'error',
            indent: ['warn', 4],
            quotes: ['warn', 'single', { allowTemplateLiterals: true }],
            curly: 'error',
            'no-var': 'error',
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'no-mixed-spaces-and-tabs': 'error'
        }
    }
];
