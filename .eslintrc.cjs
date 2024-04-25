module.exports = {
  root: true,
  ignorePatterns: ['dist/**/*', 'coverage/**/*'],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'regexp', 'solid'],
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  env: { browser: true, es6: true },
  rules: {
    /* Common */
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      /* TypeScript/JavaScript */
      files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:regexp/recommended',
      ],
      rules: {
        'array-callback-return': 'warn',
        'no-cond-assign': ['warn', 'except-parens'],
        'no-control-regex': 'warn',
        'no-ex-assign': 'warn',
        'no-fallthrough': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sparse-arrays': 'warn',
        'no-unreachable': 'warn',
        'no-unreachable-loop': 'warn',
        'consistent-return': 'error',
        eqeqeq: ['warn', 'smart'],
        'logical-assignment-operators': ['warn', 'always', { enforceForIfStatements: true }],
        'no-caller': 'warn',
        'no-else-return': ['warn', { allowElseIf: false }],
        'no-empty-static-block': 'warn',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
        'no-extra-label': 'warn',
        'no-global-assign': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
        'no-lone-blocks': 'warn',
        'no-lonely-if': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': [
          'warn',
          {
            groups: [
              ['&', '|', '^', '~', '<<', '>>', '>>>'],
              ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
              ['&&', '||'],
              ['in', 'instanceof'],
            ],
            allowSamePrecedence: false,
          },
        ],
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-wrappers': 'warn',
        'no-octal-escape': 'warn',
        'no-regex-spaces': 'warn',
        'no-restricted-globals': ['error', 'event'],
        'no-restricted-properties': [
          'error',
          { object: 'require', property: 'ensure', message: 'Use import() instead' },
          { object: 'System', property: 'import', message: 'Use import() instead' },
        ],
        'no-restricted-syntax': ['warn', 'WithStatement'],
        'no-script-url': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-labels': 'warn',
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': ['warn', { ignoreDestructuring: false, ignoreExport: false }],
        'no-useless-return': 'warn',
        'no-with': 'warn',
        'object-shorthand': 'warn',
        'operator-assignment': 'warn',
        'prefer-exponentiation-operator': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'require-yield': 'warn',
        'spaced-comment': ['warn', 'always', { markers: ['/', 'TODO:', 'NOTE:', 'FIXME:'], exceptions: ['prettier-ignore'] }], //prettier-ignore
        strict: ['warn', 'never'],
        'dot-location': ['warn', 'property'],
        'new-parens': 'warn',
        'no-whitespace-before-property': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/consistent-generic-constructors': 'warn',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports', disallowTypeAnnotations: false }], //prettier-ignore
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-this-alias': ['warn', { allowedNames: ['self'] }],
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }], //prettier-ignore
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        'import/no-empty-named-blocks': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        'regexp/prefer-quantifier': 'warn',
        'regexp/prefer-regexp-test': 'warn',

        /* Exceptions to make TypeScript less strict */
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // Please don't do this though
      },
    },
    {
      /* TypeScript/JavaScript in src/ */
      files: ['src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      extends: ['plugin:solid/typescript'],
      parserOptions: { ecmaVersion: 'latest', ecmaFeatures: { jsx: true }, tsconfigRootDir: __dirname, project: true },
      rules: {
        'dot-notation': 'off',
        'no-implied-eval': 'off',
        'require-await': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-redeclare': 'warn',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
        '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: false, variables: false, typedefs: false }], //prettier-ignore
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }], //prettier-ignore
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/strict-boolean-expressions': ['warn', { allowNullableBoolean: true, allowNullableString: true, allowNullableNumber: true }], //prettier-ignore
        'solid/reactivity': 'off',
        'solid/no-innerhtml': 'off',
      },
    },
    {
      /* Declaration & Config */
      files: ['**/*.d.ts', '**/*.config.*', '*rc.cjs'],
      env: { browser: true, commonjs: true, es6: true, node: true },
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
  ],
};