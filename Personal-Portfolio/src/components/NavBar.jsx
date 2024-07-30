import { useState, useEffect } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect{() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, []}
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">Bethany Proctor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active-navbar-link" : 'navbar-link'}>Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#projects">My Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <button className="vvd" onClick={()=>console.log('lets connect')}><span>Contact Me</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}