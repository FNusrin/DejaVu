import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Components/Layout";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import Photogrid from "./Components/Photogrid";
import AdminSidebar from "./Components/adminSidebar";


function App() {
  return (
    <div className="App">
      <div>
        <Layout>
       
        <AdminSidebar/>
          <div className="pagecontent">
          <div className="d-flex justify-content-center align-items-center p-3">
           <div className="headingabout">
              <div className="headingcontent ">
                <h2>Stay On The Story</h2>
                <p className="caption">
                  Every company has a story to tell, so break out your
                  storytelling skills from that random English class you took
                  years ago and put them to work on your “About Us” page. Using
                  descriptive and emotive copy and gorgeous graphics, an “About
                  Us” page with a story works.
                </p>
                <p>
                  <Facebook style={{ color: "black", marginRight: "20px"}}></Facebook>
                  <Instagram style={{ color: "black", marginRight: "20px"}}></Instagram>
                  <Twitter style={{ color: "black", marginRight: "20px"}}></Twitter>
                  <GitHub style={{ color: "black",}}></GitHub>
                </p>
              </div>
              </div>
            </div>
          
          <Photogrid/>
          </div>
         
        </Layout>
      </div>
      </div>

    
  );
}

export default App;
