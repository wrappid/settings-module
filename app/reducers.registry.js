import settingsReducer from "./reducers/settingsReducer";
import testReducer from "./reducers/test.reducer";

export const ReducerRegistry = {
  settings: settingsReducer,
  test    : testReducer,
};
