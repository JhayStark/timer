import { createContext } from "react";

export const SettingsContext = createContext({
  defaultValue: {},
  setDefaultValue: () => {},
});

export default SettingsContext;
