import { AppContainerLayout, CoreCustomTabs, CoreLayoutItem } from "@wrappid/core";
import { useSelector } from "react-redux";

export default function Settings() {
  const settingsMeta = useSelector(state=> state.settings.settingsMeta);
  const settingsTabMeta = settingsMeta?.find((meta) => meta?.name === "settingsTabs");

  const settingTabs = settingsTabMeta?.value || [];
  let tabsContent = [
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
      id   : "changePassword",
      label: "Change Password",
    },
    {
      comp : "SettingsAppearance",
      id   : "settingsAppearance",
      label: "Appearance",
    },
    {
      comp : "SettingsNotification",
      id   : "settingsNotification",
      label: "Notifications",
    }    
  ];

  if (settingTabs.length > 0) {
    tabsContent = settingTabs;
  }

  /** 
 * @todo Discuss with team weather to merge tabs or replace tabs 

  // const mergeTabs = (arr1, arr2) => {
  //   const map = new Map();
  
  //   arr1.concat(arr2).forEach(item => {
  //     map.set(item.id, item);
  //   });
  
  //   return Array.from(map.values());
  // };
  
  // tabsContent = mergeTabs(tabsContent, settingTabs);

  // console.log("tabsContent", tabsContent);
  */
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreCustomTabs tabsContent={tabsContent} />
      </CoreLayoutItem>
    </>
  );
  
}
