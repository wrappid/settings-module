import { CoreCustomTabs } from "@wrappid/core";

export default function Settings() {
  const tabsContent = [
    {
      comp : "SettingsAccount",
      id   : "account",
      label: "Account",
    },
    {
      comp : "SettingsContact",
      id   : "contacts",
      label: "Contacts",
    },
    {
      comp : "SettingsPassword",
      id   : "changepassword",
      label: "Change Password",
    },
  ];

  return <CoreCustomTabs tabsContent={tabsContent} />;
}
