import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from '../pages/home';
import AboutUs from '../pages/aboutus';
import Admission from '../pages/admission';

export default function NavbarComp() {
  return (
   
    <Router>
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="rgb(255,199,44)"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
              <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>

              <Nav.Link as={Link} to="/admission">Admission</Nav.Link>
              <NavDropdown
                title="Concentrations"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Scientific
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Data Science
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Pre-MBA
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Information Technology
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/admission" element={<Admission />} />
        </Routes>
    </div>
      
    
    </Router>

  );
}

