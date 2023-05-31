import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";

import { DELETE_USER_ACCOUNT_API, LOGOUT_API } from "../constants/api";
// import { LOGOUT_ERROR, LOGOUT_SUCCESS } from "../../store/types/authTypes";
import {
  DELETE_USER_ACCOUNT_ERROR,
  DELETE_USER_ACCOUNT_SUCCESS,
} from "../types/settingsTypes";

import {
  HTTP,
  apiRequestAction,
  CoreTypographyBody1,
  CoreTypographyCaption,
  CoreForm,
  FORM_IDS,
  FORM_VIEW_MODE,
  CoreContainedButton,
  CoreBox,
  CoreSection,
  CoreClasses,
} from "@wrappid/core";

export default function SettingsAccount() {
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.profile.contact);
  const deleteAccountSuccess = useSelector(
    (state) => state.settings.deleteAccoountSuccess
  );

  const OnDeleteAccount = () => {
    // swal({
    //   buttons: {
    //     cancel: "Cancel",
    //     confirm: "Yes",
    //   },
    //   icon: "info",
    //   text: "Are you sure?",
    //   title: "Confirm?",
    // }).then((data) => {
    //   if (data) {
    //     dispatch(
    //       apiRequestAction(
    //         HTTP.POST,
    //         DELETE_USER_ACCOUNT_API,
    //         true,
    //         {},
    //         DELETE_USER_ACCOUNT_SUCCESS,
    //         DELETE_USER_ACCOUNT_ERROR
    //       )
    //     );
    //   }
    // });
  };

  React.useEffect(() => {
    if (deleteAccountSuccess)
      dispatch(
        // apiRequestAction(
        //   HTTP.POST,
        //   LOGOUT_API,
        //   true,
        //   {},
        //   LOGOUT_SUCCESS,
        //   LOGOUT_ERROR
        // )
      );
  }, [deleteAccountSuccess, dispatch]);

  // eslint-disable-next-line no-console
  console.log("CONTACT INFO", contactInfo);
  return (
    <>
      <CoreSection heading="Primary Phone">
        <CoreForm
          formId={FORM_IDS.__CHANGE_PRIMARY_PHONE}
          mode={FORM_VIEW_MODE}
          allowDelete={false}
          initData={{
            data: contactInfo.phone,
            verified: contactInfo.phoneVerified,
          }}
        />
      </CoreSection>

      <CoreSection heading="Primary Email">
        <CoreForm
          allowDelete={false}
          formId={FORM_IDS.__CHANGE_PRIMARY_EMAIL}
          mode={FORM_VIEW_MODE}
          initData={{
            data: contactInfo.email,
            verified: contactInfo.emailVerified,
          }}
        />
      </CoreSection>

      <CoreSection
        heading="Delete Account"
        styleClasses={[CoreClasses.BG.BG_SECONDARY_LIGHT]}
      >
        <CoreTypographyBody1>
          You can delete your user account. Keep in mind after 7 days your
          account will be no longer found after deleting your account.
        </CoreTypographyBody1>

        <CoreTypographyCaption>
          *This is in experimental state.
        </CoreTypographyCaption>

        <CoreBox
          styleClasses={[
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
            CoreClasses.MARGIN.MT2,
          ]}
        >
          <CoreContainedButton
            disabled
            label="Delete Account"
            OnClick={OnDeleteAccount}
          />
        </CoreBox>
      </CoreSection>
    </>
  );
}
