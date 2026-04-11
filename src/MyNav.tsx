import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import MyForm from "./MyForm";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNav() {

    return (
        <BrowserRouter basename="/react-navigation">
            <SetNav></SetNav>
            {/* Added the container here because it makes more sense to apply it to 
            all pages. :)) */}
            <Container className="py-4 px-3 mx-auto">
                <Routes>
                    <Route path="/home" element={<Home />} index />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="form" element={<MyForm />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )

};

function SetNav() {
    return (
        <Navbar bg="light" expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/home">Pumma-Bootstap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/form">Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}