module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': ['eslint:recommended', 'eslint-config-prettier'],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    "lines-between-class-members": ["error"],
    "object-curly-spacing": ["warn", "always"],
    "arrow-spacing": ["warn", {
      "before": true,
      "after": true
    }],
    "keyword-spacing": ["warn", {
      "after": true,
    }],
    "object-curly-newline": ["warn", {
      "ObjectExpression": "always",
      "ObjectPattern": {
        "multiline": true
      },
      "ImportDeclaration": "never",
      "ExportDeclaration": {
        "multiline": true,
        "minProperties": 3
      }
    }],
    "comma-dangle": ["warn", "only-multiline"],
    "no-trailing-spaces": ["warn", {
      "ignoreComments": true
    }],
    "key-spacing": ["warn", {
      "afterColon": true,
    }],
    "comma-spacing": ["warn"]
  }
};