const settingsController = require("./controllers/settings.controller");
const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const {
  getUserSettings,
  getSettingMeta,
  postAddContact
} = require("./validations/settings.validation");
const controllersRegistry = {
  getUserSettings: [
    CoreMiddlewaresRegistry.validation(getUserSettings),
    settingsController.getUserSettings,
  ],
  getSettingMeta: [
    CoreMiddlewaresRegistry.validation(getSettingMeta),
    settingsController.getSettingMeta,
  ],
  postAddContact: [settingsController.postAddContact],
  putDeleteContact: [settingsController.putDeleteContact],
  getPrimaryContact: [settingsController.getPrimaryContact],
};
//
exports.controllersRegistry = controllersRegistry;
