import {
  CoreBox,
  CoreForm,
  CoreFormControlLabel,
  CoreFormGroup,
  CoreH5,
  CoreSection,
  CoreSwitch,
  CoreTypographyBody1,
  FORM_EDIT_MODE,
  FORM_IDS
} from "@wrappid/core";

export default function SettingsNotification() {
  return (
    <>
      <CoreSection heading="Email Notifications">
        <CoreTypographyBody1>
          Enter email addresses that will receive email notifications regarding
          payments, settlements, reports, webhooks, etc.
        </CoreTypographyBody1>

        <CoreForm
          apiMode={"create"}
          onMountRead={false}
          formId={FORM_IDS.__UPDATE_EMAIL_NOTIFICATIONS}
          mode={FORM_EDIT_MODE}
        />
      </CoreSection>

      <CoreSection
        heading={
          <CoreBox>
            <CoreFormGroup aria-label="position" row>
              <CoreFormControlLabel
                value="start"
                control={<CoreSwitch defaultChecked />}
                label={<CoreH5>Enable SMS Notifications</CoreH5>}
                labelPlacement="start"
              />
            </CoreFormGroup>
          </CoreBox>
        }
      >
        <CoreTypographyBody1>
          Enter mobile numbers that will receive sms notifications regarding
          payments, settlements, reports etc.
        </CoreTypographyBody1>

        <CoreForm
          apiMode={"create"}
          onMountRead={false}
          formId={FORM_IDS.__UPDATE_SMS_NOTIFICATIONS}
          mode={FORM_EDIT_MODE}
        />
      </CoreSection>

      <CoreSection heading="WhatsApp Notifications">
        <CoreTypographyBody1>
          Enter mobile numbers that will receive whatsapp notifications
          regarding payments, settlements, reports etc.
        </CoreTypographyBody1>

        <CoreForm
          apiMode={"create"}
          onMountRead={false}
          formId={FORM_IDS.__UPDATE_WHATSAPP_NOTIFICATIONS}
          mode={FORM_EDIT_MODE}
        />
      </CoreSection>
    </>
  );
}