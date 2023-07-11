import {
  DELETE_USER_ACCOUNT_SUCCESS,
  GET_USER_SETTINGS_ERROR,
  GET_USER_SETTINGS_LOADING,
  GET_USER_SETTINGS_SUCCESS,
  SETTINGS_MENU_SUCCESS,
  USER_SETTINGS_UPDATE_SUCCESS,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR
} from "../types/settingsTypes";

const initState = {
  deleteAccoountSuccess: false,
  getUserSettingsError: false,
  getUserSettingsLoading: false,
  getUserSettingsSuccess: false,
  menu: [],
  reload: false,
  userSettings: null,
  verifyOtpSuccess: false, //new line
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SETTINGS_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload.data,
      };

    case GET_USER_SETTINGS_LOADING:
      return {
        ...state,
        getUserSettingsError: false,
        getUserSettingsLoading: true,
        getUserSettingsSuccess: false,
      };

    case GET_USER_SETTINGS_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      let userSettings = {};

      action.payload?.data?.forEach((data) => {
        userSettings[data?.name] = data?.value;
      });
      return {
        ...state,
        getUserSettingsError: false,
        getUserSettingsLoading: false,
        getUserSettingsSuccess: true,
        reload: false,
        userSettings: { ...state.userSettings, ...userSettings },
      };

    case GET_USER_SETTINGS_ERROR:
      return {
        ...state,
        getUserSettingsError: true,
        getUserSettingsLoading: false,
        getUserSettingsSuccess: false,
      };

    case USER_SETTINGS_UPDATE_SUCCESS:
      return { ...state, reload: true };

    case DELETE_USER_ACCOUNT_SUCCESS:
      return { ...state, deleteAccoountSuccess: true };

    case OTP_VERIFY_SUCCESS:
      return { ...state, verifyOtpSuccess: true }; //new line
    case OTP_VERIFY_ERROR:
      return { ...state, verifyOtpSuccess: false };  //new line


    // -- case LOGOUT_SUCCESS:
    //     // eslint-disable-next-line no-console
    //     console.log("FORM LOGOUT_SUCCESS REDUCER------", action);
    //     return initState;

    default:
      return state;
  }
};

export default settingsReducer;
