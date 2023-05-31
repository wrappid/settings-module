import { CoreForm, FORM_EDIT_MODE, FORM_IDS, CoreSection } from "@wrappid/core";

export default function SettingsPassword() {
  return (
    <CoreSection heading="Change Password">
      <CoreForm
        apiMode={"create"}
        onMountRead={false}
        formId={FORM_IDS.__CHANGE_PASSWORD}
        mode={FORM_EDIT_MODE}
      />
    </CoreSection>
  );
}
