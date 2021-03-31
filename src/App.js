import React, { useState } from "react";
import WebsocketApp from "./components/WebsocketApp";
import IDSContext from "./context/IDSContext";
import TokenContext from "./context/TokenContext";

const App = () => {
  const [token, setToken] = useState("");
  const [IDS, setIDS] = useState([]);
  return (
    <IDSContext.Provider value={{ IDS, setIDS }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <WebsocketApp />
      </TokenContext.Provider>
    </IDSContext.Provider>
  );
};

export default App;
