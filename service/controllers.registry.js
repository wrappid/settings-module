const settingsController = require("./controllers/settings.controller");
const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const {getUserSettings,getSettingMeta} = require("./validations/settings.validation")
const controllersRegistry = {
  getUserSettings: [
    CoreMiddlewaresRegistry.validation(getUserSettings),
    settingsController.getUserSettings,
  ],
  "getSettingMeta" : [ CoreMiddlewaresRegistry.validation(getSettingMeta), settingsController.getSettingMeta]
};

exports.controllersRegistry = controllersRegistry;
