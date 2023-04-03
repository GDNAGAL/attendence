import React from "react";
import "./App.css";
import "./assets/css/font-awesome.css";
import "./assets/css/bootstrap.css";
// import "./assets/css/custom.css";
import Navbar from "./components/UI/Navbar";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attendence from "./components/attendence";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/emp" element={<Employee />}></Route>
        <Route exact path="/attendence" element={<Attendence />}></Route>
      </Routes>
    </Router>
    // <>
    //   <Navbar />
    //   {/* <Dashboard /> */}
    //   <Employee />
    // </>
  );
}

export default App;
