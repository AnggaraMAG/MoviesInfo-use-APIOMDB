import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">Movies Info</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
export default Header;
