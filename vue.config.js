const { defineConfig } = require("@vue/cli-service");
const public_path = "/vsk/template/help-desk/client/";
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? public_path : "/",
  outputDir: process.env.NODE_ENV === "production" ? "client" : "dist",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
