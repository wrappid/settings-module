const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const settingsController = require("./controllers/settings.controller");
const {
  getUserSettings,
  getSettingMeta,
  postAddContact,
  putChangePrimaryContact
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
  putChangePrimaryContact: [CoreMiddlewaresRegistry.validation(putChangePrimaryContact),settingsController.putChangePrimaryContact]

};
//
exports.controllersRegistry = controllersRegistry;
