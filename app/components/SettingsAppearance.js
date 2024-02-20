import { CoreTypographyBody1 } from "@wrappid/core";

export default function SettingsAppearance() {
  // eslint-disable-next-line etc/no-commented-out-code
  // const userTheme = useSelector((state) => state.app.userTheme);
  // const userThemeId = useSelector((state) => state.app.userThemeId);
  // const allThemes = [{ id: "theme-1", label: "Theme One", value: theme1 }, { id: "theme-2", label: "Theme Two", value: theme2 }];

  // const dispatch = useDispatch();
  // const changeUserTheme = (id) => {
  //   let selTheme = allThemes?.find((theme) => theme.id === id)?.value;

  //   console.log("THEME", selTheme);
  //   dispatch(setUserTheme({ id: id, theme: selTheme }));
  // };

  //  eslint-disable-next-line no-console
  // console.log("USer Theme", userTheme);

  return (
    <>
      <CoreTypographyBody1>Theme appearance functionality recode pending</CoreTypographyBody1>

      {/* <CoreH6>Available Themes</CoreH6>

      <CoreGrid>
        {allThemes?.map((theme) => (
          <CoreBox
            key={theme.id}
            OnClick={() => {
              changeUserTheme(theme.id);
            }}
            style={{ marginLeft: 16 }}
            gridProps={{ gridSize: { lg: 3, sm: 4, xs: 6 } }}
          >
            <CoreCard style={userThemeId === theme.id ? { borderRadius: 20, borderStyle: "solid", borderWidth: 2 } : {}}>
              <CoreCardContent>
              <CoreBox
                style={{
                  backgroundColor: theme?.value?.palette?.primary?.main,
                  height         : 40,
                }}
              />

              <CoreBox
                style={{
                  backgroundColor: theme?.value?.palette?.background?.default,
                  height         : 60,
                }}
              >
                <CoreTypographyBody1
                  style={{ color: theme?.value?.palette?.text?.primary }}
                >
                  {theme.label}
                </CoreTypographyBody1>
              </CoreBox>

              </CoreCardContent>
            </CoreCard>
          </CoreBox>
        ))}
      </CoreGrid> */}
    </>
  );
}
