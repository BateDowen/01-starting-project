import { Route, Routes } from "react-router-dom";
import HomePage from "./components/travel-agency-html-template/HomePage";


function App() {
  return (
    <div className="app">
      <Routes>
      <Route path="/" Component={HomePage}>

      </Route>

      </Routes>
      
    </div>
  );
}

export default App;
