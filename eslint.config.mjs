import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["projects/**/*"],
}, ...compat.extends(
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "array-element-newline": ["error", {
            minItems: 3,
        }],

        "array-bracket-newline": ["error", {
            minItems: 3,
        }],

        quotes: ["error", "single"],

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "never",
            exports: "never",
            functions: "never",
        }],

        "max-lines-per-function": ["error", 50],

        "max-len": ["error", {
            code: 200,
            ignoreComments: true,
        }],

        "max-statements": ["error", 20],

        "max-statements-per-line": ["error", {
            max: 2,
        }],

        "multiline-ternary": ["error", "never"],
        "object-curly-spacing": ["error", "never"],

        "keyword-spacing": ["error", {
            before: true,
            after: true,

            overrides: {
                break: {
                    before: true,
                    after: false,
                },

                continue: {
                    before: true,
                    after: false,
                },
            },
        }],

        "no-multi-spaces": ["error", {
            ignoreEOLComments: true,
        }],

        "no-trailing-spaces": ["error", {
            ignoreComments: true,
        }],

        semi: ["error", "never"],
        "object-property-newline": "error",

        "object-curly-newline": ["error", {
            ObjectExpression: {
                minProperties: 2,
            },

            ImportDeclaration: "never",
            ExportDeclaration: "never",
        }],
    },
}];