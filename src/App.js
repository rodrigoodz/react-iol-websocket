import React, { useState } from "react";
import WebsocketApp from "./components/WebsocketApp";
import DataContext from "./context/DataContext";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <DataContext.Provider value={{ token, setToken }}>
      <WebsocketApp />
    </DataContext.Provider>
  );
};

export default App;
