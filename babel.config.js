module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            components: "./src/components",
            navigation: "./src/navigation",
            screens: "./src/screens",
            utils: "./src/utils",
            style: "./src/style",
          },
        },
      ],
      "nativewind/babel",
    ],
  };
};
