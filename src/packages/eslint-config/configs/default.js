module.exports = {
  settings: {
    'import/internal-regex': '(^@eduzz|react|^@nestjs|^~)'
  },
  plugins: ['prettier', 'eslint-plugin-unused-imports'],
  extends: ['plugin:prettier/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: { modules: true, jsx: true }
  },
  rules: {
    'no-restricted-globals': ['error'],
    'no-restricted-imports': ['error', 'date-fns', 'mdi-react', 'lodash', '@material-ui/core', '@material-ui/styles'],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 300],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    eqeqeq: 0,
    'quote-props': 'off',
    'no-useless-escape': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
    'import/no-unused-modules': 'off',
    'import/newline-after-import': 'error',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', ['external', 'internal'], ['parent', 'sibling', 'index'], 'type', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@nestjs/**', group: 'external', position: 'before' },
          { pattern: '@eduzz/**', group: 'internal', position: 'after' },
          { pattern: '~/**', group: 'internal', position: 'after' }
        ]
      }
    ]
  }
};
