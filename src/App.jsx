import Home from "./Home";
import Confirm from "./Confirm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/confirm" element={<Confirm />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
