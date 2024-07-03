import { CoreForm, FORM_IDS, FORM_VIEW_MODE } from "@wrappid/core";

import CustomSectionContent from "./CustomSectionContent";

// eslint-disable-next-line etc/no-commented-out-code
// import { useSelector } from "react-redux";

export default function SettingsContact() {
  // eslint-disable-next-line etc/no-commented-out-code
  // const personId = useSelector(state => state?.profile?.basic?.id);

  return (
    <>
      <CustomSectionContent>
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_EMAIL}
          mode={FORM_VIEW_MODE}
        />

        {/* -- <CoreEmailOrPhoneLink /> */}
      </CustomSectionContent>

      <CustomSectionContent>
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_PHONE}
          mode={FORM_VIEW_MODE}
        />
      </CustomSectionContent>
    </>
  );
}
