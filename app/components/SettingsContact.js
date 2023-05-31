import { CoreForm, FORM_IDS, FORM_VIEW_MODE, CoreSection } from "@wrappid/core";

export default function SettingsContact() {
  return (
    <>
      <CoreSection heading="Emails">
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_EMAIL}
          mode={FORM_VIEW_MODE}
          // query={{ _defaultFilter: encodeURIComponent(JSON.stringify({ personId: personId })) }}
        />
      </CoreSection>

      <CoreSection heading="SMS Numbers">
        <CoreForm
          arrayView={true}
          allowEdit={false}
          formId={FORM_IDS.__CONTACT_PHONE}
          mode={FORM_VIEW_MODE}
          // query={{ _defaultFilter: encodeURIComponent(JSON.stringify({ personId: personId })) }}
        />
      </CoreSection>
    </>
  );
}
