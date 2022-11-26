module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: './tsconfig.json',
    sourceType: "module"
  },
  plugins: [
    "import" // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],
  root: true, // For configuration cascading.
  rules: {
    "eol-last": "error",
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        groups: [
          "builtin",
          "external",
          "index",
          "sibling",
          "parent",
          "internal"
        ]
      }
    ],
    indent: [
      "error",
      2
    ],
    "@typescript-eslint/quotes": [
        "error",
        "single",
        {
            "allowTemplateLiterals": true
        }
    ],
    "max-len": [
      "warn",
      {
        code: 120
        }
    ],
    "no-console": "warn",
    "no-duplicate-imports": "warn",
    "no-unused-vars": "warn",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
      quotes: [
        "warn",
        "single"
      ],
    "react/jsx-curly-spacing": [
      "warn",
      {
        allowMultiline: true,
        children: {
          when: "always"
        },
        spacing: {
          objectLiterals: "always"
        },
        when: "always"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/prop-types": "warn",
    semi: "warn",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
  },
  settings: {
    react: {
      version: "detect" // Detect react version
    }
  }
};
