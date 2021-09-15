module.exports = {
  settings: {
    angular: {
        version: "detect",
    },
  },
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/template/process-inline-templates",
        "airbnb-typescript/base"
      ],
      rules: {
        "no-param-reassign": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "class-methods-use-this": "off",
        "no-console": "warn",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "import/prefer-default-export": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      // rules: {}
    },
  ]
}
