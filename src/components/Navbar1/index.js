import React from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { Navbar1 } from "./styles.js"

export function MyNavbar1() {
	return (
		<>
			<Navbar1>
				<Container fluid>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="ms-auto navigation-menu">
						<Nav.Link>Receber ofertas por e-mail</Nav.Link>
						<Nav.Link>Agências</Nav.Link>
						<Nav.Link>Veículos</Nav.Link>
						<Nav.Link>Suporte ao cliente</Nav.Link>
					</Nav>
					{/* Language Selector */}
					<Nav className="me-1 language-toggle">
						<Dropdown>
							<Dropdown.Toggle >Português</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#">Português</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#">Inglês</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#">Espanhol</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Container>
			</Navbar1>
		</>
	);
}
