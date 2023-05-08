import React, { Children, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import { FormGroup, IconButton } from "@mui/material";

// import './App.css'

function Layout({ children }) {
  return (
    <Fragment>
      {/* // Header Part */}

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="px-3"
            style={{
              fontFamily: "Fira Sans, sans-serif",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            Deja Vu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="px-5 py-3">
            <Nav
              className="my-2 my-lg-0 px-3"
              style={{
                maxHeight: "100px",
                marginLeft: "auto",
                fontFamily: "Fira Sans, sans-serif",
                fontSize: "15px",
                fontWeight: "normal",
              }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Contact</Nav.Link>
            </Nav>
            <SearchIcon
              style={{ color: "black", marginLeft: "10px" }}
            ></SearchIcon>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}

      {/*  // Footer Part */}

      <footer>
        <div className="pagefooter">
          <div className="footcontainer">
            <div className="footheading">
              <h2>Get the Best Of all Hands Delivered to your Inbox</h2>
              <p>Subscribe to our newsletters and stay updated</p>
              <Form className="d-flex justify-content-center">
                <Form.Group className="mb-2 emailhere " style={{width:350}}>
                  <Form.Control type="email" placeholder="Write Your Email Here" />
                </Form.Group>
                <Button className="mb-2" type="submit" variant="dark">Subscribe</Button>
              </Form>
            </div>
          </div>
          
        </div>
        <div className="copyright 'text-center p-3' ">
        &copy; {new Date().getFullYear()} Copyright {' '}
        <a className='text-dark' href='#'>
           DejaVu.com
        </a>
      
          </div>
      </footer>
      
    </Fragment>
  );
}
export default Layout;
