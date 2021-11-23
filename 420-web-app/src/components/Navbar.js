import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/aboutus";
import Admission from "../pages/admission";

export default function NavbarComp() {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="rgb(255,199,44)" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Link as={Link} to="/aboutUs">
                                    About Us
                                </Nav.Link>

                                <Nav.Link href="http://www.southeastern.edu/admin/admissions/">
                                    Admission
                                </Nav.Link>
                                <NavDropdown
                                    title="Prerequisite Charts"
                                    id="collasible-nav-dropdown"
                                    className=""
                                >
                                    <NavDropdown.Item href="http://www.southeastern.edu/acad_research/depts/comp_sci/undergrad_studies/cmps/pdfs/Sci_Flow_2018.pdf">
                                        Scientific
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://buildthis.com/coming-soon-pages/">
                                        Data Science
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="http://www.southeastern.edu/acad_research/depts/comp_sci/undergrad_studies/cmps/pdfs/Pre-MBA_Flow_2018.pdf">
                                        Pre-MBA
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="http://www.southeastern.edu/acad_research/depts/comp_sci/undergrad_studies/cmps/pdfs/IT_Flow_2018.pdf">
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
