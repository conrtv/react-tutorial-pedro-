import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { useState, createContext } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contact </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div>footer</div>
      </Router>
    </div>
  );
}
export default App;
