import "./App.css";
import Timer from "./Components/Timer";
import Settings from "./Pages/Settings";
import { useState } from "react";
import SettingsContext from "./Components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <SettingsContext.Provider
      value={{
        workMinutes,
        breakMinutes,
        setBreakMinutes,
        setWorkMinutes,
        showSettings,
        setShowSettings,
      }}
    >
      <main>{showSettings ? <Settings /> : <Timer />}</main>
    </SettingsContext.Provider>
  );
}

export default App;
