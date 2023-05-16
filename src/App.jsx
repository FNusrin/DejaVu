import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Login";

import AdminSidebar from "./Components/adminSidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div>
     
          {/* <AdminSidebar /> */}

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/Adminsidebar" element={<AdminSidebar/>} />
          </Routes>


         
     
      </div>
    </div>
  );
}

export default App;
