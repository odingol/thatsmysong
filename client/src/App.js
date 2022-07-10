import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
