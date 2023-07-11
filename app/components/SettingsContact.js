import { CoreForm, FORM_IDS, FORM_VIEW_MODE, CoreSection, CoreH5, CoreBox, CoreTypographyBody1 } from "@wrappid/core";
import { useSelector } from "react-redux";
import React, { useState } from 'react';

export default function SettingsContact() {
  const personId = useSelector(state => state?.profile?.basic?.id);

  return (
    <>
      <CoreSection heading="Emails">
        <CoreBox>
          <CoreTypographyBody1>
            Please enter the email address you would like to use as your primary contact method. Make sure it is a valid and active email address that you have access to.
          </CoreTypographyBody1>
        </CoreBox>
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_EMAIL}
          mode={FORM_VIEW_MODE}
          query={{ _defaultFilter: encodeURIComponent(JSON.stringify({ personId: personId })) }}
        />
        {/* <CoreEmailOrPhoneLink /> */}
      </CoreSection>

      <CoreSection heading="Phone Numbers">
        <CoreBox>
          <CoreTypographyBody1>
            Enter the phone number you would like to associate with your account. This can be a mobile number.
          </CoreTypographyBody1>
        </CoreBox>
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_PHONE}
          mode={FORM_VIEW_MODE}
          query={{ _defaultFilter: encodeURIComponent(JSON.stringify({ personId: personId })) }}
        />
      </CoreSection>
    </>
  );
}
