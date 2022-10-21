import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [navTextColor, setnavTextColor] = useState("dark");
  const [modeName, setmodeName] = useState("Go Dark");
  const toggleMode = () => {
    if (mode === "light") {
      setnavTextColor("light");
      setmode("dark");
      setmodeName("Go Light");
      document.body.style.backgroundColor = "#25292c";
      document.body.style.color = "white";
      document.querySelector("#textArea").style.backgroundColor = "#454f58";
      document.querySelector("#textArea").style.color = "white";
    } else {
      setnavTextColor("dark");
      setmode("light");
      setmodeName("Go Dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector("#textArea").style.backgroundColor = "white";
      document.querySelector("#textArea").style.color = "black";
    }
  };
  return (
    <Router>
      <div>
        <Navbar
          {...{ title: "TextUtils", about: "About" }}
          mode={mode}
          toggleMode={toggleMode}
          textColor={navTextColor}
          modeName={modeName}
        />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm textHead="Enter text here" />}
            />
            <Route 
              exact 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
