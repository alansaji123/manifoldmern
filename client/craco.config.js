const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#3FA796",
              "@primary-color-hover": "#3FA796",
              "@primary-color-active": "#3FA796",
              "@primary-color-outline": "#3FA796",
              "@processing-color": "#3FA796",
              "@info-color": "#3AB0FF",
              "@info-color-deprecated-bg": "#3AB0FF",
              "@info-color-deprecated-border": "#3AB0FF",
              "@text-color-secondary": "#0D7377",
              "@border-color-base": "#3FA796",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
