import Settings from "./components/Settings";
import SettingsAccount from "./components/SettingsAccount";
import SettingsAppearance from "./components/SettingsAppearance";
import SettingsContact from "./components/SettingsContact";
import SettingsPassword from "./components/SettingsPassword";
import SettingsProfile from "./components/SettingsProfile";
// -- import SettingsNotification from "./components/SettingsNotification";

export const ComponentsRegistry = {
  Settings          : { comp: Settings },
  SettingsAccount   : { comp: SettingsAccount },
  SettingsAppearance: { comp: SettingsAppearance },
  SettingsContact   : { comp: SettingsContact },
  // -- SettingsNotification: {
  //     comp: SettingsNotification,
  // },
  SettingsPassword  : { comp: SettingsPassword },
  SettingsProfile   : { comp: SettingsProfile },
};