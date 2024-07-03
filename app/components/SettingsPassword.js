import * as React from "react";

import {
  coreUseNavigate, CoreDialogContext, CoreForm, FORM_EDIT_MODE, FORM_IDS, CoreClasses 
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import CustomSectionContent from "./CustomSectionContent";

export default function SettingsPassword() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
  const { setDialog } = React.useContext(CoreDialogContext);
  const { changePasswordSuccess } = useSelector(state => state.auth);

  React.useEffect(() => {
    // clear changePasswordSuccess state
    if (changePasswordSuccess) {
      dispatch({ type: "RESET_CHANGE_PASSWORD_STATUS" });
      setDialog({
        doneButton: () => {
          navigate("/logout");
        },
        doneButtonLabel: "Re-Login",
        noCancelButton : true,
        showDialog     : true,
        subtitle       : "Password changed successfully.",
        title          : "Success",
        type           : "success"
      });
    }
  }, [changePasswordSuccess]);

  return (
    <CustomSectionContent styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>
      <CoreForm
        styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}
        apiMode={"create"}
        onMountRead={false}
        formId={FORM_IDS.__CHANGE_PASSWORD}
        mode={FORM_EDIT_MODE}
      />
    </CustomSectionContent>
  );
}
