module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".jsx"],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@global": "./src/global",
            "@assets": "./src/assets",
            "@services": "./src/services",
          },
        },
      ],
    ],
  };
};
