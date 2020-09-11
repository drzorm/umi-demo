module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["alloy", "alloy/react", "alloy/typescript", "plugin:react-hooks/recommended"],
  globals: {
    ENV: "readonly",
    SERVER_PATH: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
  },
};
