import { Routes, Route } from "react-router-dom";
import Statistics from "./screens/Statistics";
import Nav from "./components/Nav";
import Sales from "./screens/Sales";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="home-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Stats" element={<Statistics />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
