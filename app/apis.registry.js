export const ApiRegistry = {
  CHANGE_PASSWORD_API     : "/changePassword",
  CHANGE_PRIMARY_EMAIL_API: "/changePrimaryContact?type=email",
  CHANGE_PRIMARY_PHONE_API: "/changePrimaryContact?type=phone",
  CREATE_CONTACTS_API     : "/addContact",
  DELETE_CONTACTS_API     : "/contact/:id/delete",
  DELETE_USER_ACCOUNT_API : "/deleteUserAccount",
  GET_EMAILS_API          : "/data/PersonContacts?type=email",
  GET_PHONES_API          : "/data/PersonContacts?type=phone",
  GET_SETTINGS_MENU       : "/masterData?name=settings&level=5&_status=active",
  GET_SETTINGS_META_API   : "/settingMeta",
  GET_USER_SETTINGS       : "/userSettings",
  GET_WAP_API             : "/data/PersonContacts?type=wap",
  LOGOUT_API              : "/logout",
  UPDATE_USER_SETTINGS    : "/userSettings",
    
};