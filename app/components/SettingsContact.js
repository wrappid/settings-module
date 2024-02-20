import {
  CoreForm, FORM_IDS, FORM_VIEW_MODE, CoreSection, CoreBox, CoreTypographyBody1, CoreClasses
} from "@wrappid/core";
// eslint-disable-next-line etc/no-commented-out-code
// import { useSelector } from "react-redux";

export default function SettingsContact() {
  // eslint-disable-next-line etc/no-commented-out-code
  // const personId = useSelector(state => state?.profile?.basic?.id);

  return (
    <>
      <CoreSection heading="Emails" styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>
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
        />

        {/* -- <CoreEmailOrPhoneLink /> */}
      </CoreSection>

      <CoreSection heading="Phone Numbers" styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>
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
        />
      </CoreSection>
    </>
  );
}
