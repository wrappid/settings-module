import {
  CoreH6,
  CoreTypographyBody1,
  setUserTheme,
  CoreStack,
  CoreCard,
  CoreCardContent,
  CoreBox,
  CoreGrid,
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";
import theme1 from "../themes/theme1.json";
import theme2 from "../themes/theme2.json";

export default function SettingsAppearance() {
  const userTheme = useSelector((state) => state.app.userTheme);
  const userThemeId = useSelector((state) => state.app.userThemeId);
  const allThemes = [
    { label: "Theme One", value: theme1, id: "theme-1" },
    { label: "Theme Two", value: theme2, id: "theme-2" },
  ];

  const dispatch = useDispatch();
  const changeUserTheme = (id) => {
    let selTheme = allThemes?.find((theme) => theme.id === id)?.value;
    console.log("THEME", selTheme);
    dispatch(setUserTheme({ theme: selTheme, id: id }));
  };

  console.log("USer Theme", userTheme);

  return (
    <>
      <CoreH6>Available Themes</CoreH6>
      <CoreGrid>
        {allThemes?.map((theme) => (
          <CoreBox
            key={theme.id}
            OnClick={() => {
              changeUserTheme(theme.id);
            }}
            style={{ marginLeft: 16 }}
            gridProps={{ gridSize: { xs: 6, sm: 4, lg: 3 } }}
          >
            <CoreCard style={userThemeId === theme.id ?{borderStyle: 'solid', borderWidth: 2, borderRadius: 20}:{}}>
              {/* <CoreCardContent> */}
              <CoreBox
                style={{
                  height: 40,
                  backgroundColor: theme?.value?.palette?.primary?.main,
                }}
              />
              <CoreBox
                style={{
                  height: 60,
                  backgroundColor: theme?.value?.palette?.background?.default,
                }}
              >
                <CoreTypographyBody1
                  style={{ color: theme?.value?.palette?.text?.primary }}
                >
                  {theme.label}
                </CoreTypographyBody1>
              </CoreBox>
              {/* </CoreCardContent> */}
            </CoreCard>
          </CoreBox>
        ))}
      </CoreGrid>
    </>
  );
}
