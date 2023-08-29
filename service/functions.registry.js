const settingFunction = require("./functions/settings.functions");

const functionsRegistry = {
   "getUserSettingsFunc" : settingFunction.getUserSettingsFunc
};

exports.functionsRegistry = functionsRegistry;