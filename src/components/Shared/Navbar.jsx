import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { categoryList } from "@/_server/constant";

const NavbarCustom = () => {
  return (
    <Navbar expand="lg" className="bg_primary" variant="dark">
      <Container>
        <Link className="navbar-brand" href="/">
          Logo
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            {/* <Nav className="nav-link" href="/">
              Link
            </Nav> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              {categoryList.map((item) => (
                <>
                  <Link className="dropdown-item" href={item?.link}>
                    {item?.name}
                  </Link>
                </>
              ))}

              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <Link href="/pc-builder">
              <Button className="ms-4"> PC Builder </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
