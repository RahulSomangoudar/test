import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch for react-router v6+
import Login from "./components/Login"; // Import your Login component
import Register from "./components/Register"; // Import your Register component
import Home from "./components/Home"; // Import your Home component

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>MERN Authentication App</h1>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
