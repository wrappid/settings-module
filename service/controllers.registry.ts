import { CoreMiddlewaresRegistry } from "@wrappid/service-core";
import * as settingsController from "./controllers/settings.controller";
import {
  getUserSettings,
  putChangePrimaryContact,
  postAddContact
} from "./validations/settings.validation";


const controllersRegistry = {
  getUserSettings: [
    CoreMiddlewaresRegistry.validation(getUserSettings),
    settingsController.getUserSettings,
  ],

  putDeleteContact: [settingsController.putDeleteContact],
  getPrimaryContact: [settingsController.getPrimaryContact],
  putChangePrimaryContact: [CoreMiddlewaresRegistry.validation(putChangePrimaryContact), settingsController.putChangePrimaryContact],
  postAddContact: [settingsController.postAddContact]

};
//
export default controllersRegistry;
