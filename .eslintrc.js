const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: false,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$',
      },
    ],
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    'no-invalid-this': 0,
    'babel/no-invalid-this': 1,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'arrow-body-style': RULES.OFF,
    'react/jsx-wrap-multilines': RULES.OFF,
    'no-unused-expressions': RULES.OFF,
    'jsx-a11y/no-static-element-interactions': RULES.OFF,
    'jsx-a11y/click-events-have-key-events': RULES.OFF,
    'no-underscore-dangle': RULES.OFF,
    'no-unused-vars': RULES.OFF,
    'no-console': RULES.OFF,
    'jsx-a11y/anchor-is-valid': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'jsx-a11y/label-has-associated-control': RULES.OFF,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
};
