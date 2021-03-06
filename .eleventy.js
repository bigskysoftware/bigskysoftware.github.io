const pluginSass = require("eleventy-plugin-sass");

module.exports = function(config) {
    config.addPassthroughCopy("js");
    config.addPassthroughCopy("css");
    config.addPassthroughCopy("img");
    config.addPlugin(pluginSass, {});
}
