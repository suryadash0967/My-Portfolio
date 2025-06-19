import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll background color update
  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Render helper for Nav Links
  const renderNavLink = (label, icon, pathOrId) => {
    return isMobile ? (
      <Nav.Link href={`#${pathOrId}`} onClick={() => updateExpanded(false)}>
        {icon} {label}
      </Nav.Link>
    ) : (
      <Nav.Link as={Link} to={`/${pathOrId === "home" ? "" : pathOrId}`} onClick={() => updateExpanded(false)}>
        {icon} {label}
      </Nav.Link>
    );
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex" style={{ fontFamily: "poppins", fontWeight: "500", fontSize: "28px" }}>
          Surya Dash.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>{renderNavLink("Home", <AiOutlineHome style={{ marginBottom: "2px" }} />, "home")}</Nav.Item>
            <Nav.Item>{renderNavLink("About", <AiOutlineUser style={{ marginBottom: "2px" }} />, "about")}</Nav.Item>
            <Nav.Item>
              {renderNavLink("Projects", <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />, "projects")}
            </Nav.Item>
            <Nav.Item>
              {renderNavLink("Resume", <CgFileDocument style={{ marginBottom: "2px" }} />, "my-cv")}
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/suryadash0967/My-Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
