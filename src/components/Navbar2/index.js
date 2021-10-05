import React from "react";
import { Container, Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Navbar2 } from "./styles.js"
import logoImage from "../../assets/images/logo.png";

export function MyNavbar2(){
    return(
        <>
            <Container fluid>
				<Navbar2>
					<Navbar.Brand className="ms-3" href="#">
						<img src={logoImage} alt="Alamo" />
					</Navbar.Brand>

					<Nav className="me-auto navigation-menu">
						<NavDropdown title="Reservas" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">Fazer reserva</NavDropdown.Item>
							<Dropdown.Divider />
							<NavDropdown.Item href="#">
								Ver / Modificar reserva
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#">Ofertas</Nav.Link>
						<NavDropdown title="Check-in" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">Check-in acelerado</NavDropdown.Item>
							<Dropdown.Divider />
							<NavDropdown.Item href="#">
								Pule o contador
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#">Alamo Insiders</Nav.Link>
					</Nav>

					<Nav className="ms-auto login-insiders">
						<Nav.Link>Entrar</Nav.Link>
					</Nav>
				</Navbar2>
			</Container>
        </>
    )
}