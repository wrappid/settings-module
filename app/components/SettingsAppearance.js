import { CoreClasses, CoreTypographyBody1, ThemeSelector } from "@wrappid/core";

import CustomSectionContent from "./CustomSectionContent";

export default function SettingsAppearance() {
  // eslint-disable-next-line etc/no-commented-out-code

  return (
    <>
      <CustomSectionContent>
        <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]} >
          Select theme
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          Select the theme from below that you want to use.
        </CoreTypographyBody1>

        <ThemeSelector />
      </CustomSectionContent>
    </>
  );
}
