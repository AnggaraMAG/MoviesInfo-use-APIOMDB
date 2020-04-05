import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Movie Info</Navbar.Brand>
      </Navbar>
    </div>
  );
}
export default Header;
