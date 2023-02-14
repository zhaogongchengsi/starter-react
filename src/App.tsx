import { Routes, Route } from "react-router-dom";
import Home from "@/pages/index";
import Login from "@/pages/login/index";
import "./App.scss";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
