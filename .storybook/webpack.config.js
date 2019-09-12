const path = require("path");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config }) => {
  //config
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.plugins = config.resolve.plugins || [];
  // lerna bootstrap creates a symlink to shared packages
  // In order for storybook to bundle the symlinked package
  // when importing one package into another we need to create an alias
  // This will allow for storybook to work properly. See example below

  // We create an alias and load it from src instead of node_modules
  config.resolve.alias = {
    "example-one": path.resolve(__dirname, "../packages/ExampleOne/src/index")
  };

  config.resolve.plugins.push(
    new TSConfigPathsPlugin({
      configFile: path.join(__dirname, "tsconfig.json")
    })
  );
  return config;
};
