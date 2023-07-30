import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { categoryList } from "@/constant/constant";
import { Button } from "antd";

const NavbarCustom = () => {
  const data = useSession();
  const { status } = data;

  return (
    <Navbar expand="lg" className="bg_primary" variant="dark">
      <Container>
        <Link className="navbar-brand fw-bold" href="/">
          pc<span className="text-primary-emphasis">Builder</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/product">
              Products
            </Link>
            {/* <Nav className="nav-link" href="/">
              Link
            </Nav> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              {categoryList.map((item) => (
                <Link className="dropdown-item" key={item.id} href={item?.link}>
                  {item?.name}
                </Link>
              ))}
            </NavDropdown>

            <Link href="/pc-builder">
              <button className=" btn-sm ms-4 btn btn-success">
                PC Builder
              </button>
            </Link>
            {status === "authenticated" ? (
              <Button type="primary" danger className="ms-3" onClick={signOut}>
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <button className="ms-3 btn-sm btn btn-warning text-white fw-bold px-3">
                  Login
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
