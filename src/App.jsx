import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import AdminSidebar from "./AdminSidebar";


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
