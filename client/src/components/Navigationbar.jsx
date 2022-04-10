import React from "react";
import { Container, Navbar,NavDropdown, Nav } from "react-bootstrap";
const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Басты бет
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/selfrating">ЖШС "Коммнальник"</Nav.Link>
                        <Nav.Link href="/rating">Жалпы тізім</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/table">Кесте</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/cabinet">Жеке кабинет</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Кіру</Nav.Link>
                        <Nav.Link eventKey={2} href="/registration">
                           Регистрация
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar