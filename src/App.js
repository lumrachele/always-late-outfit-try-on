import { useState, createContext } from "react";
import MainContainer from "./components/main-container.js";
// import { AppContextProvider } from "/app-context.js";

import "./App.css";

export const AppContext = createContext(null);

// export const AppContextProvider = (props, children) => {
//   return <AppContext.Provider {...props}>{children}</AppContext.Provider>;
// };

function App() {
  const [currentTopIndex, setCurrentTopIndex] = useState(0);

  return (
    <AppContext.Provider value={{ currentTopIndex, setCurrentTopIndex }}>
      <div className="App">
        <MainContainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
