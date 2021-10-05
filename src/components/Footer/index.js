import React from "react";

import { Row, Container } from "react-bootstrap";

import { Footer, FooterContent } from "./styles.js"


export function MyFooter() {
	return (
		<>
			<Container fluid >
				<hr></hr>
			</Container>
			<Container fluid>
				<Row>
					<Footer >
						<FooterContent >
							<h4>Suporte ao cliente</h4>
							<ul>
								<li>
									<a href="#home">Suporte ao cliente</a>
								</li>
								<li>
									<a href="#home">Ajuda e Perguntas Frequentes</a>
								</li>
							</ul>
						</FooterContent>
						<FooterContent >
							<h4>Reservas</h4>
							<ul>
								<li>
									<a href="#home">Começar uma reserva</a>
								</li>
								<li>
									<a href="#home">Exibir/Modificar/Cancelar</a>
								</li>
								<li>
									<a href="#home">Check-in Rápido</a>
								</li>
								<li>
									<a href="#home">Pular o guichê</a>
								</li>
								<li>
									<a href="#home">Viagens anteriores / Recibos</a>
								</li>
								<li>
									<a href="#home">Aluguel de carro somente de ida</a>
								</li>
							</ul>
						</FooterContent>
					</Footer>
					<Footer >
						<FooterContent >
							<h4>Ofertas</h4>
							<ul>
								<li>
									<a href="#Home">Ofertas</a>
								</li>
								<li>
									<a href="#Home">Receber Ofertas por E-mail</a>
								</li>
							</ul>
						</FooterContent>
						<FooterContent >
							<h4>Alamo Insiders</h4>
							<ul>
								<li>
									<a href="#Home">Alamo Insiders</a>
								</li>
								<li>
									<a href="#Home">Entrar</a>
								</li>
							</ul>
						</FooterContent>
						<FooterContent>
							<h4>Programas</h4>
							<ul>
								<li>
									<a href="#Home">Programa de Premiação de Parceiros</a>
								</li>
								<li>
									<a href="#Home">Oportunidade de franquia global</a>
								</li>
								<li>
									<a href="#Home" className="external">
										Agentes de viagem
									</a>
								</li>
								<li>
									<a href="#Home" className="external">
										Operadores de turismos
									</a>
								</li>
							</ul>
						</FooterContent>
					</Footer>

					<Footer>
						<FooterContent>
							<h4>Veículos</h4>
							<ul>
								<li>
									<a href="#Home">Carros</a>
								</li>
								<li>
									<a href="#Home">SUVs</a>
								</li>
								<li>
									<a href="#Home">Caminhões</a>
								</li>
								<li>
									<a href="#Home">Vans</a>
								</li>
							</ul>
						</FooterContent>
						<FooterContent>
							<h4>Agências</h4>
							<ul>
								<li>
									<a href="#Home">Fort Lauderdale</a>
								</li>
								<li>
									<a href="#Home">Hawaii</a>
								</li>
								<li>
									<a href="#Home">Los Angeles</a>
								</li>
								<li>
									<a href="#Home">Orlando</a>
								</li>
								<li>
									<a href="#Home">Agências</a>
								</li>
							</ul>
						</FooterContent>
					</Footer>

					<Footer>
						<FooterContent>
							<h4>Empresa</h4>
							<ul>
								<li>
									<a href="#Home">Sobre a Alamo</a>
								</li>
								<li>
									<a href="#Home" className="external">
										Carreiras
									</a>
								</li>
								<li>
									<a href="#Home">Carros Usados</a>
								</li>
								<li>
									<a href="#Home">Aplicativo da Alamo</a>
								</li>
							</ul>
						</FooterContent>
						<FooterContent>
							<h4>Política/Mapa do Site</h4>
							<ul>
								<li>
									<a href="#Home" className="external">
										Política de Privacidade
									</a>
								</li>
								<li>
									<a href="#Home" className="external">
										Política de Cookies
									</a>
								</li>
								<li>
									<a href="#Home">Termos de Uso</a>
								</li>
								<li>
									<a href="#Home">Mapa do Site</a>
								</li>
								<li>
									<a href="#Home" className="external">
										AdChoices
									</a>
								</li>
							</ul>
						</FooterContent>
					</Footer>
				</Row>
			</Container>
		</>
	);
}
