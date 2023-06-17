module.exports = {
  plugins: [
    require("postcss-preset-env")({
      browsers: "last 2 versions",
    }),
    require("autoprefixer")({
      overrideBrowserslist: "last 2 versions",
    }),
  ],
};
