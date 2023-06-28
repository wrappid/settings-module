const express = require("express");

const settingsController = require("../controllers/settings.controller");

const settingsRouter = express.Router();

settingsRouter.get("/settingMeta", settingsController.getSettingMeta);
settingsRouter.post("/settingMeta", settingsController.postSettingMeta);
settingsRouter.put("/settingMeta/:id", settingsController.putSettingMeta);
settingsRouter.post("/userSettings", settingsController.postUserSettings);
settingsRouter.get("/userSettings", settingsController.getUserSettings);
settingsRouter.post("/deleteUserAccount", settingsController.deleteUserAccount);
settingsRouter.post("/logout", settingsController.logout);

module.exports = settingsRouter;

// following apis were not found 

// -- export const GET_SETTINGS_MENU = "/masterData?name=settings&level=5&_status=active";

// -- export const CHANGE_PASSWORD_API = "/changePassword";

// -- export const GET_EMAILS_API = "/data/PersonContacts?type=email";
// -- export const GET_PHONES_API = "/data/PersonContacts?type=phone";

// -- export const GET_WAP_API = "/data/PersonContacts?type=wap";

// -- export const CHANGE_PRIMARY_EMAIL_API = "/changePrimaryContact?type=email";

// -- export const CHANGE_PRIMARY_PHONE_API = "/changePrimaryContact?type=phone";

